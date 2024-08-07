import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

const Page = () => {
  const pageTitle = '3D Modeling';
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta
          name="description"
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />
        <title>{pageTitle}</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[{ path: '/', title: '' }]}
        pageTitle={pageTitle}
        pageUrl=""
      />

      <section className="pt-4">
        <div className="container">
          <h5>Level 4</h5>

          <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              height: '220px',
              padding: '20px',
            }}
          >
            <div className="row">
              <div className="col-lg-8 ">
                <p>
                  {' '}
                  <strong>3D modeling</strong> is the process of creating a
                  three-dimensional representation of an object using
                  specialized software.
                </p>

                <p>
                  Watch a{' '}
                  <a href="" className="text-success">
                    video
                  </a>{' '}
                  to learn more on level 2 challenge
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>Use solution builder</p>
            <p>
              {' '}
              use a 3D-Modelling software to biuld your own customized enclosure
            </p>
            <p>3D printing</p>
            <p>Tripple</p>
            <p>
              <strong>Reward:</strong> A voucher foe shop
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
