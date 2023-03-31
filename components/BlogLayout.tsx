import React from 'react'
import { LANG_ENGLISH, LANG_GERMANY } from '../utils/constants';
import BlogBody from './BlogBody';
import Sidebar from './Sidebar';
import SidebarContentDe from './SidebarContentDe';
import SidebarContentEn from './SidebarContentEn';

const BlogLayout = ({
  dateOfAuthor,
  bannerUrl,
  lang,
  children,
}: {
  dateOfAuthor?: string;
  bannerUrl?: string;
  lang: string;
  children: any;
}) => {
  return (
    <>
      <section className=' pt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mb-5 mb-lg-0'>
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
            <div className='col-lg-4 pl-xl-2  p-0'>
              <Sidebar>
                {lang === LANG_ENGLISH && <SidebarContentEn />}
                {lang === LANG_GERMANY && <SidebarContentDe />}
              </Sidebar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLayout