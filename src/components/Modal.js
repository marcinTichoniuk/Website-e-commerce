import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../context';
import { Link } from 'react-router-dom';

import Loading from './Loading';

const Modal = () => {
  const value = useContext(StoreContext);
  const { closeModal, modalProduct, modalOpen, loading } = value;

  if (loading) return <Loading />

  const { name, company, price, img } = modalProduct;

  if (modalOpen) {
    return (
      <div className="modal">
        <div className="modal__card">
          <h2 className="modal__title">Item added to cart</h2>
          <div className="modal__info">
            <h2 className="modal__name">{name}</h2>
            <h3 className="modal__info-txt">Company: {company}</h3>
            <h3 className="modal__info-txt">Price: {price}$</h3>
          </div>
          <div className="modal__img-container">
            <img src={img} alt="" className="modal__img" />
          </div>
          <div className="modal__buttons">
            <Link to="/products" className="modal__link">
              <button className="btn" onClick={closeModal}>Continue Shopping</button>
            </Link>
            <Link to="/cart" className="modal__link">
              <button className="btn" onClick={closeModal}>Go to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default Modal;