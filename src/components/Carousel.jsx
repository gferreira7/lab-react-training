import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const nextItem = () => {
    if (imgIndex === images.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  };

  const previousItem = () => {
    if (imgIndex !== 0) {
      setImgIndex(imgIndex - 1);
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center w-25 border p-2 mb-2'>
      <img  src={`${images[imgIndex]}`} alt="current" />
      <div>
        <button className='btn btn-secondary m-4' onClick={previousItem}>Back</button>
        <button className='btn btn-secondary m-4' onClick={nextItem}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
