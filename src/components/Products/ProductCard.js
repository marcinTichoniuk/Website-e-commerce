import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, value }) => {
  const { addToCart, openModal } = value;
  const { id, name, img, price, company, inCart } = product;

  return (
    <li className="products__item">
      <div className="products__img-container">
        <img src={img} alt="item" className="products__img" />
      </div>
      <div className="products__info">
        <h2 className="products__name">{name}</h2>
        <h4 className="products__text">Company: {company}</h4>
        <h4 className="products__text">Price: <strong>{price}$</strong> </h4>
        <div className="products__btns">
          <button
            onClick={() => {
              addToCart(id);
              openModal(id);
            }}
            className={inCart ? "btn btn--red" : "btn"}
            disabled={inCart ? true : false}>
            {inCart ? 'In cart' : 'Add to cart'}
          </button>
          <Link to={`/products/${name}`} className="products__link">
            <button className="btn">Show details</button>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;