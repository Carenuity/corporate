import React from 'react'
import EspWebInstallButton from './EspWebInstallButton';

const CarenuityDevice = ({
  name: { short, long },
  imageUrl,
  webFlashUrl,
}: {
  name: { short: string; long: string };
  imageUrl: string;
  webFlashUrl: string;
}) => {
  return (
    <>
      <div className='d-flex border-bottom border-color-light-black pb-3 mb-3'>
        <div className='flex-shrink-0'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={short}
            style={{ maxHeight: '7rem', maxWidth: '7rem' }}
          />
        </div>
        <div className='flex-grow-1 ms-2'>
          <h4 className='h6 mb-2'>
            <strong className='fw-bold'>{short}:</strong> {long}
          </h4>
          <div>
            <a href={webFlashUrl} target='_blank' rel="noreferrer">{webFlashUrl}</a>
            <i className='fa-solid fa-up-right-from-square ms-2'></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarenuityDevice