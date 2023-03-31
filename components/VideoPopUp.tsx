import Link from 'next/link';
import React from 'react'

const VideoPopUp = ({ id, url, show, title }: { id?: string; url: string; show: boolean; title?: string }) => {
  return (
    <>
      <div className={`${(!show) ? 'd-none' : ''} wow fadeIn`} data-wow-delay='400ms'>
        <div className='right-img position-relative z-index-9'>
          <div className='video-box'>
            <div className='story-video'>
              <Link
                id={id}
                href={url}
                className='video btn-style1 animated fadeInUp'
              >
                {title && <span className='animated fadeInUp'>{title}</span>}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPopUp