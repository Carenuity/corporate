import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react'
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import Video from '../components/Video';
import { YoutubeVideo } from '../utils/types/YoutubeVideo';

const videos = ({ videos }: {videos: YoutubeVideo[]}) => {
  return (
    <>
      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage='Home'
        prevPageUrl='/'
        pageTitle='Videos'
        pageUrl='/videos'
        bgImage='img/banner/page-title.jpg'
      />

      <section>
        <div className='container'>
          <div className='row mt-n4'>

            {videos.length > 0 &&
              videos.map((video: YoutubeVideo, index: number) => (
                <div key={index} className='col-md-6 col-xl-4 mt-4 wow fadeInUp'>
                  <Video
                    banner={video.thumbnail.url}
                    videoUrl={video.url}
                    title={video.title}
                  />
                </div>
              ))}
              
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  const maxResult = 50;
  const apiKey = process.env.YOUTUBE_API_KEY;
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelId}&maxResults=${maxResult}&key=${apiKey}&type=video`
    );

    const data = await res.json();
    const videos = data?.items?.map(
      (item: any, index: number): YoutubeVideo => ({
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      })
    );
    return {
      props: {
        videos: videos,
      },
    };
  } catch (error) {
    return {
      props: {
        videos: [],
      },
    };
  }  
}

export default videos