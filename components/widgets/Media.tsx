import React from 'react'
import { MediaHandleInterface } from '../../utils/types/MediaHandle';
import MediaHandle from '../MediaHandle';

const Media = ({ socialMediaHandles }: { socialMediaHandles: MediaHandleInterface[] }) => {
  return (
    <>
      <div className='widget bg-secondary wow fadeInUp' data-wow-delay='800ms'>
        <div className='widget-content'>
          <h5 className='mb-3 text-white'>Follow Us</h5>
          <ul className='social-icon-style2 ps-0'>

            {socialMediaHandles.map((handle: MediaHandleInterface, index: number) => (
              <MediaHandle key={index} url={handle.url} icon={handle.icon} />
            ))}
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Media