import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { NewsletterHostname } from '../../../utils/constants';
import { useRouter } from 'next/router';

type SurveyPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  school?: string;
  yearOfStudy?: number;
  fieldOfStudy?: string;
  openOfficeDay?: boolean;
  whyOpenOffice?: string[];
  IoTInterests?: string[];
  whatToLearnMoreInIoT?: string;
  careerInterests?: string[];
  IoTTools?: string[];
  interestInFutureIoTChallenge?: boolean;
  comment?: string;
};

const Page = () => {
  const pageTitle = 'Carenuity Student Survey & Questionnaire';
  const [data, setData] = useState<SurveyPayload>({});
  const [showCustomWoo, setShowCustomWoo] = useState(false);
  const [showWhyOpenOffice, setShowWhyOpenOffice] = useState(false);
  const [showCustomIotInterest, setShowCustomIotInterest] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!window.document) {
      return;
    }

    const query = new URLSearchParams(document.location.search);
    const school = query.get('school');

    if (school) {
      setData((prevData) => ({
        ...prevData,
        school,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async () => {
    const url = `${NewsletterHostname}/v1/student-survey`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Thank you for your submission!');
        setData({});
        return router.back();
      }

      alert('Something went wrong! Kindly try again.');
    } catch (error) {
      alert('Something went wrong! Kindly try again.');
      console.log(error);
    }
  };

  const openOfficeInterests = [
    'To learn more about career opportunities in IoT and AI technology.',
    'To network with professionals and meet the ChipGlobe team.',
    'To see real-world applications of IoT solutions in action.',
    'Other',
  ];
  const IoTIndustryInterests = [
    'Smart Homes & Buildings',
    'IoT Devices & Sensors (e.g., Raspberry Pi, Arduino)',
    'Embedded Systems & Microcontrollers',
    'IoT Security & Privacy',
    'Data Analytics for IoT',
    'Cloud Computing & Edge Computing for IoT',
    'AI & Machine Learning for IoT',
    'Other',
  ];
  const careerInterests = [
    'IoT Product Development',
    'Software Development for IoT Systems',
    'Hardware Design (e.g., Microcontrollers, Sensors)',
    'IoT Project Management',
    'Research & Development in IoT',
    'Marketing and Sales in IoT Technologies',
  ];
  const IoTTools = [
    'Raspberry Pi',
    'Arduino',
    'Python',
    'C/C++',
    'Cloud Platforms (AWS, Azure, etc.)',
    'IoT-specific Software (Node-RED, MQTT, etc.)',
  ];

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
      <div></div>
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
                {data.school && <h4 className="mb-4">{data.school}</h4>}

                {/* <h4 className="mb-4">Aristotle University of Thessaloniki</h4> */}
                <h5>Carenuity Student Survey & Questionnaire</h5>
                <p>
                  Thank you for your interest in ChipGlobe and the IoT industry!
                  This survey will help us understand your interests and provide
                  you with relevant opportunities.
                </p>

                <p>
                  <strong>1. Personal Information</strong>
                </p>
                <form
                  method="POST"
                  className="form"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setLoading(true);

                    if (!data.IoTInterests || data.IoTInterests?.length === 0) {
                      alert(
                        'Please select at least one IoT industry interest!'
                      );
                      setLoading(false);
                      return;
                    }
                    if (!data.IoTTools || data.IoTTools?.length === 0) {
                      alert(
                        'Please select at least one IoT-related tools you use!'
                      );
                      setLoading(false);
                      return;
                    }
                    if (
                      !data.careerInterests ||
                      data.careerInterests?.length === 0
                    ) {
                      alert('Please select at least one career interest!');
                      setLoading(false);
                      return;
                    }

                    await handleSubmit();
                    setLoading(false);
                  }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <label htmlFor="fname">
                          <strong>First name *</strong>
                        </label>
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="fname"
                          name="first-name"
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
                          onChange={(e) => {
                            const value = e.target.value;
                            setData((prevData) => ({
                              ...prevData,
                              firstName: value,
                            }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <label htmlFor="lname">
                          <strong>Last name *</strong>
                        </label>
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="lname"
                          name="last-name"
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
                          onChange={(e) => {
                            const value = e.target.value;
                            setData((prevData) => ({
                              ...prevData,
                              lastName: value,
                            }));
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <label htmlFor="email">
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
                          onChange={(e) => {
                            const value = e.target.value;
                            setData((prevData) => ({
                              ...prevData,
                              email: value,
                            }));
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <label htmlFor="year">
                          <strong>Year of study *</strong>
                        </label>
                      </div>
                      <div className="mb-4">
                        <input
                          type="number"
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
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            setData((prevData) => ({
                              ...prevData,
                              yearOfStudy: value,
                            }));
                          }}
                        ></input>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <label htmlFor="field">
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
                          onChange={(e) => {
                            const value = e.target.value;
                            setData((prevData) => ({
                              ...prevData,
                              fieldOfStudy: value,
                            }));
                          }}
                        ></input>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p>
                        <strong>
                          2. Have you subscribed to our Open Office Day
                          newsletter?
                        </strong>
                      </p>
                      <div className="row mb-2">
                        <div className="col-md-4">
                          <input
                            type="radio"
                            id="yes-open-office-day"
                            name="open-office-day"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setData((prevData) => ({
                                  ...prevData,
                                  openOfficeDay: true,
                                }));
                                setShowWhyOpenOffice(true);
                              }
                            }}
                          />
                          <label
                            htmlFor="yes-open-office-day"
                            style={{ paddingLeft: '10px' }}
                          >
                            {' '}
                            Yes{' '}
                          </label>
                        </div>
                        <div className="col-md-4">
                          <input
                            type="radio"
                            id="no-open-office-day"
                            name="open-office-day"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setData((prevData) => ({
                                  ...prevData,
                                  openOfficeDay: false,
                                }));
                                setShowWhyOpenOffice(false);
                              }
                            }}
                          />
                          <label
                            htmlFor="no-open-office-day"
                            style={{ paddingLeft: '10px' }}
                          >
                            {' '}
                            No{' '}
                          </label>
                        </div>
                      </div>

                      {showWhyOpenOffice && (
                        <>
                          <p>
                            <strong>
                              Why are you interested in visiting us? (Select all
                              that apply)
                            </strong>
                          </p>

                          {openOfficeInterests.map((interest, index) => (
                            <div key={index}>
                              <input
                                type="checkbox"
                                id={`interestedInOpenOffice-${index}`}
                                name="text"
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    if (interest.toLowerCase() === 'other') {
                                      setShowCustomWoo(true);
                                      return;
                                    }

                                    setData((prevData) => ({
                                      ...prevData,
                                      whyOpenOffice: [
                                        ...(prevData.whyOpenOffice
                                          ? prevData.whyOpenOffice
                                          : []),
                                        interest,
                                      ],
                                    }));
                                  } else {
                                    if (interest.toLowerCase() === 'other') {
                                      setShowCustomWoo(false);
                                      return;
                                    }

                                    setData((prevData) => ({
                                      ...prevData,
                                      whyOpenOffice:
                                        prevData.whyOpenOffice?.filter(
                                          (w) => w !== interest
                                        ),
                                    }));
                                  }
                                }}
                              />
                              <label
                                htmlFor={`interestedInOpenOffice-${index}`}
                                style={{ paddingLeft: '10px' }}
                              >
                                {interest}
                              </label>
                            </div>
                          ))}

                          {showCustomWoo && (
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
                                onBlur={(e) => {
                                  const content = e.target.value;

                                  if (content) {
                                    setData((prevData) => ({
                                      ...prevData,
                                      whyOpenOffice: [
                                        ...(prevData.whyOpenOffice
                                          ? prevData.whyOpenOffice
                                          : []),
                                        content,
                                      ],
                                    }));
                                  }
                                }}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    <div className="mb-3">
                      <p>
                        <strong>
                          3. IoT industry interests. What areas of the IoT
                          industry are you most interested in? (Select all that
                          apply)
                        </strong>
                      </p>

                      {IoTIndustryInterests.map((interest, index) => (
                        <div key={index}>
                          <input
                            type="checkbox"
                            id={`ioTInterests-${index}`}
                            name="text"
                            onChange={(e) => {
                              if (e.target.checked) {
                                if (interest.toLowerCase() === 'other') {
                                  setShowCustomIotInterest(true);
                                }

                                setData((prevData) => ({
                                  ...prevData,
                                  IoTInterests: [
                                    ...(prevData.IoTInterests
                                      ? prevData.IoTInterests
                                      : []),
                                    interest,
                                  ],
                                }));
                              } else {
                                if (interest.toLowerCase() === 'other') {
                                  setShowCustomIotInterest(false);

                                  setData((prevData) => ({
                                    ...prevData,
                                    whatToLearnMoreInIoT: undefined,
                                  }));
                                }

                                setData((prevData) => ({
                                  ...prevData,
                                  IoTInterests: prevData.IoTInterests?.filter(
                                    (i) => i !== interest
                                  ),
                                }));
                              }
                            }}
                          />
                          <label
                            htmlFor={`ioTInterests-${index}`}
                            style={{ paddingLeft: '10px' }}
                          >
                            {interest}
                          </label>
                        </div>
                      ))}

                      {showCustomIotInterest && (
                        <>
                          <p className="mt-3">
                            <strong>
                              What would you like to learn more about in the IoT
                              industry?
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
                              onChange={(e) => {
                                setData((prevData) => ({
                                  ...prevData,
                                  whatToLearnMoreInIoT: e.target.value,
                                }));
                              }}
                            />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="mb-3">
                      <p>
                        <strong>
                          4. Career interests. Which of the following areas
                          would you like to work in? (Select all that apply){' '}
                        </strong>
                      </p>

                      {careerInterests.map((interest, index) => (
                        <div key={index}>
                          <input
                            type="checkbox"
                            id={`careerInterests-${index}`}
                            name="text"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setData((prevData) => ({
                                  ...prevData,
                                  careerInterests: [
                                    ...(prevData.careerInterests
                                      ? prevData.careerInterests
                                      : []),
                                    interest,
                                  ],
                                }));
                              } else {
                                setData((prevData) => ({
                                  ...prevData,
                                  careerInterests:
                                    prevData.careerInterests?.filter(
                                      (c) => c !== interest
                                    ),
                                }));
                              }
                            }}
                          />
                          <label
                            htmlFor={`careerInterests-${index}`}
                            style={{ paddingLeft: '10px' }}
                          >
                            {interest}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="mb-3">
                      <p>
                        <strong>
                          5. Skills & tools. What IoT-related tools, programming
                          languages, or hardware platforms are you familiar
                          with? (Select all that apply)
                        </strong>
                      </p>

                      {IoTTools.map((tool, index) => (
                        <div key={index}>
                          <input
                            type="checkbox"
                            id={`ioTTools-${index}`}
                            name="text"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setData((prevData) => ({
                                  ...prevData,
                                  IoTTools: [
                                    ...(prevData.IoTTools
                                      ? prevData.IoTTools
                                      : []),
                                    tool,
                                  ],
                                }));
                              } else {
                                setData((prevData) => ({
                                  ...prevData,
                                  IoTTools: prevData.IoTTools?.filter(
                                    (t) => t !== tool
                                  ),
                                }));
                              }
                            }}
                          />
                          <label
                            htmlFor={`ioTTools-${index}`}
                            style={{ paddingLeft: '10px' }}
                          >
                            {tool}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="mb-3">
                      <p>
                        <strong>
                          6. Would you be interested in participating in other
                          IoT Challenges or Hackathons organized by ChipGlobe?{' '}
                        </strong>
                      </p>
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            type="radio"
                            id="yes-challenge"
                            name="yes"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setData((prevData) => ({
                                  ...prevData,
                                  interestInFutureIoTChallenge: true,
                                }));
                              }
                            }}
                          />
                          <label
                            htmlFor={'yes-challenge'}
                            style={{ paddingLeft: '10px' }}
                          >
                            {' '}
                            Yes{' '}
                          </label>
                        </div>
                        <div className="col-md-4">
                          <input
                            type="radio"
                            id="no-challenge"
                            name="no"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setData((prevData) => ({
                                  ...prevData,
                                  interestInFutureIoTChallenge: false,
                                }));
                              }
                            }}
                          />
                          <label
                            htmlFor={'no-challenge'}
                            style={{ paddingLeft: '10px' }}
                          >
                            {' '}
                            No{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <p>
                        <strong>
                          7. Additional comments or suggestions please provide
                          any additional comments or suggestions you may have
                          regarding ChipGlobe, our initiatives, or the IoT
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
                          onChange={(e) => {
                            const content = e.target.value;
                            setData((prevData) => ({
                              ...prevData,
                              comment: content,
                            }));
                          }}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={'btn btn-lg btn-success '}
                      style={{
                        width: '300px',
                      }}
                    >
                      {!loading && 'Submit'}
                      {loading && 'Submitting...'}
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
