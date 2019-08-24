import React from 'react';
import bg from '../img/bg2.jpg';
import Title from './Title';

const Delivery = () => {
  return (
    <section className="delivery">
      <Title title="Hasle-free and immediatly delivery" />
      <div className="delivery__img-container">
        <img src={bg} alt="" className="delivery__img" />
      </div>
      <p className="delivery__text">We don't keep customers guessing when their package will arrive. We make use of a premium shipping service known as <strong>immediatly delivery</strong> which is delivered by Teleportation Center.</p>
    </section>
  );
}

export default Delivery;