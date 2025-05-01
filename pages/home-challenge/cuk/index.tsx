import React from 'react';
import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import Link from 'next/link';


const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'CUK Home Challenge';
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
          <iframe
            loading="lazy"
            className="mb-4"
            src="https://www.canva.com/design/DAGWjZYi93M/EwUbuwY8Q8IwyOKQvDP23w/view?embed"
            width="100%"
            height="600px"
          ></iframe>
          <a
            href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGWjZYi93M&#x2F;EwUbuwY8Q8IwyOKQvDP23w&#x2F;view?
                utm_content=DAGWjZYi93M&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>CUK Home Challenge</u>
          </a>{' '}
          by carenuity
        </div>

        <p className="col-md-4 ">
                        {!isMobile && (
                          <Link
                            href={
                              '/product/autonomous-driving-car'
                            }
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                          >
                            <span className="small"> Learn more</span>
                          </Link>
                        )}

                        {isMobile && (
                          <a
                            href={
                              '/product/autonomous-driving-car'
                            }
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                            rel="noreferrer"
                          >
                            <span className="small">
                            Learn more{' '}
                              {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                            </span>
                          </a>
                        )}
                      </p>
      </section>
    </>
  );
};

export default Page;
