import React from 'react';

const BasketProductDesktop = ({ value, product }) => {
  const { removeProduct, increment, decrement } = value;
  const { id, name, price, img, count, totalCost } = product;

  return (
    <li className="basket__item-desktop">
      <div className="basket__img-container-desktop">
        <img className="basket__img-desktop" src={img} alt="" />
      </div>
      <p className="basket__info-txt-desktop">{name}</p>
      <p className="basket__info-txt-desktop">{price}$</p>
      <div className="basket__quantity-desktop">
        <button className="basket__btn" onClick={() => decrement(id)}>-</button>
        <span className="basket__count">{count}</span>
        <button className="basket__btn" onClick={() => increment(id)}>+</button>
      </div>
      <div className="basket__remove">
        <button onClick={() => removeProduct(id)} className="basket__btn">Delete</button>
      </div>
      <h2 className="basket__total-cost-desktop">{totalCost}$</h2>
    </li>
  );
}

export default BasketProductDesktop;