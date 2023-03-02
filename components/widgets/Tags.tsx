import Link from 'next/link';
import React from 'react'
import { TagInterface } from '../../utils/types/Tag';

const Tags = ({ tags }: { tags: TagInterface[] }) => {
  return (
    <>
      <div
        className='widget bg-secondary mb-1-9 wow fadeInUp'
        data-wow-delay='650ms'
      >
        <div className='widget-content'>
          <h5 className='mb-3 text-white'>Tags</h5>
          <div className='blog-tags mt-n2'>

            {tags.map((tag: TagInterface, index: number) => (
              <Link key={index} href={tag.url}>{tag.name}</Link>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags