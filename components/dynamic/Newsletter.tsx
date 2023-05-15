import Link from 'next/link';

const Newsletter = ({email}: {email: string}) => {
  return (
    <>
      <div className='ps-xl-4'>
        <h3 className='text-white h5 mb-1-9'>Newsletter</h3>
        <p className='text-white opacity8 mb-3'>
          Subscribe to our newsletter to receive updates on the latest news!
        </p>
        <Link
          href={`mailto:${email}?subject=${encodeURIComponent(
            'Subscription to Carenuity Newsletter'
          )}&body=${encodeURIComponent(
            'Please add me to your Distribution List for the Carenuity Newsletter. Thank you.'
          )}`}
          className='btn-style1 secondary small text-center col-12'
        >
          <span>Subscribe with us</span>
        </Link>
      </div>
    </>
  );
}

export default Newsletter