import React, { ReactNode } from 'react'

function Sidebar({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='sidebar'>
        <div
          className='widget bg-secondary mb-1-9 wow fadeInUp'
          data-wow-delay='350ms'
        >
          <div className='text-white p-3'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar