import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [imageUrl, setImageUrl] = useState(img);

  const swapImageUrl = () => {
    
    imageUrl === img? setImageUrl(imgClicked) : setImageUrl(img)
  }
  return (
    <div>
      <img onClick={swapImageUrl} src={imageUrl} alt="maxence" />
    </div>
  );
};

export default ClickablePicture;
