import Link from 'next/link';
import { useEffect } from 'react';

type BreadcrumbLink = {
  path: string;
  title: string;
};

const PageTitle = ({
  pageTitle,
  pageUrl,
  links,
}: {
  pageTitle: string;
  pageUrl: string;
  links: BreadcrumbLink[];
}) => {
  const bgImage = '/img/banner.webp';
  useEffect(() => {
    if (document !== undefined) {
      require('../utils/js/jarallax.min.js');
    }
  }, []);

  return (
    <>
      <section
        className="page-title-section bg-img cover-background mx-lg-1-6 mx-xl-2-5 mx-xxl-2-9 left-overlay-dark"
        data-overlay-dark="6"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        data-background={bgImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="position-relative">
                <h1>{pageTitle}</h1>
              </div>
              <ul>
                {links.map(({ path, title }, index) => (
                  <li key={index}>
                    <Link href={path}>{title}</Link>
                  </li>
                ))}
                <li className="border-bottom border-3 border-success">
                  <Link href={pageUrl}>{pageTitle}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="line-animated">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  );
};

export default PageTitle;
