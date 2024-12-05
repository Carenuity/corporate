import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';

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
<div
              
              style={{
                
              }}
            ></div>
      <section className="pt-4">
        <div className="container">
       
        
        
            <div 
              style={{
                paddingLeft: '250px',
                
              }}
            >
              <div className="e-card"
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
            <h4>
            Carenuity Student Survey & Questionnaire</h4>
              <p>
               Thank you for your interest in Carenuity 
              and the IoT industry! This survey will help us understand your interests and provide
               you with relevant opportunities.</p>

             <p><strong>1. Personal Information</strong></p>
                  <form action="#" className="form">
                    <div className='row'>
                    <div className='col-md-6'>
                    <div>
                      <label>
                        <strong>First Name *</strong>
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
                    <div className='col-md-6'>
                    <div>
                      <label>
                        <strong>Last Name *</strong>
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

                    <div className='col-md-6'>
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
                    <div className='col-md-6'>
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
                    </div>

                    <div className='col-md-6'>
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

                    <div className='col-md-6'>
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
                    
                    <div className='mb-3'>
                    <p><strong>2. Open House Participation Would you like to participate in an 
                      Open House event at our office? </strong></p>
                      <div className='row'>
                      <div className='col-md-4'>
                      <input type="radio" id="yes" name="yes" />
                      <label > Yes </label> 
                      </div>
                      <div className='col-md-4'>
                      <input type="radio" id="no" name="no" />
                      <label > No </label> 
                      </div></div>
                        <p>
                        If yes, why are you interested in visiting us? (Select all that apply)
                        </p>
                        <div>
                        <input type="checkbox" id="text" name="text" ></input>
                      <label >To learn more about career opportunities in IoT and technology. </label>
                        </div>
                        <div>
                        <input type="checkbox" id="text" name="text" />
                        <label > To network with professionals and meet the Carenuity team. </label>
                        </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label > To see real-world applications of IoT solutions in action. </label> </div>
                        <div><input type="checkbox" id="text" name="text" />
                        <label > Other </label></div>
                        
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
                          height:'80px',
                          border: '1px solid #ccc',
                          borderRadius: '10px',
                          paddingLeft: '20px',
                        }}
                        required
                      ></input>
                    </div>
                    </div>
                    <div className='mb-3'>
                    <p><strong>3. IoT Industry Interests What areas of the IoT industry are you 
                      most interested in? (Select all that apply) </strong></p>
                       
                        <div>
                        <input type="checkbox" id="text" name="text" ></input>
                      <label >Smart Homes & Buildings </label>
                        </div>
                        <div>
                        <input type="checkbox" id="text" name="text" />
                        <label > IoT Devices & Sensors (e.g., Raspberry Pi, Arduino) </label>
                        </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label > Embedded Systems & Microcontrollers </label> </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label > IoT Security & Privacy  </label> </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label >  Data Analytics for IoT </label> </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label > Cloud Computing & Edge Computing for IoT </label> </div>
                        <div>
                        <input type="checkbox" id="text" name="text" />
                        <label > AI & Machine Learning for IoT </label> </div>
                        <div><input type="checkbox" id="text" name="text" />
                        <label > Other </label></div>
                        <p>What would you like to learn more about in the IoT industry?</p> 
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
                          height:'80px',
                          border: '1px solid #ccc',
                          borderRadius: '10px',
                          paddingLeft: '20px',
                        }}
                        required
                      ></input>
                    </div>
                    </div>
                    <div className='mb-3'>
                    <p><strong>4. Career Interests Which of the following areas would you
                       like to work in? (Select all that apply) </strong></p>
                      
                        <div>
                        <input type="checkbox" id="text" name="text" ></input>
                      <label >IoT Product Development </label>
                        </div>
                        <div>
                        <input type="checkbox" id="text" name="text" />
                        <label > Software Development for IoT Systems </label>
                        </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label > Hardware Design (e.g., Microcontrollers, Sensors) </label> </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label > IoT Project Management  </label> </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label >  Research & Development in IoT </label> </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label > Marketing and Sales in IoT Technologies </label> </div>
                        
                        
                        <div><input type="checkbox" id="text" name="text" />
                        <label > Marketing and Sales in IoT Technologies </label></div>
                       
                      
                    </div>
                      
                    <div className='mb-3'>
                    <p><strong>5. Carenuity&apos;s Home Challenge Initiative Are you familiar with Carenuity&apos;s Home Challenge event focused on
                       IoT devices for the hospitality sector? </strong></p>
                       <div className='row'>
                      <div className='col-md-4'>
                      <input type="radio" id="yes" name="yes" />
                      <label > Yes </label> 
                      </div>
                      <div className='col-md-4'>
                      <input type="radio" id="no" name="no" />
                      <label > No </label> 
                      </div></div>
                        <p>
                        If yes, what aspect of the Home Challenge interests you the most? (Select all that apply)
                        </p>
                        
                        <div>

                        <input type="checkbox" id="text" name="text" ></input>
                      <label >Developing innovative IoT solutions for the hospitality industry. </label>
                        </div>
                        <div>
                        <input type="checkbox" id="text" name="text" />
                        <label > Working with hardware platforms like Raspberry Pi and Arduino. </label>
                        </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label > Collaborating with other students and professionals on real-world projects. </label> </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label > Competing for prizes and recognition. </label> </div>
                        <div><input type="checkbox" id="text" name="text" />
                        <label > Other </label></div>
                        
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
                          height:'80px',
                          border: '1px solid #ccc',
                          borderRadius: '10px',
                          paddingLeft: '20px',
                        }}
                        required
                      ></input>
                    </div>
                    </div>

                    <div className='mb-3'>
                    <p><strong>6. Skills & Tools What IoT-related tools, programming languages, or hardware 
                      platforms are you familiar with? (Select all that apply) </strong></p>
                     
                        <div>
                        <input type="checkbox" id="text" name="text" ></input>
                      <label >Raspberry Pi</label>
                        </div>
                        <div>
                        <input type="checkbox" id="text" name="text" />
                        <label > Arduino </label>
                        </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label > Python</label> </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label > C/C++   </label> </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label >  JavaScript</label> </div>
                        <div>
                          <input type="checkbox" id="text" name="text" />
                        <label > Cloud Platforms (AWS, Azure, etc.)</label> </div>
                      
                        <div><input type="checkbox" id="text" name="text" />
                        <label > IoT-specific Software (Node-RED, MQTT, etc.) </label></div>
                       
                      
                    </div>

                    <div className='mb-3'>
                    <p><strong>7. Future Involvement Would you like to receive updates and newsletters 
                      from Carenuity about future events, internships, and innovations? </strong></p>
                      <div className='row'>
                      <div className='col-md-4'>
                      <input type="radio" id="yes" name="yes" />
                      <label > Yes </label> 
                      </div>
                      <div className='col-md-4'>
                      <input type="radio" id="no" name="no" />
                      <label > No </label> 
                      </div></div>
                        
                    </div>
                    <div className='mb-3'>
                    <p><strong>8. Would you be interested in participating in other IoT Challenges
                       or Hackathons organized by Carenuity? </strong></p>
                       <div className='row'>
                      <div className='col-md-4'>
                      <input type="radio" id="yes" name="yes" />
                      <label > Yes </label> 
                      </div>
                      <div className='col-md-4'>
                      <input type="radio" id="no" name="no" />
                      <label > No </label> 
                      </div>
                      </div>
                    </div>
                    <div className='mb-3'>
                    <p><strong>9. 8. Additional Comments or Suggestions Please provide any additional comments
                       or suggestions you may have regarding Carenuity, our initiatives, or the IoT industry. </strong></p>
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
                          height:'80px',
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





