import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

const Custom404 = () => {
  return (
    <>
    <Head>
      <
    </Head>
      <section className='p-0'>
        <div className='container d-flex flex-column position-relative z-index-9'>
          <div className='row align-items-center min-vh-100 text-center justify-content-center'>
            <div
              className='col-xl-6 wow fadeInUp'
              data-wow-delay='200ms'
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeInUp',
              }}
            >
              <div className='my-1-6'>
                <img
                  src='img/content/404-img.png'
                  className='mb-1-9'
                  alt='...'
                />
                <h1 className='mb-3 h2'>Oops! This Page is Not Found.</h1>
                <p className='mb-1-9'>
                  We can’t find the page your are looking for. You can check out
                  our Help Center or head back to Homepage.
                </p>
                <Link href='/' className='btn-style1'>
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
    }
  }
}

export default Custom404;