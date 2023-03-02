import React from 'react'
import { PostInterface } from '../../utils/types/Post';
import Post from '../Post';

const Posts = ({ posts }: { posts: PostInterface[] }) => {
  return (
    <>
      <div
        className='widget bg-secondary mb-1-9 wow fadeInUp'
        data-wow-delay='350ms'
      >
        <div className='widget-content'>
          <h5 className='mb-3 text-white'>Recent Posts</h5>

          {posts.map((post: PostInterface, index: number) => (
            <Post
              key={index}
              image={post.image}
              url={post.url}
              title={post.title}
              date={post.date}
            />
          ))}
          
        </div>
      </div>
    </>
  );
};

export default Posts