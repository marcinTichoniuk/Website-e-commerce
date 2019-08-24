import React from 'react';

const Slogan = ({ title, subtitle }) => {
  return (
    <div className="slogan">
      <h1 className="slogan__title">{title}</h1>
      <h2 className="slogan__subtitle">{subtitle}</h2>
    </div>
  );
}

export default Slogan;