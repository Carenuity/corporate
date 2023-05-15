import Head from "next/head";
import PageTitle from "../components/PageTitle";
import Image from "next/image";
import { useContext } from "react";
import { StoreContext } from "../components/context/Store";

const Index = () => {
 const {state} = useContext(StoreContext);

  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='Carenuity ChipGlobe Electronics Embedded Systems'
        />
        <meta
          name='description'
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />
        <title>ChatGPT About Carenuity</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage='Home'
        prevPageUrl='/'
        pageTitle='ChatGPT About Carenuity'
        pageUrl='/chatgpt_about_Carenuity'
      />
      <section className='overflow-visible pb-0 pt-4'>
        <div className='container position-relative z-index-3'>
          <div className='row align-items-center about-style-03'>
            <div className='col-lg-9 wow fadeIn' data-wow-delay='200ms'>
              <div className='pe-lg-1-9'>
                <div className='section-title mb-1-9'>
                  <span className='sm-title'>ChatGPT About Carenuity</span>
                  <h2 className='mb-0 h3'>
                    This is what ChatGPT found out about us, analyzing our
                    Social Media Post and Internet presence in May 2023.
                  </h2>
                </div>
                <div className='mb-1-9'>
                  <div className='d-flex about-text mb-1-9'>
                    <div className='flex-shrink-0'>
                      <i className='fa-brands fa-gitter'></i>
                    </div>
                    <div className='flex-grow-1 ms-3'>
                      {/* <h4 className='h5'>Our Mission</h4> */}
                      <p className='mb-0'>
                        As a web analyst, I have conducted a search of the
                        latest Internet posts related to Carenuity. Based on my
                        findings, I can say that Carenuity is a technology
                        company that provides sensor-systems to monitor vital
                        signs and indoor air quality parameters for elderly
                        family members. The company aims to empower young and
                        caregiving people by offering easy-to-use technology
                        solutions that enhance the safety and well-being of
                        elderly individuals. From the various posts I found on
                        social media, blogs, and news websites, it is evident
                        that Carenuity is gaining popularity as a reliable
                        provider of technology solutions for elderly care. Many
                        posts highlight the importance of the company&apos;s
                        products in enabling elderly individuals to age in place
                        with dignity and independence, while also supporting
                        their caregivers. Overall, Carenuity appears to be a
                        forward-thinking and innovative company that is
                        committed to improving the quality of life for elderly
                        individuals and their caregivers through the use of
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 wow fadeIn px-0 align-self-end'
              data-wow-delay='400ms'
            >
              <div className='bg-secondary pt-3 pt-lg-9 pt-xxl-13 pb-3 pb-xxl-8 px-2-2 px-xxl-5 position-relative z-index-9 why-chooseus'>
                <div className='me-xxl-2'>
                  <p className='text-white mb-2-3 opacity9'>
                    {state.companyInfo.visionDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          width={300}
          height={500}
          src='/img/bg/bg-06.png'
          className='position-absolute left bottom-5 opacity4'
          alt='Carenuity'
        />
      </section>
    </>
  );
}

export default Index