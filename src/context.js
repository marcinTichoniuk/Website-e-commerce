import React, { Component } from 'react';
import { storeProducts } from './data';

const StoreContext = React.createContext();

class StoreProvider extends Component {
  state = {
    products: [],
    cart: [],
    loading: true,
    modalOpen: false,
    modalProduct: {},
    subTotal: 0,
    delivery: 0,
    total: 0,
  }

  // set initial value
  componentDidMount() {
    const products = storeProducts;
    this.setState({
      products,
      loading: false,
    })
  }

  // add products to cart
  addToCart = id => {
    const newProducts = this.state.products.map(product => {
      if (product.id === id) {
        product.inCart = true;
        product.count = 1;
        product.totalCost = product.price;
      }
      return product;
    })

    const newCart = newProducts.filter(product => product.inCart);

    this.setState({
      products: newProducts,
      cart: newCart
    }, () => this.totals())
  }

  // open modal - need info about product and change state
  openModal = id => {
    const modalProduct = [...this.state.products].find(product => product.id === id);
    this.setState({
      modalOpen: true,
      modalProduct,
    })
  }

  closeModal = () => {
    this.setState({
      modalOpen: false,
    })
  }

  getProduct = name => {
    const product = [...this.state.products].find(product => product.name === name);
    return product;
  }

  // remove product from cart and change properties in original array (products)
  removeProduct = id => {
    const cart = this.state.cart.filter(product => product.id !== id);
    const products = this.state.products.map(product => {
      if (product.id === id) {
        product.inCart = false;
        product.count = 0;
        product.totalCost = 0;
      }
      return product;
    })

    this.setState({
      products,
      cart,
    }, () => this.totals())
  }

  increment = id => {
    const cart = this.state.cart.map(product => {
      if (product.id === id) {
        product.count = product.count + 1;
        product.totalCost = product.count * product.price;
      }
      return product;
    })

    this.setState({
      cart,
    }, () => this.totals())
  }

  decrement = id => {
    const cart = this.state.cart.map(product => {
      if (product.id === id) {
        product.count = product.count - 1;
        if (product.count < 1) product.count = 1;
        product.totalCost = product.count * product.price;
      }
      return product;
    })

    this.setState({
      cart,
    }, () => this.totals())
  }

  // check costs after changing cart array
  totals = () => {
    let subTotal = 0;
    let delivery;
    this.state.cart.map(product => subTotal += product.totalCost);
    if (subTotal > 200) delivery = 0;
    else delivery = 9.99;
    const tempTotal = delivery + subTotal;
    const total = parseFloat(tempTotal.toFixed(2));

    this.setState({
      subTotal,
      delivery,
      total,
    })
  }

  render() {
    return (
      <StoreContext.Provider value={{
        ...this.state,
        getProduct: this.getProduct,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        removeProduct: this.removeProduct,
        increment: this.increment,
        decrement: this.decrement,
      }}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

const StoreConsumer = StoreContext.Consumer;

export { StoreProvider, StoreConsumer, StoreContext };