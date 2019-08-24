import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNav = () => {
  return (
    <>
      <Link to="/" className="main-nav__link main-nav__link-desktop">
        <p className="main-nav__txt">Home</p>
      </Link>
      <Link to="/products" className="main-nav__link main-nav__link-desktop">
        <p className="main-nav__txt">Products</p>
      </Link>
    </>
  );
}

export default DesktopNav;