import Link from 'next/link';
import { UrlObject } from 'url';

const ModuleImage = ({
  url,
  image,
  gridClass,
}: {
  url: UrlObject;
  image: string;
  gridClass?: string;
}) => {
  return (
    <>
      <Link
        href={url}
        className={gridClass ? gridClass : `col-md-3 col-sm-6`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          className='wow fadeInUp'
          data-wow-delay='100ms'
          alt='Sensor'
          style={{
            maxHeight: '12rem',
            visibility: 'visible',
            animationDelay: '100ms',
            animationName: 'fadeIn',
          }}
        />
      </Link>
    </>
  );
};

export default ModuleImage;
