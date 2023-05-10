import Image from 'next/image';
import Link from 'next/link';

const Index = ({
  phone,
  logoUrl,
  email,
}: {
  phone: string;
  logoUrl: string;
  email: string;
}) => {
  return (
    <>
      <div className='bg-primary py-1-9 mb-6 mb-xxl-10'>
        <div className='container'>
          <div className='row mt-n1-9 align-items-center'>
            <div
              id='contact-us'
              className='col-md-6 col-lg-4 mt-1-9 wow fadeIn'
              data-wow-delay='200ms'
            >
              <div className='d-flex align-items-center'>
                <div className='flex-shrink-0'>
                  <Image
                    width={40}
                    height={40}
                    src='/img/icons/07.png'
                    alt='...'
                  />
                </div>
                <div className='flex-grow-1 ms-3'>
                  <p className='mb-0 text-white'>Contact Us</p>
                  <h3 className='mb-0 h5 text-white'>
                    <a
                      href={`tel:${phone.replaceAll(/[^0-9+]/g, '')}`}
                      className='text-white text-dark-hover'
                    >
                      {phone}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 col-lg-4 mt-1-9 text-start text-lg-center wow fadeIn'
              data-wow-delay='400ms'
            >
              <div className='footer-logo'>
                <Link href='/'>
                  <Image width={150} height={100} src={logoUrl} alt='...' />
                </Link>
              </div>
            </div>
            <div
              className='col-md-6 col-lg-4 mt-1-9 wow fadeIn'
              data-wow-delay='600ms'
            >
              <div className='d-flex align-items-center text-lg-end'>
                <div className='flex-grow-1 ms-3 ms-lg-0 me-lg-3 order-2 order-lg-1'>
                  <p className='mb-0 text-white'>Mail Us</p>
                  <h3 className='mb-0 h5 text-white'>
                    <a
                      href={`mailto:${email}`}
                      className='text-white text-dark-hover'
                    >
                      {email}
                    </a>
                  </h3>
                </div>
                <div className='flex-shrink-0 order-1 order-lg-2'>
                  <Image
                    width={40}
                    height={40}
                    src='/img/icons/08.png'
                    alt='...'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index