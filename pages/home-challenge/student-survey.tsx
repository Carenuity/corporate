import React from 'react';
import Head from 'next/head';

const Page = () => {
  const pageTitle = 'CUK Home Challenge';
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
      {/* <PageTitle
        links={[{ path: '/', title: '' }]}
        pageTitle={pageTitle}
        pageUrl=""
      /> */}
      <div style={{}}></div>
      <section className="pt-4">
        <div className="container">
          <div
            style={{
              paddingLeft: '250px',
            }}
          >
            <div
              className="e-card"
              style={{
                boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                maxHeight: '5000px',
                width: '800px',
                backgroundColor: '#eeeeee',
                padding: '20px',
                borderRadius: '10px',
              }}
            >
              <div
                style={{
                  border: '1px solid #ccc',
                  padding: '50px',
                  borderRadius: '10px',
                }}
              >
                <h4 className='mb-4'>Aristotle University of Thessaloniki</h4>
                <h5>Carenuity Student Survey & Questionnaire</h5>
                <p>
                  Thank you for your interest in ChipGlobe and the IoT industry!
                  This survey will help us understand your interests and provide
                  you with relevant opportunities.
                </p>

                <p>
                  <strong>1. Personal Information</strong>
                </p>
                <form action="#" className="form">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <label>
                          <strong>First name *</strong>
                        </label>
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="fname"
                          name="firstname"
                          placeholder="Enter your Name"
                          className={' input'}
                          style={{
                            backgroundColor: 'white',
                            textAlign: 'left',
                            width: '300px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            paddingLeft: '20px',
                          }}
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <label>
                          <strong>Last name *</strong>
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
                            width: '300px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            paddingLeft: '20px',
                          }}
                          required
                        ></input>
                      </div>
                    </div>

                    <div className="col-md-6">
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
                            width: '300px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            paddingLeft: '20px',
                          }}
                          required
                        ></input>
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div>
                        <label>
                          <strong>University *</strong>
                        </label>
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="university"
                          name="university"
                          placeholder="Enter your university"
                          className={' inputt'}
                          style={{
                            backgroundColor: 'white',
                            textAlign: 'left',
                            width: '300px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            paddingLeft: '20px',
                          }}
                          required
                        ></input>
                      </div>
                    </div> */}

                    <div className="col-md-6">
                      <div>
                        <label>
                          <strong>Year of study *</strong>
                        </label>
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="year"
                          name="year"
                          placeholder="Enter year of study"
                          className={' inputt'}
                          style={{
                            backgroundColor: 'white',
                            textAlign: 'left',
                            width: '300px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            paddingLeft: '20px',
                          }}
                          required
                        ></input>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <label>
                          <strong>Field of study *</strong>
                        </label>
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="field"
                          name="field"
                          placeholder="Enter field of study"
                          className={' inputt'}
                          style={{
                            backgroundColor: 'white',
                            textAlign: 'left',
                            width: '300px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            paddingLeft: '20px',
                          }}
                          required
                        ></input>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p>
                        <strong>
                          2. Open office day. Would you like to
                          participate in an open office event ?
                        </strong>
                      </p>
                      <div className="row mb-2" >
                        <div className="col-md-4">
                          <input type="radio" id="yes" name="yes" />
                          <label style={{paddingLeft:'10px'}}> Yes </label>
                        </div>
                        <div className="col-md-4">
                          <input type="radio" id="no" name="no" />
                          <label style={{paddingLeft:'10px'}}> No </label>
                        </div>
                      </div>
                      <p><strong>
                        If yes, why are you interested in visiting us? (Select
                        all that apply)</strong>
                      </p>
                      
      
                      <div>
                        <input type="checkbox" id="text" name="text"></input>
                        <label style={{paddingLeft:'10px'}}>
                        To learn more about career opportunities in IoT and AI
                          technology.
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}>
                          
                          To network with professionals and meet the ChipGlobe
                          team.
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}>
                          
                          To see real-world applications of IoT solutions in
                          action.
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}> Other </label>
                      </div>

                      <div className="mb-4">
                        <input
                          type="text"
                          id="field"
                          name="field"
                          placeholder=""
                          className={' inputt'}
                          style={{
                            backgroundColor: 'white',
                            textAlign: 'left',
                            width: '700px',
                            height: '80px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            paddingLeft: '20px',
                          }}
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="mb-3">
                      <p>
                        <strong>
                          3. IoT industry interests. What areas of the IoT
                          industry are you most interested in? (Select all that
                          apply)
                        </strong>
                      </p>

                      <div>
                        <input type="checkbox" id="text" name="text"></input>
                        <label style={{paddingLeft:'10px'}}>Smart Homes & Buildings </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}>
                          
                          IoT Devices & Sensors (e.g., Raspberry Pi, Arduino){' '}
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}>
                         
                          Embedded Systems & Microcontrollers
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}> 
                          IoT Security & Privacy </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}> 
                          Data Analytics for IoT </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}>
                          
                          Cloud Computing & Edge Computing for IoT
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}> 
                          AI & Machine Learning for IoT </label>
                      </div>
                      <div className='mb-3'>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}> Other </label>
                      </div>
                      <p><strong>
                        What would you like to learn more about in the IoT
                        industry?</strong>
                      </p>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="field"
                          name="field"
                          placeholder=""
                          className={' inputt'}
                          style={{
                            backgroundColor: 'white',
                            textAlign: 'left',
                            width: '700px',
                            height: '80px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            paddingLeft: '20px',
                          }}
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="mb-3">
                      <p>
                        <strong>
                          4. Career interests. Which of the following areas would
                          you like to work in? (Select all that apply){' '}
                        </strong>
                      </p>

                      <div>
                        <input type="checkbox" id="text" name="text"></input>
                        <label style={{paddingLeft:'10px'}}>
                          IoT Product Development </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}> 
                          Software Development for IoT Systems </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}>
                          
                          Hardware Design (e.g., Microcontrollers, Sensors)
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}> 
                          IoT Project Management </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}>
                           Research & Development in IoT </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}>
                          
                          Marketing and Sales in IoT Technologies
                        </label>
                      </div>

                      
                    </div>

                    {/* <div className="mb-3">
                      <p>
                        <strong>
                          5. Carenuity&apos;s Home Challenge Initiative. Are you
                          familiar with Carenuity&apos;s Home Challenge event
                          focused on IoT devices for the hospitality sector?{' '}
                        </strong>
                      </p>
                      <div className="row mb-3">
                        <div className="col-md-4">
                          <input type="radio" id="yes" name="yes" />
                          <label style={{paddingLeft:'10px'}}> Yes </label>
                        </div>
                        <div className="col-md-4">
                          <input type="radio" id="no" name="no" />
                          <label style={{paddingLeft:'10px'}}> No </label>
                        </div>
                      </div>
                      <p><strong>
                        If yes, what aspect of the Home Challenge interests you
                        the most? (Select all that apply) </strong>
                      </p>

                      <div>
                        <input type="checkbox" id="text" name="text"></input>
                        <label style={{paddingLeft:'10px'}}>
                          Developing innovative IoT solutions for the
                          hospitality industry.
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}>
                          
                          Working with hardware platforms like Raspberry Pi and
                          Arduino.
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}>
                          
                          Collaborating with other students and professionals on
                          real-world projects.
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}>
                          
                          Competing for prizes and recognition.
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}> Other </label>
                      </div>

                      <div className="mb-4">
                        <input
                          type="text"
                          id="field"
                          name="field"
                          placeholder=""
                          className={' inputt'}
                          style={{
                            backgroundColor: 'white',
                            textAlign: 'left',
                            width: '700px',
                            height: '80px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            paddingLeft: '20px',
                          }}
                          required
                        ></input>
                      </div>
                    </div> */}

                    <div className="mb-3">
                      <p>
                        <strong>
                          5. Skills & tools. What IoT-related tools, programming
                          languages, or hardware platforms are you familiar
                          with? (Select all that apply)
                        </strong>
                      </p>

                      <div>
                        <input type="checkbox" id="text" name="text"></input>
                        <label style={{paddingLeft:'10px'}}>Raspberry Pi</label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}> Arduino </label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}> Python</label>
                      </div>
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}> C/C++ </label>
                      </div>
                      
                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}> 
                          Cloud Platforms (AWS, Azure, etc.)</label>
                      </div>

                      <div>
                        <input type="checkbox" id="text" name="text" />
                        <label style={{paddingLeft:'10px'}}>
                          
                          IoT-specific Software (Node-RED, MQTT, etc.)
                        </label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p>
                        <strong>
                          6. Future involvement. Would you like to receive
                          updates and newsletters from ChipGlobe about future
                          events, internships, and innovations?
                        </strong>
                      </p>
                      <div className="row">
                        <div className="col-md-4">
                          <input type="radio" id="yes" name="yes" />
                          <label style={{paddingLeft:'10px'}}> Yes </label>
                        </div>
                        <div className="col-md-4">
                          <input type="radio" id="no" name="no" />
                          <label style={{paddingLeft:'10px'}}> No </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <p>
                        <strong>
                          7. Would you be interested in participating in other
                          IoT Challenges or Hackathons organized by ChipGlobe?{' '}
                        </strong>
                      </p>
                      <div className="row">
                        <div className="col-md-4">
                          <input type="radio" id="yes" name="yes" />
                          <label style={{paddingLeft:'10px'}}> Yes </label>
                        </div>
                        <div className="col-md-4">
                          <input type="radio" id="no" name="no" />
                          <label style={{paddingLeft:'10px'}}> No </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <p>
                        <strong>
                          8. Additional comments or suggestions please
                          provide any additional comments or suggestions you may
                          have regarding ChipGlobe, our initiatives, or the IoT
                          industry.{' '}
                        </strong>
                      </p>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="field"
                          name="field"
                          placeholder=""
                          className={' inputt'}
                          style={{
                            backgroundColor: 'white',
                            textAlign: 'left',
                            width: '700px',
                            height: '80px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            paddingLeft: '20px',
                          }}
                          required
                        ></input>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={'btn btn-lg btn-success '}
                      style={{
                        width: '300px',
                      }}
                    >
                      {' '}
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
