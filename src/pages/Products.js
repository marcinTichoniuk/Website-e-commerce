import React from 'react';
import Title from '../components/Title';
import ProductList from '../components/Products/ProductList';

const Products = () => {
  return (
    <section className="products">
      <Title title="Our products" />
      <ProductList />
    </section>
  );
}

export default Products;