import React from 'react';

const Totals = ({ subTotal, delivery, total }) => {
  return (
    <div className="basket__totals">
      <h2 className="basket__total">subtotal: {subTotal}$</h2>
      <h2 className="basket__total">delivery: {delivery}$</h2>
      <h2 className="basket__total">total cost: <strong>{total}$</strong></h2>
    </div>
  );
}

export default Totals;