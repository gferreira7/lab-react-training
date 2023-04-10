import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [RGB, setRGB] = useState({ red: 0, green: 0, blue: 0 });

  const { red, green, blue } = RGB;
  const handleFormInputs = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setRGB((previousValue) => ({ ...previousValue, [name]: value }));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-start border m-2 p-2 w-50 ">
      <SingleColorPicker
        colorName="red"
        color={red}
        handleFormInputs={handleFormInputs}
      />

      <SingleColorPicker
        colorName="green"
        color={green}
        handleFormInputs={handleFormInputs}
      />

      <SingleColorPicker
        colorName="blue"
        color={blue}
        handleFormInputs={handleFormInputs}
      />

      <div className='d-flex justify-content-start align-items-center w-75'>
        <div
          style={{
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            width: '50px',
            height: '50px',
          }}
        ></div>
        <div className='p-2 w-25 fs-5'>
          rgb({red}, {green}, {blue})
        </div>
      </div>
    </div>
  );
};

export default RGBColorPicker;
