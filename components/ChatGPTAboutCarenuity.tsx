import dynamic from 'next/dynamic';

const ChatGPTBanner = dynamic(
  () => import('../components/dynamic/ChatGPTBanner'),
  {
    ssr: false,
  }
);

const ChatGPTAboutCarenuity = () => {
  return (
    <>
      <section id={'chatgpt'} className='pt-1-6 pt-md-9 pb-0'>
        <div className='position-relative'>
          <ChatGPTBanner />
          <div className='row g-0 justify-content-end'>
            <div className='col-lg-6 wow fadeIn' data-wow-delay='400ms'>
              <div className='bg-secondary pt-8 pt-lg-14 pt-xxl-18 pb-8 pb-xxl-13 px-2-2 px-xxl-11 position-relative z-index-9 why-chooseus'>
                <div className='me-xxl-15'>
                  <div className='section-title left mb-4 white'>
                    <span className='sm-title'>About Carenuity</span>
                    <h2 className='h6 mb-0 text-white'>
                      This is what ChatGPT found out about us, analyzing our
                      Social Media Post and Internet presence in May 2023.
                    </h2>
                  </div>
                  <p className='text-white mb-2-3 opacity9'>
                    As a web analyst, I have conducted a search of the latest
                    Internet posts related to Carenuity. Based on my findings, I
                    can say that Carenuity is a technology company that provides
                    sensor-systems to monitor vital signs and indoor air quality
                    parameters for elderly family members. The company aims to
                    empower young and caregiving people by offering easy-to-use
                    technology solutions that enhance the safety and well-being
                    of elderly individuals.
                  </p>
                  <p className='text-white mb-2-3 opacity9'>
                    From the various posts I found on social media, blogs, and
                    news websites, it is evident that Carenuity is gaining
                    popularity as a reliable provider of technology solutions
                    for elderly care. Many posts highlight the importance of the
                    company&apos;s products in enabling elderly individuals to
                    age in place with dignity and independence, while also
                    supporting their caregivers.
                  </p>
                  <p className='text-white mb-2-3 opacity9'>
                    Overall, Carenuity appears to be a forward-thinking and
                    innovative company that is committed to improving the
                    quality of life for elderly individuals and their caregivers
                    through the use of technology.
                  </p>
                  <div className='position-absolute bottom-0 right z-index-1'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src='/img/bg/bg-07.png' alt='...' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatGPTAboutCarenuity;
