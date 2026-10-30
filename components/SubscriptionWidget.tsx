import React, { useState } from 'react';
import { NewsletterHostname } from '../utils/constants';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import { useContext } from 'react';

type ISubscriptionWidget = {
  categoryId: number;
  openPositionsRef?: React.RefObject<HTMLInputElement>;
  internshipRef?: React.RefObject<HTMLInputElement>;
  openOfficeDayRef?: React.RefObject<HTMLInputElement>;
  chipGlobeProductsRef?: React.RefObject<HTMLInputElement>;
  homeChallengeRef?: React.RefObject<HTMLInputElement>;
  // Page wording for categoryId, shown if the category name lookup fails
  categoryLabel?: string;
};

type NewsletterPayload = {
  categoryId: number;
  email: string;
};

// label is the page wording, used when the category name lookup fails
type Newsletter = NewsletterPayload & { label?: string };

const CategoryNamesTimeoutMs = 5000;
// Longer than the name lookup, since the API sends the verification email
// before it responds
const SubscribeTimeoutMs = 20000;

// AbortSignal.timeout is missing before Safari 16 and Chrome 103
const timeoutSignal = (ms: number): AbortSignal => {
  if (typeof AbortSignal.timeout === 'function') {
    return AbortSignal.timeout(ms);
  }
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
};

type SubscriptionOutcome = 'sent' | 'already' | 'rateLimited' | 'failed';

// POST /v1/subscriptions returns 201 { data, code } on success,
// { error: { statusCode, message } } otherwise. Branch on code, not data.
const subscribe = async (
  url: string,
  { categoryId, email }: Newsletter
): Promise<SubscriptionOutcome> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ categoryId, email } as NewsletterPayload),
      headers: {
        'Content-Type': 'application/json',
      },
      signal: timeoutSignal(SubscribeTimeoutMs),
    });
    if (response.status === 429) return 'rateLimited';
    if (!response.ok) return 'failed';
    const body = await response.json().catch(() => ({}));
    if (body.code === 'VERIFICATION_SENT') return 'sent';
    if (body.code === 'ALREADY_SUBSCRIBED') return 'already';
    return 'failed';
  } catch {
    return 'failed';
  }
};

type CategoryNames = Record<number, string>;

// Looks up category names from GET /v1/sharepoint/newsletter-categories.
// Returns an empty lookup if the request fails or times out, so the feedback
// still shows.
const fetchCategoryNames = async (): Promise<CategoryNames> => {
  try {
    const response = await fetch(
      `${NewsletterHostname}/v1/sharepoint/newsletter-categories`,
      { signal: timeoutSignal(CategoryNamesTimeoutMs) }
    );
    if (!response.ok) return {};
    const { data } = await response.json();
    return Object.fromEntries(
      data.map(({ Id, Name }: { Id: number; Name: string }) => [Id, Name])
    );
  } catch {
    return {};
  }
};

// Single-newsletter widgets get a short message without the category name,
// since several product pages share one category id.
const feedbackMessage = (
  newsletters: Newsletter[],
  outcomes: SubscriptionOutcome[],
  names: CategoryNames
) => {
  const categoryNames = (selection: Newsletter[]) =>
    selection
      .map(
        ({ categoryId, label }) =>
          names[categoryId] ?? label ?? `Newsletter ${categoryId}`
      )
      .join(', ');
  const withOutcome = (outcome: SubscriptionOutcome) =>
    newsletters.filter((_, i) => outcomes[i] === outcome);
  const sent = withOutcome('sent');
  const already = withOutcome('already');
  const rateLimited = withOutcome('rateLimited');
  const failed = withOutcome('failed');

  if (newsletters.length === 1) {
    if (sent.length) {
      return 'Subscription initiated successfully. Check your email for verification.';
    }
    if (already.length) return 'You are already subscribed.';
    if (rateLimited.length) {
      return 'Too many attempts. Kindly try again in a few minutes.';
    }
    return 'Something went wrong! Kindly try again.';
  }

  const lines: string[] = [];
  if (sent.length) {
    lines.push(
      `Verification email sent for: ${categoryNames(
        sent
      )}. Check your email for verification(s).`
    );
  }
  if (already.length) {
    lines.push(
      `Already subscribed to: ${categoryNames(already)} (no email sent).`
    );
  }
  if (rateLimited.length) {
    lines.push(
      `Too many attempts for: ${categoryNames(
        rateLimited
      )}. Kindly try again in a few minutes.`
    );
  }
  if (failed.length) {
    lines.push(
      `Something went wrong for: ${categoryNames(failed)}. Kindly try again.`
    );
  }
  return lines.join('\n\n');
};

const SubscriptionWidget: React.FC<ISubscriptionWidget> = ({
  categoryId,
  chipGlobeProductsRef,
  internshipRef,
  openOfficeDayRef,
  openPositionsRef,
  homeChallengeRef,
  categoryLabel,
}) => {
  const [inProgress, setInProgress] = useState(false);
  const { state } = useContext(LanguageSwitchContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget['subscriber-email']?.value;
    if (!email) {
      alert('Please enter an email address.');
      return;
    }

    const newsletters: Newsletter[] = [];

    /* add to Home Challenge newsletter if home challenge checkbox ref exists and is checked
     * or
     * if the ref does not exist
     */
    if (homeChallengeRef?.current?.checked) {
      newsletters.push({
        categoryId,
        email,
        label: categoryLabel,
      });
    } else if (!homeChallengeRef) {
      newsletters.push({
        categoryId,
        email,
        label: categoryLabel,
      });
    }

    // Add to ChipGlobe Products newsletter
    if (chipGlobeProductsRef?.current?.checked) {
      newsletters.push({
        categoryId: 11,
        email,
        label: 'ChipGlobe products',
      });
    }

    // Add to Internship newsletter
    if (internshipRef?.current?.checked) {
      newsletters.push({
        categoryId: 13,
        email,
        label: 'Internship',
      });
    }

    // Add to Open Office Day newsletter
    if (openOfficeDayRef?.current?.checked) {
      newsletters.push({
        categoryId: 14,
        email,
        label: 'Open Office Day',
      });
    }

    // Add to Open Positions newsletter
    if (openPositionsRef?.current?.checked) {
      newsletters.push({
        categoryId: 12,
        email,
        label: 'Open positions',
      });
    }

    if (newsletters.length === 0) {
      alert('Nothing selected! Make a selection to proceed.');
      return;
    }

    setInProgress(true);
    const url = `${NewsletterHostname}/v1/subscriptions`;
    // Names are only shown when several newsletters were selected, so only
    // fetch them then, alongside the subscription requests.
    try {
      const [outcomes, names] = await Promise.all([
        Promise.all(
          newsletters.map((newsletter) => subscribe(url, newsletter))
        ),
        newsletters.length > 1 ? fetchCategoryNames() : {},
      ]);
      alert(feedbackMessage(newsletters, outcomes, names));
    } finally {
      setInProgress(false);
    }
  };

  return (
    <>
      <form
        method="post"
        style={{ textAlign: 'center' }}
        onSubmit={handleSubmit}
      >
        <label
          className={' rounded-pill'}
          //style={{ backgroundColor: '#D3D3D3' }}
          htmlFor="subscriber-email"
        >
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <input
                type="email"
                id="subscriber-email"
                name="subscriber-email"
                placeholder="Enter your email"
                className={'btn rounded-pill  '}
                style={{
                  backgroundColor: '#D3D3D3',
                  textAlign: 'left',
                  height: '48px',
                  width: '400px',
                  border: 'none',
                }}
                required
              ></input>
            </div>

            <div className="col-lg-3">
              <button
                disabled={inProgress}
                type="submit"
                className={'btn btn-lg btn-success rounded-pill'}
                style={{
                  height: '48px',
                  width: '150px',
                }}
              >
                {inProgress && 'Subscribing...'}
                {!inProgress && 'Subscribe'}
              </button>
            </div>
          </div>
        </label>

        <p style={{ textAlign: 'center' }} className="mt-2">
          {state === 'en' && (
            <>
              <strong>Note:</strong> Please check your spam folder for the
              subscription email should it be flagged as spam.
            </>
          )}
          {state === 'de' && (
            <>
              <strong>Hinweis:</strong> Bitte überprüfen Sie Ihren Spam-Ordner
              auf Abonnement-E-Mail, falls diese als Spam gekennzeichnet ist.
            </>
          )}
        </p>
      </form>
    </>
  );
};

export default SubscriptionWidget;
