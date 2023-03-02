import React from 'react'

const Search = () => {
  return (
    <>
      <div
        className='widget bg-secondary mb-1-9 wow fadeInUp'
        data-wow-delay='200ms'
      >
        <div className='widget-content'>
          <h5 className='mb-3 text-white'>Search</h5>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search here...'
            />
            <div className='input-group-append'>
              <button className='btn-style1 border-0' type='button'>
                <span>
                  <i className='fa fa-search'></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search