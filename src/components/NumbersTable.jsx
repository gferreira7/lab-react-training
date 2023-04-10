import React, { useEffect, useState } from 'react';

const NumbersTable = ({ limit }) => {
  const numbersArray = Array.from({ length: limit }, (value, i) => i + 1);

  return (
    <div className='row'>
      {numbersArray.map((number) => {
        return <div className={number%2 === 0 ? 'col-3 border bg-danger' : 'col-3 border'}>{number}</div>;
      })}
    </div>
  );
};

export default NumbersTable;
