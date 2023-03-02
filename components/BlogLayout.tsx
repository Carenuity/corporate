import React from 'react'
import { CategoryLinkInterface } from '../utils/types/CategoryLink';
import { MediaHandleInterface } from '../utils/types/MediaHandle';
import { PostInterface } from '../utils/types/Post';
import { ReviewInterface } from '../utils/types/Review';
import { TagInterface } from '../utils/types/Tag';
import BlogBody from './BlogBody';
import Reply from './Reply';
import Reviews from './Reviews';
import Sidebar from './Sidebar'

const BlogLayout = ({
  search,
  recentPosts,
  categoryLinks,
  tagLinks,
  mediaLinks,
  iscommentable,
  comments,
  hasFooter,
  dateOfAuthor,
  bannerUrl,
  children,
}: {
  search: boolean;
  recentPosts: PostInterface[];
  categoryLinks: CategoryLinkInterface[];
  tagLinks: TagInterface[];
  mediaLinks: MediaHandleInterface[];
  iscommentable: boolean;
  comments: ReviewInterface[];
  hasFooter: boolean;
  dateOfAuthor?: string;
  bannerUrl?: string;
  children: any;
}) => {
  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mb-5 mb-lg-0'>
              <div className='row'>
                <BlogBody
                  hasFooter={hasFooter}
                  date={dateOfAuthor}
                  bannerUrl={bannerUrl}
                  body={children}
                />

                {/* <PageNavigations /> */}

                {/* <!-- comment --> */}
                {comments.length > 0 && <Reviews comments={comments} />}
                {/* <!-- end comment--> */}

                {iscommentable && <Reply />}
              </div>
            </div>
            <div className='col-lg-4 ps-xl-5'>
              <Sidebar
                search={search}
                recentPosts={recentPosts}
                categoryLinks={categoryLinks}
                tagLinks={tagLinks}
                mediaLinks={mediaLinks}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLayout