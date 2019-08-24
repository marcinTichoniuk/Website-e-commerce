import React from 'react';

const NoProduct = ({ title }) => {
  return (
    <div className="error">
      <h3 className="error__title">{title}</h3>
    </div>
  );
}

export default NoProduct;