import Link from 'next/link';
import React from 'react'

const Post = ({ image, url, title, date }: { image: string; url: string; title: string; date: string }) => {
  return (
    <>
      <div className='d-flex mb-4'>
        <div className='flex-shrink-0'>
          <img src={image} alt='...' />
        </div>
        <div className='flex-grow-1 ms-3'>
          <h4 className='mb-2 h6'>
            <Link href={url} className='text-white text-white-hover-light'>
              {title}
            </Link>
          </h4>
          <span className='text-white opacity8 small'>{date}</span>
        </div>
      </div>
    </>
  );
};

export default Post