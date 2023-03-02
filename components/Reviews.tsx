import React from 'react'
import { ReviewInterface } from '../utils/types/Review';
import Review from './Review';

const Reviews = ({ comments }: { comments: ReviewInterface[] }) => {
  return (
    <>
      <div className='col-12 mb-5 wow fadeIn' data-wow-delay='400ms'>
        <div>
          <h3 className='h4 mb-1-9'>{comments.length} Comments</h3>

          {comments.map((comment: ReviewInterface, index: number) => (
            <Review key={index} ownerImage={comment.ownerImage} ownerName={comment.ownerName} description={comment.description} />
          ))}

        </div>
      </div>
    </>
  );
};

export default Reviews;