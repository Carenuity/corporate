import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  const pageTitle = 'Partners-Program';
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta
          name="description"
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />

        <title>{pageTitle}</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[{ path: '/', title: '' }]}
        pageTitle={pageTitle}
        pageUrl=""
      />

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className=" mt-6">
              <h2 className="mb-4">The Carenuity affiliate program</h2>
            </div>
            <div
              className="col-md-6 mb-6"
              style={{
                borderLeft: 'solid',
                borderColor: '#198754',
                borderWidth: '5px',
              }}
            >
              <p style={{ paddingLeft: '10px' }}>
                Are you an influencer/blogger, home start builder, electrician,
                or something similar in the Smart Home sector? Then become an
                advertising partner or affiliate, because we have something
                smart for you. By advertising and marketing our Carenuity
                products, you get a commission and your customers/prospects get
                something great for their home.
              </p>

              <Link href="#register" className="text-success">
                <h5 className="text-success" style={{ paddingLeft: '10px' }}>
                  Register now for free!
                </h5>
              </Link>
            </div>

            <div className="col-md-4 mb-6">
              <video
                src="/videos/content/Partnerprogramm.mp4"
                loop={true}
                autoPlay={true}
                muted
                className=" wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  // height: '150',
                  animationName: 'fadeIn',
                }}
              />
            </div>

            <div
              className="mb-12"
              style={{ backgroundColor: '#eeeeee', textAlign: 'center' }}
            >
              <div className="row ">
                <div className="col-md-4 ">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/partners/tick.png"
                    className="mt-3 mb-2 wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '420px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                      maxWidth: '40px',
                    }}
                  />
                  <h6>10% commission</h6>
                  <p>per successfully paid invoice</p>
                </div>
                <div className="col-md-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/partners/tick.png"
                    className="mt-3 mb-2 wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '420px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                      maxWidth: '40px',
                    }}
                  />
                  <h6>Personal dashboard</h6>
                  <p>with your KPIs</p>
                </div>
                <div className="col-md-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/partners/tick.png"
                    className="mt-3 mb-2 wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '420px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                      maxWidth: '40px',
                    }}
                  />
                  <h6>90 days</h6>
                  <p>cookie tracking</p>
                </div>
              </div>
            </div>

            <h4 className="mb-4" id="register" style={{ textAlign: 'center' }}>
              HOW TO REGISTER{' '}
            </h4>
            <div className="row">
              <div className="col-md-4 mb-12" style={{ textAlign: 'center' }}>
                <div
                  className="e-card mb-4"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    maxHeight: '1000px',
                    padding: '20px',
                  }}
                >
                  <button
                    type="submit"
                    className={'btn btn-lg btn-success rounded-pill mt-3 mb-2'}
                    style={{
                      width: '250px',
                      height: '30px',
                      paddingTop: '2px',
                    }}
                  >
                    {' '}
                    Step 1
                  </button>
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/img/content/partners/carenuity-logo.png"
                      className=" mb-2 wow fadeInUp"
                      data-wow-delay="100ms"
                      alt="..."
                      style={{
                        visibility: 'visible',
                        width: '420px',
                        animationDelay: '100ms',
                        animationName: 'fadeIn',
                        maxWidth: '200px',
                      }}
                    />
                  </div>

                  <h6>Registration</h6>
                  <p>Register for free.</p>
                </div>
              </div>
              <div className="col-md-4 mb-12" style={{ textAlign: 'center' }}>
                <div
                  className="e-card mb-4"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    maxHeight: '1000px',
                    padding: '20px',
                  }}
                >
                  <button
                    type="submit"
                    className={'btn btn-lg btn-success rounded-pill mt-3 mb-2'}
                    style={{
                      width: '250px',
                      height: '30px',
                      paddingTop: '2px',
                    }}
                  >
                    {' '}
                    Step 2
                  </button>
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/img/content/partners/step2.png"
                      className="mt-3 mb-2 wow fadeInUp"
                      data-wow-delay="100ms"
                      alt="..."
                      style={{
                        visibility: 'visible',
                        width: '420px',
                        animationDelay: '100ms',
                        animationName: 'fadeIn',
                        maxWidth: '95px',
                      }}
                    />
                  </div>

                  <h6>Release</h6>
                  <p>
                    After successful verification, we will release you to your
                    dashboard.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-12" style={{ textAlign: 'center' }}>
                <div
                  className="e-card mb-4"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    maxHeight: '1000px',
                    padding: '20px',
                  }}
                >
                  <button
                    type="submit"
                    className={'btn btn-lg btn-success rounded-pill mt-3 mb-2'}
                    style={{
                      width: '250px',
                      height: '30px',
                      paddingTop: '2px',
                    }}
                  >
                    {' '}
                    Step 3
                  </button>
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/img/content/partners/step3.png"
                      className="mt-3 mb-2 wow fadeInUp"
                      data-wow-delay="100ms"
                      alt="..."
                      style={{
                        visibility: 'visible',
                        width: '420px',
                        animationDelay: '100ms',
                        animationName: 'fadeIn',
                        maxWidth: '115px',
                      }}
                    />
                  </div>

                  <h6>Embed link</h6>
                  <p>Embed a link, advertise and earn money!</p>
                </div>
              </div>
            </div>

           

            <div style={{ textAlign: 'center' }}>
              <h2>Register</h2>
            </div>
            <div
              style={{
                paddingLeft: '350PX',
              }}
            >
              <div
                style={{
                  width: '500px',
                  backgroundColor: '#eeeeee',
                  padding: '20px',
                  borderRadius: '10px',
                }}
              >
                <div
                  style={{
                    border: '1px solid #ccc',
                    padding: '20px',
                    borderRadius: '10px',
                  }}
                >
                  <form action="#" className="form">
                    <div>
                      <label>
                        <strong>First Name</strong>
                      </label>
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Enter your Name"
                        className={' inputt'}
                        style={{
                          backgroundColor: 'white',
                          textAlign: 'left',
                          width: '400px',
                          border: '1px solid #ccc',
                          borderRadius: '10px',
                          paddingLeft: '20px',
                        }}
                        required
                      ></input>
                    </div>

                    <div>
                      <label>
                        <strong>Last Name</strong>
                      </label>
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Enter your lastname"
                        className={' inputt'}
                        style={{
                          backgroundColor: 'white',
                          textAlign: 'left',
                          width: '400px',
                          border: '1px solid #ccc',
                          borderRadius: '10px',
                          paddingLeft: '20px',
                        }}
                        required
                      ></input>
                    </div>

                    <div>
                      <label>
                        <strong>Email *</strong>
                      </label>
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className={' inputt'}
                        style={{
                          backgroundColor: 'white',
                          textAlign: 'left',
                          width: '400px',
                          border: '1px solid #ccc',
                          borderRadius: '10px',
                          paddingLeft: '20px',
                        }}
                        required
                      ></input>
                    </div>
                    <div>
                      <label>
                        <strong>Password *</strong>
                      </label>
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className={' inputt'}
                        style={{
                          backgroundColor: 'white',
                          textAlign: 'left',
                          width: '400px',
                          border: '1px solid #ccc',
                          borderRadius: '10px',
                          paddingLeft: '20px',
                        }}
                        required
                      ></input>
                    </div>
                    <div>
                      <label>
                        <strong>Website</strong>
                      </label>
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="website"
                        name="website"
                        placeholder="Enter your website link"
                        className={' inputt'}
                        style={{
                          backgroundColor: 'white',
                          textAlign: 'left',
                          width: '400px',
                          border: '1px solid #ccc',
                          borderRadius: '10px',
                          paddingLeft: '20px',
                        }}
                        required
                      ></input>
                    </div>
                    <p>
                      We use your personal data to provide you with the best
                      possible user experience on this website, to manage access
                      to your account, and for other purposes described in our
                      privacy policy .
                    </p>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    ></input>
                    <label className="mb-4">
                      {' '}
                      I have read and agree to the terms and conditions . *
                    </label>

                    <button
                      type="submit"
                      className={'btn btn-lg btn-success '}
                      style={{
                        width: '400px',
                      }}
                    >
                      {' '}
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" 
                type="button"
                data-toggle="dropdown">
                  <h4>How does affiliate marketing work?</h4>
                <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><a href="#">You include your individual affiliate link in the next email to
                     your customers or on the website and receive your commission for each sale.</a></li>
                  </ul>
                  You include your individual affiliate link in the next email to
                     your customers or on the website and receive your commission for each sale.
                  
                </div> */}
              </div>


              {/* <div className="dropdown" >
                <button className="btn  dropdown-toggle" 
                        type="button" 
                        data-toggle="dropdown"
                        style={{width:"1200px",
                          backgroundColor:"#eeeeee",
                          textAlign:'left'
                        }}>
                  <h4>How does affiliate marketing work?<i className="fa fa-caret-down"
                  style={
                    {textAlign:"right"}
                  }></i></h4>
                </button>
                <div className="dropdown-content">
                <a href="#">You include your individual affiliate link in the next email to
                     your customers or on the website and receive your commission for each sale.</a>
                  
                </div>
              
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Page;
