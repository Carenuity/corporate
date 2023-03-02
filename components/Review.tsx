import React from 'react'

const Review = ({
  ownerImage,
  ownerName,
  description,
}: {
  ownerImage: string;
  ownerName: string;
  description: string;
}) => {
  return (
    <>
      <div className='d-flex border-bottom border-color-light-black pb-4 mb-5'>
        <div className='flex-shrink-0'>
          <img src={ownerImage} alt='...' />
        </div>
        <div className='flex-grow-1 ms-3'>
          <h4 className='h6 mb-2'>{ownerName}</h4>
          <p>{description}</p>
          {/* <a className='comment-reply-link' href='#!'>
            Reply
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Review;