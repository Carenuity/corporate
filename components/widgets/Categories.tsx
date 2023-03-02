import React from 'react'
import { CategoryLinkInterface } from '../../utils/types/CategoryLink';
import CategoryLink from '../CategoryLink';

const Categories = ({ categories }: { categories: CategoryLinkInterface[] }) => {
  return (
    <>
      <div
        className='widget bg-secondary mb-1-9 wow fadeInUp'
        data-wow-delay='500ms'
      >
        <div className='widget-content'>
          <h5 className='mb-4 text-white'>Categories</h5>
          <ul className='category-list list-unstyled mb-0'>
            {categories.map(
              (categoryLink: CategoryLinkInterface, index: number) => (
                <CategoryLink
                  key={index}
                  url={categoryLink.url}
                  name={categoryLink.name}
                />
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories