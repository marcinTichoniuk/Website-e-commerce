import React from 'react';
import BasketProductDesktop from './BasketProductDesktop';

const BasketProduct = ({ value, product }) => {
  const { removeProduct, increment, decrement } = value;
  const { id, name, company, price, img, count, totalCost } = product;

  return (
    <>
      <li className="basket__item">
        <div className="basket__img-container">
          <img src={img} alt="" className="basket__img" />
        </div>
        <div className="basket__info">
          <h2 className="basket__name">{name}</h2>
          <h3 className="basket__info-txt">Company: {company}</h3>
          <h3 className="basket__info-txt">Price: <strong>{price}$</strong> </h3>
        </div>
        <div className="basket__cost">
          <div className="basket__quantity">
            <button onClick={() => decrement(id)} className="basket__btn">-</button>
            <span className="basket__count">{count}</span>
            <button onClick={() => increment(id)} className="basket__btn">+</button>
          </div>
          <div className="basket__remove">
            <button onClick={() => removeProduct(id)} className="basket__btn">Delete</button>
          </div>
        </div>
        <h2 className="basket__total-cost">total cost: <strong>{totalCost}$</strong></h2>
      </li>
      <BasketProductDesktop product={product} value={value} />
    </>
  );
}

export default BasketProduct;