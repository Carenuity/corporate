import React from 'react'
import Service from './Service';

const Services = () => {
  return (
    <>
      <section className='card-style09 py-0 overflow-visible bg-transparent'>
        <div className='container'>
          <div className='feature-inner'>
            <div className='row g-xl-5 mt-n1-9'>
              <Service
                icon='fa-solid fa-plug'
                title='IoT Toolkits'
                description='We focus on the best practices for it solutions and
                        services'
              />
              <Service
                icon='fa-sharp fa-solid fa-code'
                title='WebFlashing'
                description='We focus on the best practices for it solutions and
                        services'
              />
              <Service
                icon='fa-sharp fa-solid fa-microchip'
                title='Home Automation'
                description='We focus on the best practices for it solutions and
                        services'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services