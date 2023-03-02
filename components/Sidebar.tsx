import React from 'react'
import { CategoryLinkInterface } from '../utils/types/CategoryLink';
import { MediaHandleInterface } from '../utils/types/MediaHandle';
import { PostInterface } from '../utils/types/Post';
import { TagInterface } from '../utils/types/Tag';
import Categories from './widgets/Categories';
import Media from './widgets/Media';
import Posts from './widgets/Posts';
import Search from './widgets/Search';
import Tags from './widgets/Tags';

function Sidebar ({
  search,
  recentPosts,
  categoryLinks,
  tagLinks,
  mediaLinks,
}: {
  search: boolean;
  recentPosts: PostInterface[];
  categoryLinks: CategoryLinkInterface[];
  tagLinks: TagInterface[];
  mediaLinks: MediaHandleInterface[];
}) {
  return (
    <>
      <div className='sidebar'>
        {search && <Search />}
        {recentPosts?.length > 0 && <Posts posts={recentPosts} />}
        {categoryLinks?.length > 0 && <Categories categories={categoryLinks} />}
        {categoryLinks?.length > 0 && <Categories categories={categoryLinks} />}
        {tagLinks?.length > 0 && <Tags tags={tagLinks} />}
        {mediaLinks?.length > 0 && <Media socialMediaHandles={mediaLinks} />}

      </div>
    </>
  );
};

export default Sidebar