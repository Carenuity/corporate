import React from 'react'

const CarouselImage = ({url}: {url: string}) => {
  return (
    <>
      <div className='item'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt='C3-Mini Sensor Box Device'
          style={{ maxHeight: '20rem' }}
        />
      </div>
    </>
  );
}

export default CarouselImage