import React from 'react'

const ReplyForm = ({ title }: { title: string }) => {
  return (
    <>
      <h3 className='h4 mb-3'>{title}</h3>
      {/* <!-- Form --> */}
      <form>
        <div className='row'>
          <div className='form-group'>
            <textarea
              name='reply'
              rows={6}
              className='form-control h-100'
              placeholder='Your Reply'
            ></textarea>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Your Name'
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='Email Address'
              />
            </div>
          </div>
        </div>
        <div>
          <button className='btn-style1 medium border-0' type='submit'>
            <span>Leave a Reply</span>
          </button>
        </div>
      </form>
      {/* <!-- End Form --> */}
    </>
  );
};

export default ReplyForm