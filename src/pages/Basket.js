import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../context';

import Title from '../components/Title';
import BasketList from '../components/Basket/BasketList';
import Totals from '../components/Basket/Totals';
import BasketColumn from '../components/Basket/BasketColumn';

const Basket = () => {
  const value = useContext(StoreContext);
  const { subTotal, delivery, total, cart } = value;

  return (
    <section className="basket">
      <Title title="Your cart" />
      {cart.length === 0 ? <div className="basket__empty">...is empty. Change it!</div> :
        <>
          <BasketColumn />
          <BasketList />
          <Totals subTotal={subTotal} delivery={delivery} total={total} />
        </>
      }
    </section>
  );
}

export default Basket;