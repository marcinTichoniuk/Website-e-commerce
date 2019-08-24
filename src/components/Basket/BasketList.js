import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context';

import BasketProduct from './BasketProduct';

const BasketList = () => {
  const value = useContext(StoreContext);
  const { cart } = value;

  const newCart = cart.map(product => (
    <BasketProduct
      key={product.id}
      product={product}
      value={value}
    />
  ))

  return (
    <ul className="basket__list">
      {newCart}
    </ul>
  );
}

export default BasketList;