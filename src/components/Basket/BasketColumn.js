import React from 'react';

const BasketColumn = () => {
  return (
    <div className="column">
      <div className="column__product">
        <h3 className="column__title">products</h3>
      </div>
      <div className="column__product">
        <h3 className="column__title">name</h3>
      </div>
      <div className="column__product">
        <h3 className="column__title">price</h3>
      </div>
      <div className="column__product">
        <h3 className="column__title">quantity</h3>
      </div>
      <div className="column__product">
        <h3 className="column__title">remove</h3>
      </div>
      <div className="column__product">
        <h3 className="column__title">total</h3>
      </div>
    </div>
  );
}

export default BasketColumn;