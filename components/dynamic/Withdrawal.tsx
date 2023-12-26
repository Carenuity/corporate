import { LANG_ENGLISH } from '../../utils/constants';
import BlogLayout from '../BlogLayout';

const Withdrawal = () => {
  return (
    <>
      <BlogLayout lang={LANG_ENGLISH}>
        <div className="wow fadeIn" data-wow-delay="20ms">
          {/* <h3 className='h4 mb-3 text-primary'>Payment and shipping</h3> */}

          <h5 className="h6 mb-2">
            Information on the right of withdrawal for consumers
          </h5>
          <p className="mb-4">
            A consumer is any natural person who concludes a legal transaction
            for purposes which can predominantly neither be attributed to his
            commercial nor his self-employed professional activity.
          </p>

          <h5 className="h6 mb-2">Right of revocation</h5>
          <p className="mb-1">
            You may revoke your contractual declaration within one month without
            stating reasons in text form (e.g. letter, fax, e-mail). The period
            begins after receipt of this instruction in text form, but not
            before conclusion of the contract and also not before fulfilment of
            our duties to inform according to § 312c Abs. 2 BGB in connection
            with § 1 Abs. 1, 2 and 4 BGB-InfoV as well as our duties according
            to § 312e Abs. 1 Satz 1 BGB in connection with § 3 BGB-InfoV. The
            timely dispatch of the revocation is sufficient to comply with the
            revocation period. The revocation is to be addressed to:
          </p>
          <p className="mb-1">Chipglobe GmbH </p>
          <p className="mb-1">Cincinnatistr. 60 </p>
          <p className="mb-1">81549 Munich</p>
          <p className="mb-4">Germany</p>
          <p className="mb-4">
            You must return or hand over the goods to us immediately and in any
            case within fourteen days of the day on which you notify us of the
            revocation of this contract at the latest. This period shall be
            deemed to have been observed if you dispatch the goods before expiry
            of the period of fourteen days. We shall bear the costs of returning
            the goods.
          </p>

          <h5 className="h6 mb-2">Consequences of revocation</h5>
          <p className="mb-4">
            In the event of an effective revocation, the services received by
            both parties shall be returned and any benefits derived (e.g.
            interest) shall be surrendered. If you are unable to return the
            goods or services received in whole or in part or only in a
            deteriorated condition, you must compensate us for the loss in
            value. This can lead to the fact that you must fulfil the
            contractual payment obligations for the period up to the revocation
            nevertheless. Obligations to reimburse payments must be fulfilled
            within 30 days. The period begins for you with the dispatch of your
            declaration of revocation, for us with its receipt.
          </p>

          <h5 className="h6 mb-2">Special notes</h5>
          <p className="mb-4">
            Your right of withdrawal expires prematurely if the contract is
            completely fulfilled by both parties at your express request before
            you have exercised your right of withdrawal.
          </p>

          <h5 className="h6 mb-2">End of the revocation instruction</h5>
        </div>
      </BlogLayout>
    </>
  );
};

export default Withdrawal;
