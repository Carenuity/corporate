import Link from 'next/link';

const Video = ({
  banner,
  videoUrl,
  title,
}: {
  banner: string;
  title?: string;
  videoUrl: string;
}) => {
  return (
    <>
      <div className="portfolio-style01 mb-2-3">
        <div className="portfolio-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={banner} alt="..." />
        </div>
        <div
          className="portfolio-content wow fadeIn text-center"
          data-wow-delay="400ms"
        >
          {title && (
            <span className="text-primary d-block mb-3 text-uppercase font-weight-600 small">
              {title.substring(0, 32)}
            </span>
          )}

          {/* {title && (
            <h3 className='mb-3 h4'>
              <Link href={videoUrl} target={'_blank'}>
                {title.substring(0, 17)}
              </Link>
            </h3>
          )} */}

          <div className="right-img position-relative z-index-9">
            <div className="video-box">
              <div className="story-video text-sm">
                <Link href={videoUrl} className="video video_btn">
                  <i className="fa fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
