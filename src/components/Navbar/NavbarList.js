import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';

import Burger from './Burger';
import DesktopNav from './DesktopNav';

const NavbarList = ({ handleToggle }) => {
  return (
    <>
      <li className="main-nav__item main-nav__item-burger">
        <Burger handleToggle={handleToggle} />
      </li>
      <li className="main-nav__item main-nav__item-desktop">
        <DesktopNav />
      </li>
      <li className="main-nav__item">
        <Link to="/" className="main-nav__link">
          <p className="main-nav__logo">Magic Store</p>
        </Link>
      </li>
      <li className="main-nav__item">
        <Link to="/cart" className="main-nav__link">
          <FaShoppingBasket className="main-nav__icon" />
        </Link>
      </li>
    </>
  );
}

export default NavbarList;