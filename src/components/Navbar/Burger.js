import React from 'react';

const Burger = ({ handleToggle }) => {
  return (
    <div className="burger" onClick={handleToggle}>
      <div className="burger__item"></div>
    </div>
  );
}

export default Burger;