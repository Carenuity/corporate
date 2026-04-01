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
};

type NewsletterPayload = {
  categoryId: number;
  email: string;
};

const SubscriptionWidget: React.FC<ISubscriptionWidget> = ({
  categoryId,
  chipGlobeProductsRef,
  internshipRef,
  openOfficeDayRef,
  openPositionsRef,
  homeChallengeRef,
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

    const newsletters: NewsletterPayload[] = [];

    /* add to Home Challenge newsletter if home challenge checkbox ref exists and is checked
     * or
     * if the ref does not exist
     */
    if (homeChallengeRef?.current?.checked) {
      newsletters.push({
        categoryId,
        email,
      });
    } else if (!homeChallengeRef) {
      newsletters.push({
        categoryId,
        email,
      });
    }

    // Add to ChipGlobe Products newsletter
    if (chipGlobeProductsRef?.current?.checked) {
      newsletters.push({
        categoryId: 11,
        email,
      });
    }

    // Add to Internship newsletter
    if (internshipRef?.current?.checked) {
      newsletters.push({
        categoryId: 13,
        email,
      });
    }

    // Add to Open Office Day newsletter
    if (openOfficeDayRef?.current?.checked) {
      newsletters.push({
        categoryId: 14,
        email,
      });
    }

    // Add to Open Positions newsletter
    if (openPositionsRef?.current?.checked) {
      newsletters.push({
        categoryId: 12,
        email,
      });
    }

    if (newsletters.length === 0) {
      alert('Nothing selected! Make a selection to proceed.');
      return;
    }

    setInProgress(true);
    const url = `${NewsletterHostname}/v1/subscriptions`;
    try {
      const responses = await Promise.all(
        newsletters.map((payload) =>
          fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
              'Content-Type': 'application/json',
            },
          })
        )
      );

      const hasError = responses.some((r) => !r.ok);
      if (hasError) {
        alert(`Something went wrong! Kindly try again.`);
      } else {
        alert(
          'Subscription(s) initiated successfully. Check your email for verification(s)'
        );
      }
    } catch {
      alert(`Something went wrong! Kindly try again.`);
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
