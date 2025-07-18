import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import { Phone, Mail, MapPin } from 'lucide-react';

const Page = () => {
  const pageTitle = 'Contact Us';
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
          <div className="space-y-4 text-gray-700 mb-10">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '180px',
                    backgroundColor: '#198754',
                  }}
                >
                  <div
                    style={{
                      padding: '30px',
                      color: '#ffffff',
                      textAlign: 'center',
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Phone className="text-blue-500 mb-4" size={40} />
                      <br />
                      <a href="tel:+1234567890" className="hover:underline">
                        <h6 style={{ color: '#ffffff' }}>
                          (+49) 89-1222469-40
                        </h6>
                      </a>
                      <p style={{ fontSize: '12px' }}>
                        Reach out to our team directly by phone during our
                        business hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '180px',
                    backgroundColor: '#198754',
                  }}
                >
                  <div
                    style={{
                      padding: '30px',
                      color: '#ffffff',
                      textAlign: 'center',
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Mail className="text-green-500 mb-4" size={40} />
                      <br />
                      <a
                        href="mailto:info@example.com"
                        className="hover:underline"
                      >
                        <h6 style={{ color: '#ffffff' }}>info@carenuity.com</h6>
                      </a>
                      <p style={{ fontSize: '12px' }}>
                        Email our team — we&apos;re happy to assist you with any
                        inquiries or support needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '180px',
                    backgroundColor: '#198754',
                  }}
                >
                  <div
                    style={{
                      padding: '30px',
                      color: '#ffffff',
                      textAlign: 'center',
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <MapPin className="text-red-500 mb-4" size={40} />
                      <br />
                      {/* <h6 style={{ color:"#ffffff",}}>CHIPGLOBE GmbH</h6> */}
                      <h6 style={{ color: '#ffffff' }}>
                        Professor-Messerschmitt-Strasse 1a
                        <br />
                        3rd floor 85579 Neubiberg
                      </h6>
                      <p style={{ fontSize: '12px' }}>
                        {' '}
                        You are welcome to stop by
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10" style={{ textAlign: 'center' }}>
            <h4 className="">Get In Touch</h4>
            <p style={{ paddingLeft: '', paddingRight: '' }}>
              We&apos;d love to hear from you. Whether you have a question, need
              support, or want to explore how we can work together — reach out
              and we&apos;ll respond as soon as possible.
            </p>

            <div className="row mb-4" style={{ textAlign: 'center' }}>
              {/* <div className='col-lg-1 col-mg-1 mb-4'></div> */}
              <div className="col-lg-7 col-12 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    maxHeight: '1080px',
                    padding: '30px',
                  }}
                >
                  <div className="min-h-screen flex flex-col  justify-center bg-white ">
                    <form className="w-full max-w-sm space-y-4" id="contactUs">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        style={{ width: '100%' }}
                        className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3"
                      />
                      <br />
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        style={{ width: '100%' }}
                        className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3"
                      />{' '}
                      <br />
                      <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        style={{ width: '100%' }}
                        className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3"
                      />{' '}
                      <br />
                      <input
                        type="text"
                        name="mobile"
                        placeholder="Phone"
                        style={{ width: '100%' }}
                        className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3"
                      />
                      <br />
                      <input
                        type="text"
                        name="street"
                        placeholder="Street, house number"
                        style={{ width: '100%' }}
                        className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3"
                      />
                      <br />
                      <input
                        type="text"
                        name="zip"
                        placeholder="Zip code, City"
                        style={{ width: '100%' }}
                        className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3"
                      />
                      <br />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        style={{ width: '100%' }}
                        className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3"
                      />
                      <br />
                      <textarea
                        name="message"
                        placeholder="Message"
                        style={{
                          width: '100%',
                          height: '140px',
                          textAlign: 'initial',
                        }}
                        className="w-full border border-gray-400 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3"
                      />
                      <br />
                      <button
                        type="submit"
                        style={{ width: '300px' }}
                        className="btn  btn-success rounded-pill mb-3"
                      >
                        Submit
                      </button>
                    </form>

                    {/* Feedback & Loading */}
                    <div
                      className="loading text-gray-600 mt-3"
                      style={{ display: 'none' }}
                    >
                      Submitting...
                    </div>
                    <div className="error-message text-red-600 mt-2"></div>
                    <div className="sent-message text-green-600 mt-2"></div>
                    <div
                      id="popup-message"
                      className="mt-3 font-semibold"
                      style={{ display: 'none' }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-1 col-mg-1 mb-4'></div> */}
              <div className="col-lg-5  mb-4">
                <div
                  className="w-full flex justify-center mb-4 "
                  style={{ textAlign: 'center' }}
                >
                  <iframe
                    title="Cincinnatistrasse Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.788251441738!2d11.656880099999999!3d48.07573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479de0ed66cf3d2d%3A0x920c6aa7b7ac0a1c!2sProf.-Messerschmitt-Stra%C3%9Fe%201%20a%2F3rd%20floor%2C%2085579%20Neubiberg%2C%20Germany!5e0!3m2!1sen!2ske!4v1749557400344!5m2!1sen!2ske"
                    width="100%"
                    height="700"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl shadow-lg w-full max-w-3xl"
                  ></iframe>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <ul
                className="social-icon-style1"
                style={{ backgroundColor: '#198754' }}
              >
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100086691917641"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/carenuity"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@carenuity"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/carenuity/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <script src="/contactus-form.js" defer></script>
    </>
  );
};

export default Page;
