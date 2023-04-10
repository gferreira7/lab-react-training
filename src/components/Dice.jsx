import React, { useState } from 'react';

const Dice = () => {
  const diceRoll = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const [currentRoll, setCurrentRoll] = useState(diceRoll());

  const handleClick = (e) => {
    e.target.src = `./dice-empty.png`;
    setTimeout(() => {
      setCurrentRoll(diceRoll());
    }, 1000);
  };
  return (
    <div>
      <img
        className="w-50 p-2"
        onClick={handleClick}
        src={`./dice${currentRoll}.png`}
        alt="dice"
      />
    </div>
  );
};

export default Dice;
