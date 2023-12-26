import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta
          name="description"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <title>Page Not Found</title>
      </Head>

      <section className="p-0">
        <div className="container d-flex flex-column position-relative z-index-9">
          <div className="row align-items-center min-vh-100 text-center justify-content-center">
            <div
              className="col-xl-6 wow fadeInUp"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeInUp',
              }}
            >
              <div className="my-1-6">
                <Image
                  width={225}
                  height={225}
                  src="/img/404.png"
                  className="mb-1-9"
                  alt="Page not found"
                />
                <h1 className="mb-3 h2">Oops! This Page is Not Found.</h1>
                <p className="mb-1-9">
                  We can’t find the page your are looking for. You can check out
                  our Help Center or head back to Homepage.
                </p>
                <Link href="/" className="btn-style1">
                  <span>Home Page</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      noHeader: true,
    },
  };
};

export default Custom404;
