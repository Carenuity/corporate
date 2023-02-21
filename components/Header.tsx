import React from 'react'

const Header = () => {
  return (
    <>
      {/* <!-- HEADER
        ================================================== --> */}
      <header className='header-style1 menu_area-light'>
        <div className='navbar-default border-bottom border-color-light-white'>
          {/* <!-- start top search --> */}
          <div className='top-search bg-primary'>
            <div className='container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9'>
              <form
                className='search-form'
                action='search.html'
                method='GET'
                accept-charset='utf-8'
              >
                <div className='input-group'>
                  <span className='input-group-addon cursor-pointer'>
                    <button
                      className='search-form_submit fas fa-search text-white'
                      type='submit'
                    ></button>
                  </span>
                  <input
                    type='text'
                    className='search-form_input form-control'
                    name='s'
                    autoComplete='off'
                    placeholder='Type & hit enter...'
                  />
                  <span className='input-group-addon close-search mt-1'>
                    <i className='fas fa-times'></i>
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- end top search --> */}

          <div className='container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9'>
            <div className='row align-items-center'>
              <div className='col-12 col-lg-12'>
                <div className='menu_area alt-font'>
                  <nav className='navbar navbar-expand-lg navbar-light p-0'>
                    <div className='navbar-header navbar-header-custom'>
                      {/* <!-- start logo --> */}
                      <a href='index.html' className='navbar-brand'>
                        <img
                          id='logo'
                          src='img/logos/logo-inner.png'
                          alt='logo'
                        />
                      </a>
                      {/* <!-- end logo --> */}
                    </div>

                    <div className='navbar-toggler bg-primary'></div>

                    {/* <!-- start menu area --> */}
                    <ul
                      className='navbar-nav ms-auto'
                      id='nav'
                      style={{ display: 'none' }}
                    >
                      <li>
                        <a href='#!'>Home</a>
                        <ul>
                          <li>
                            <a href='index.html'>Home 01</a>
                          </li>
                          <li>
                            <a href='index-02.html'>Home 02</a>
                          </li>
                          <li>
                            <a href='index-03.html'>Home 03</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#!'>Pages</a>
                        <ul>
                          <li>
                            <a href='about.html'>About Us</a>
                          </li>
                          <li>
                            <a href='how-we-work.html'>How We Work</a>
                          </li>
                          <li>
                            <a href='faq.html'>FAQ&apos;`s</a>
                          </li>
                          <li>
                            <a href='#!'>Our Team</a>
                            <ul>
                              <li>
                                <a href='team.html'>Our Team</a>
                              </li>
                              <li>
                                <a href='team-details.html'>Team Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='pricing.html'>Pricing Plans</a>
                          </li>
                          <li>
                            <a href='contact.html'>Contact</a>
                          </li>
                          <li>
                            <a href='privacy-policy.html'>Privacy Policy</a>
                          </li>
                          <li>
                            <a href='404-page.html'>404 Page</a>
                          </li>
                          <li>
                            <a href='coming-soon.html'>Coming Soon</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#!'>Service</a>
                        <ul>
                          <li>
                            <a href='services.html'>Our Services</a>
                          </li>
                          <li>
                            <a href='information-security.html'>
                              Information Security
                            </a>
                          </li>
                          <li>
                            <a href='mobile-platforms.html'>Mobile Platforms</a>
                          </li>
                          <li>
                            <a href='data-synchronization.html'>
                              Data Synchronization
                            </a>
                          </li>
                          <li>
                            <a href='process-automation.html'>
                              Process Automation
                            </a>
                          </li>
                          <li>
                            <a href='event-processing.html'>Event Processing</a>
                          </li>
                          <li>
                            <a href='content-management.html'>
                              Content Management
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#!'>Portfolio</a>
                        <ul>
                          <li>
                            <a href='#!'>Portfolio Grid</a>
                            <ul>
                              <li>
                                <a href='portfolio-two-columns.html'>
                                  2 Columns
                                </a>
                              </li>
                              <li>
                                <a href='portfolio.html'>
                                  3 Columns - Standard
                                </a>
                              </li>
                              <li>
                                <a href='portfolio-four-columns.html'>
                                  4 Columns
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='portfolio-details.html'>
                              Portfolio Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#!'>Blog</a>
                        <ul>
                          <li>
                            <a href='#!'>Blog Grid</a>
                            <ul>
                              <li>
                                <a href='blog-grid-two-columns.html'>
                                  2 Columns
                                </a>
                              </li>
                              <li>
                                <a href='blog-grid-two-columns-left-sidebar.html'>
                                  2 Col – Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href='blog-grid-two-columns-right-sidebar.html'>
                                  2 Col – Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href='blog-grid.html'>
                                  3 Columns - Standard
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='blog-list.html'>Blog List</a>
                          </li>
                          <li>
                            <a href='blog-details.html'>Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='#!'>Elements</a>
                        <ul className='row megamenu'>
                          <li className='col-lg-3'>
                            <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                              Elements 01
                            </span>
                            <ul>
                              <li>
                                <a href='accordion.html'>
                                  <i className='fas fa-sliders-h me-2'></i>
                                  Accordions
                                </a>
                              </li>
                              <li>
                                <a href='alerts.html'>
                                  <i className='far fa-bell me-2'></i>Alerts
                                </a>
                              </li>
                              <li>
                                <a href='blockquotes.html'>
                                  <i className='fas fa-vector-square me-2'></i>
                                  Blockquote
                                </a>
                              </li>
                              <li>
                                <a href='buttons.html'>
                                  <i className='fas fa-link me-2'></i>Buttons
                                </a>
                              </li>
                              <li>
                                <a href='call-to-action.html'>
                                  <i className='far fa-square me-2'></i>Call to
                                  Action
                                </a>
                              </li>
                              <li>
                                <a href='carousel-slider.html'>
                                  <i className='far fa-images me-2'></i>
                                  Carousel Slider
                                </a>
                              </li>
                              <li>
                                <a href='count-down.html'>
                                  <i className='far fa-flag me-2'></i>Count Down
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className='col-lg-3'>
                            <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                              Elements 02
                            </span>
                            <ul>
                              <li>
                                <a href='counter.html'>
                                  <i className='fas fa-compress me-2'></i>
                                  Counters
                                </a>
                              </li>
                              <li>
                                <a href='dropcaps.html'>
                                  <i className='far fa-closed-captioning me-2'></i>
                                  Dropcaps
                                </a>
                              </li>
                              <li>
                                <a href='forms.html'>
                                  <i className='fab fa-wpforms me-2'></i>Forms
                                </a>
                              </li>
                              <li>
                                <a href='form-elements.html'>
                                  <i className='fas fa-cubes me-2'></i>Form
                                  Elements
                                </a>
                              </li>
                              <li>
                                <a href='font-icons.html'>
                                  <i className='far fa-check-square me-2'></i>
                                  Font Icons
                                </a>
                              </li>
                              <li>
                                <a href='google-map.html'>
                                  <i className='fas fa-map-marker-alt me-2'></i>
                                  Google Map
                                </a>
                              </li>
                              <li>
                                <a href='grid-system.html'>
                                  <i className='fas fa-th me-2'></i>Grid System
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className='col-lg-3'>
                            <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                              Elements 03
                            </span>
                            <ul>
                              <li>
                                <a href='highlights.html'>
                                  <i className='fas fa-highlighter me-2'></i>
                                  Highlights
                                </a>
                              </li>
                              <li>
                                <a href='header-1.html'>
                                  <i className='fas fa-compress me-2'></i>
                                  Header Style 01
                                </a>
                              </li>
                              <li>
                                <a href='header-2.html'>
                                  <i className='fas fa-compress-arrows-alt me-2'></i>
                                  Header Style 02
                                </a>
                              </li>
                              <li>
                                <a href='header-3.html'>
                                  <i className='fa-solid fa-arrows-to-eye me-2'></i>
                                  Header Style 03
                                </a>
                              </li>
                              <li>
                                <a href='icon-with-text.html'>
                                  <i className='fab fa-fonticons-fi me-2'></i>
                                  Icon With Text
                                </a>
                              </li>
                              <li>
                                <a href='list-styles.html'>
                                  <i className='fas fa-list-ul me-2'></i>List
                                  Styles
                                </a>
                              </li>
                              <li>
                                <a href='media-object.html'>
                                  <i className='fas fa-photo-video me-2'></i>
                                  Media Object
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className='col-lg-3'>
                            <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                              Elements 04
                            </span>
                            <ul>
                              <li>
                                <a href='modal.html'>
                                  <i className='fas fa-expand me-2'></i>Modal
                                </a>
                              </li>
                              <li>
                                <a href='pagination.html'>
                                  <i className='far fa-caret-square-right me-2'></i>
                                  Pagination
                                </a>
                              </li>
                              <li>
                                <a href='progress-bar.html'>
                                  <i className='fas fa-tasks me-2'></i>
                                  Progress Bars
                                </a>
                              </li>
                              <li>
                                <a href='tables.html'>
                                  <i className='fas fa-table me-2'></i>Tables
                                </a>
                              </li>
                              <li>
                                <a href='tabs.html'>
                                  <i className='fas fa-sliders-h me-2'></i>
                                  Tabs
                                </a>
                              </li>
                              <li>
                                <a href='typography.html'>
                                  <i className='fas fa-text-height me-2'></i>
                                  Typography
                                </a>
                              </li>
                              <li>
                                <a href='video.html'>
                                  <i className='fas fa-video me-2'></i>Videos
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    {/* <!-- end menu area --> */}

                    {/* <!-- start attribute navigation --> */}
                    <div className='attr-nav align-items-xl-center ms-xl-auto main-font'>
                      <ul>
                        <li className='search'>
                          <a href='#!'>
                            <i className='fas fa-search'></i>
                          </a>
                        </li>
                        <li className='d-none d-xl-inline-block'>
                          <a href='contact.html' className='btn-style1 medium'>
                            <span>Free Quote</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end attribute navigation --> */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header