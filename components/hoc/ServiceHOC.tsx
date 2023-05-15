import { ComponentType, useEffect, useState } from 'react';
// import ServiceSidebar from '../ServiceSidebar'
import { handleMediaQueryChanges } from '../../utils/common';
import { ServiceUrl } from '../../utils/types';
// import PageTitle from '../PageTitle';
import dynamic from 'next/dynamic';

const ServiceSidebar = dynamic(() => import('../ServiceSidebar'), {
  ssr: false,
});

const PageTitle = dynamic(() => import('../PageTitle'), {
  ssr: false,
});

const ServiceHOC = <P extends object>(
  Elem: ComponentType<P>,
  {
    servicesCategoryUrls,
    pageUrl,
    pageTitle,
    serviceCategory,
  }: {
    servicesCategoryUrls: ServiceUrl[];
    pageUrl: string;
    pageTitle: string;
    serviceCategory: string;
  }
) => {
  const Index = (pageProps: P) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      mediaQuery.addEventListener('change', (e: MediaQueryListEvent) =>
        handleMediaQueryChanges(e.matches, setIsMobile)
      );
      handleMediaQueryChanges(mediaQuery.matches, setIsMobile);

      return () => {
        mediaQuery.removeEventListener('change', (e: MediaQueryListEvent) =>
          handleMediaQueryChanges(e.matches, setIsMobile)
        );
      };
    }, []);
    return (
      <>
        <PageTitle
          prevPage='Home'
          prevPageUrl='/'
          pageTitle={pageTitle}
          pageUrl={pageUrl}
        />
        <section className='py-3'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-4 order-2 order-xl-1'>
                <ServiceSidebar
                  isMobile={isMobile}
                  title={serviceCategory}
                  serviceUrls={servicesCategoryUrls}
                  activeUrl={pageUrl}
                />
              </div>
              <div className='col-xl-8 mb-2-9 mb-xl-0 order-1 order-xl-2'>
                <Elem {...pageProps} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return Index;
};

export default ServiceHOC;
