import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';

const Index = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Help Center';
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

     
      

      <section className="overflow-hidden py-3">
        <div className="container position-relative z-index-3">
            <div >
               <h4>Account & App</h4>
                    <p>The Carenuity App allows you to manage your SQ-Panel, monitor sensor data, configure alerts, and share access with family or colleagues.</p>

                    <h4>1. Account Setup</h4>
                    <ol>
                    <li><strong>Download & Install the App</strong>
                        <ul>
                        <li><a
                href="https://apps.apple.com/ie/app/carenuity/id6472718918"
                target="_blank"
                rel="noreferrer"
                  ><u>App Store (iOS)</u></a></li>
                <li><a
                href="https://play.google.com/store/apps/details?id=com.carenuity.home"
                target="_blank"
                rel="noreferrer"
              ><u>Google Play (Android)</u></a></li>
                        </ul>
                    </li>
                    <li><strong>Create an Account</strong>
                        <ul>
                        <li>Provide email, password, and accept Terms & Conditions.</li>
                        <li>Verify email via confirmation link.</li>
                        </ul>
                    </li>
                    <li><strong>Log In</strong>
                        <ul>
                        <li>Enter credentials to access your dashboard.</li>
                        </ul>
                    </li>
                    </ol>

                    <h4>2. Permissions & Roles</h4>
                    <ul>
                    <li><strong>Owner:</strong> Full control of devices, alerts, and user management.</li>
                    <li><strong>Member (full access):</strong> Can view and modify devices and settings.</li>
                    <li><strong>Member (read-only):</strong> Can view sensor data but cannot modify settings.</li>
                    </ul>

                    <p><strong>Manage Permissions:</strong></p>
                    <ul>
                    <li>Open app → <em>Settings → Users & Permissions</em>.</li>
                    <li>Invite users via email; assign role.</li>
                    </ul>

                    <h4>3. Multi-User Support</h4>
                    <ul>
                    <li>Multiple users can monitor the same SQ-Panel simultaneously.</li>
                    <li>Alerts and notifications are sent to all permitted users.</li>
                    <li>Each user has a personal login; activities are logged for audit.</li>
                    </ul>

                    <h4>4. Data Privacy</h4>
                    <ul className='mb-6'>
                    <li>All sensor and account data are stored securely on <strong>European servers</strong>.</li>
                    <li>Users control which devices and data are shared.</li>
                    <li>Compliance with GDPR ensures personal information is protected.</li>
                    <li>Data sharing with third-party apps requires explicit consent.</li>
                    </ul>

                    {/* <div>
                        <h4>5. Release Notes & Version Matrix</h4>

                    <p><strong>Release Notes:</strong></p>
                    <ul>
                    <li>Access in-app → <em>Menu → About → Release Notes</em>.</li>
                    <li>Provides detailed information about new features, bug fixes, and improvements.</li>
                    </ul>

                    <p><strong>Version Matrix:</strong></p>
                    <table style={{
                width: '100%',
                border: '1px solid #dddddd',
                padding: '20px',
              }}>
                    <thead>
                        <tr style={{ background: '#198754', color: '#ffffff' }}>
                        <th style={{
                    width: '30%',
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>App Version</th>
                        <th style={{
                    width: '30%',
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>Supported Firmware</th>
                        <th style={{
                    width: '30%',
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>Notes</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                        <td  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>v3.2.1</td>
                        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>FW 1.8 – 2.0</td>
                        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>Minor bug fixes, improved CO₂ calibration</td>
                        </tr>
                        <tr>
                        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>v3.3.0</td>
                        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>FW 2.0 – 2.2</td>
                        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>Added multi-user notifications, Matter integration</td>
                        </tr>
                        <tr>
                        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>v3.3.2</td>
                        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>FW 2.2</td>
                        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>Security patch, improved app stability</td>
                        </tr>
                    </tbody>
                    </table>

                    <p><strong>Tip:</strong> Always keep both app and SQ-Panel firmware updated for optimal performance.</p>
                    </div> */}
                    
                    <div style={{ textAlign: 'center' }}>
              <p>
                {!isMobile && (
                  <Link
                    href={'/carenuity-app-guide'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">Mobile App User Guide</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/carenuity-app-guide'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">
                      Mobile App User Guide{' '}
                      {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                    </span>
                  </a>
                )}
              </p>
            </div>
            </div>
          
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.helpcenter,
  pageUrl: 'help-center',
  pageTitle: 'Mobile App & Account',
  serviceCategory: 'Get Help',
});
