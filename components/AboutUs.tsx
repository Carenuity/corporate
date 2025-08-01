import Image from 'next/image';

const AboutUs = ({
  aboutUsSammury,
  mission,
  vision,
  visionDescription,
}: {
  aboutUsSammury: string;
  mission: string;
  vision: string;
  visionDescription: string;
}) => {
  return (
    <>
      <section className="overflow-visible pb-0 pt-4 mb-10">
        <div className="container position-relative z-index-3">
          <div className="section-title mb-1-9">
            <span className="sm-title">About Us</span>
            <h4 className="mb-0 ">{aboutUsSammury}</h4>
          </div>
          <div className="row align-items-center about-style-03">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="200ms">
              <div className="pe-lg-1-9">
                <div className="mb-1-9">
                  <div className="d-flex about-text mb-1-9">
                    <div className="flex-shrink-0">
                      <i className="fa-brands fa-gitter"></i>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="">Our Mission</h4>
                      <p className="mb-0">{mission}</p>
                    </div>
                  </div>
                  <div className="d-flex about-text">
                    <div className="flex-shrink-0">
                      <i className="fa-brands fa-unity"></i>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h5">Our Vision</h4>
                      <p className="mb-0">{vision}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn px-0 align-self-end"
              data-wow-delay="400ms"
            >
              <div className="bg-secondary pt-3 pt-lg-9 pt-xxl-13 pb-3 pb-xxl-8 px-2-2 px-xxl-5 position-relative z-index-9 why-chooseus">
                <div className="me-xxl-2">
                  <p className="text-white mb-2-3 opacity9">
                    {visionDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          width={300}
          height={500}
          src="/img/bg/bg-06.png"
          className="position-absolute left bottom-5 opacity4"
          alt="Carenuity"
        />
      </section>
    </>
  );
};

export default AboutUs;
