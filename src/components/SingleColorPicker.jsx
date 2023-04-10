import React from 'react';

const SingleColorPicker = ({ colorName, color, handleFormInputs }) => {
  const bgColor = { backgroundColor: '' };
  if (colorName === 'red') {
    bgColor.backgroundColor = `rgb(${color}, 0, 0)`;
  } else if (colorName === 'green') {
    bgColor.backgroundColor = `rgb(0, ${color}, 0)`;
  } else {
    bgColor.backgroundColor = `rgb(0, 0, ${color})`;
  }



  return (
    <div className="d-flex align-items-center justify-content-start w-75 mb-2 ">
      <div
          style={{
            backgroundColor: `${bgColor.backgroundColor}`,
            width: '50px',
            height: '50px',
          }}
        ></div>
      <div className="text-capitalize p-2 w-25">{colorName}: </div>
      <input
        min={0}
        max={255}
        name={colorName}
        onChange={handleFormInputs}
        value={color}
        type="number"
      />
    </div>
  );
};

export default SingleColorPicker;
