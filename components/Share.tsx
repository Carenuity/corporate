import React from 'react'
import { MediaHandleInterface } from '../utils/types/MediaHandle';
import MediaHandle from './MediaHandle';

const socialMediaHandles = () => {
 const socials: MediaHandleInterface[] = [
   {
     icon: 'fab fa-facebook-f',
     url: '#!',
   },
   {
     icon: 'fab fa-twitter',
     url: '#!',
   },
   {
     icon: 'fab fa-youtube',
     url: '#!',
   },
   {
     icon: 'fab fa-linkedin-in',
     url: '#!',
   },
 ];
 return socials;
}

const Share = () => {
  return (
    <>
      <div className='col-md-4 wow fadeIn' data-wow-delay='400ms'>
        <div className='blog-share-icon text-start text-md-end'>
          <h5 className='h6 mb-3'>Share:</h5>
          <ul className='list-unstyled m-0 p-0'>
           
            {socialMediaHandles().map(
              (handle: MediaHandleInterface, index: number) => (
                <MediaHandle
                  key={index}
                  icon={handle.icon}
                  url={handle.url}
                  classNames='d-inline-block me-2'
                />
              )
            )}

          </ul>
        </div>
      </div>
    </>
  );
}

export default Share