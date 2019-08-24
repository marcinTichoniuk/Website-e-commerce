import React, { Component } from 'react';
import { StoreContext } from '../context';
import { Link } from 'react-router-dom';
import NoProduct from '../components/NoProduct';

class ProductDetails extends Component {
  state = {
    name: this.props.match.params.id
  }

  static contextType = StoreContext;

  render() {
    const value = this.context;
    const { getProduct, addToCart, openModal } = value;
    const product = getProduct(this.state.name);

    if (!product) return <NoProduct title="There is no such product..." />

    const { name, id, price, info, img, company, inCart } = product;

    return (
      <section className="details">
        <div className="details__img-container">
          <img src={img} alt="" className="details__img" />
        </div>
        <div className="details__info-container">
          <div className="details__info">
            <h2 className="details__name">{name}</h2>
            <h3 className="details__info-txt">Company: {company}</h3>
            <h3 className="details__info-txt">Price: {price}$</h3>
          </div>
          <div className="details__description">
            <p className="details__text">{info}</p>
          </div>
          <div className="details__buttons">
            <div className="details__btn-container">
              <button
                onClick={() => {
                  addToCart(id);
                  openModal(id);
                }}
                className={inCart ? "btn btn--red details__btn" : "btn details__btn"}
                disabled={inCart ? true : false}>
                {inCart ? 'In cart' : 'Add to cart'}
              </button>
            </div>
            <Link to="/products" className="details__link">
              <button className="btn">Back to Products</button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetails;