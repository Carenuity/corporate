import React from 'react'
import BlogBody from './BlogBody';

const BlogLayout = ({
  dateOfAuthor,
  bannerUrl,
  children,
}: {
  dateOfAuthor?: string;
  bannerUrl?: string;
  children: any;
}) => {
  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 mb-5 mb-lg-0'>
              <div className='row'>
                <BlogBody
                  date={dateOfAuthor}
                  bannerUrl={bannerUrl}
                  body={children}
                />

                {/* <PageNavigations /> */}

                {/* <!-- comment --> */}
                {/* {comments && <Reviews comments={comments} />} */}
                {/* <!-- end comment--> */}

                {/* {iscommentable && <Reply />} */}
              </div>
            </div>
            {/* <div className='col-lg-4 ps-xl-5'>
              <Sidebar
                search={search}
                recentPosts={recentPosts}
                categoryLinks={categoryLinks}
                tagLinks={tagLinks}
                mediaLinks={mediaLinks}
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLayout