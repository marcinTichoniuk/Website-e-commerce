import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context';

import Loading from '../Loading';
import ProductCard from './ProductCard';

const ProductList = () => {

  const value = useContext(StoreContext);
  const { products, loading } = value;

  const newProducts = products.map(product => (
    <ProductCard key={product.id} product={product} value={value} />
  ))

  if (loading) return <Loading />

  return (
    <div className="products__products">
      <ul className="products__list">
        {newProducts}
      </ul>
    </div>
  );
}

export default ProductList;