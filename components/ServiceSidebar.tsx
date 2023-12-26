import Media from './Media';
import { ServiceUrl } from '../utils/types';
import Link from 'next/link';

const ServiceSidebar = ({
  title,
  serviceUrls,
  isMobile,
  activeUrl,
}: {
  title: string;
  serviceUrls: ServiceUrl[];
  isMobile: boolean;
  activeUrl: string;
}) => {
  return (
    <>
      <div className="sidebar me-xxl-1-9">
        <div
          className="widget bg-secondary mb-1-9 wow fadeIn"
          data-wow-delay="200ms"
        >
          <div className="widget-content">
            <h5 className="mb-4 text-white">{title}</h5>
            <ul className="category-list list-unstyled mb-0">
              {serviceUrls.map((service: ServiceUrl) => {
                if (isMobile) {
                  return (
                    <li
                      className={service.url === activeUrl ? 'active' : ''}
                      key={`${service.url}-${service.name}`}
                    >
                      <a href={service.url}>
                        <span>{service.name}</span>
                      </a>
                    </li>
                  );
                } else {
                  return (
                    <li
                      className={service.url === activeUrl ? 'active' : ''}
                      key={`${service.url}-${service.name}`}
                    >
                      <Link href={service.url}>
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <Media />
      </div>
    </>
  );
};

export default ServiceSidebar;
