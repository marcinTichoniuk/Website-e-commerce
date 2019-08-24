import React from 'react';
import { NavLink } from 'react-router-dom';


const MobileNav = ({ handleToggle, addClass }) => {
  return (
    <ul className={`main-nav__mobile-menu ${addClass}`}>
      <li className="main-nav__mobile-item">
        <NavLink onClick={handleToggle} exact to="/" className="main-nav__link main-nav__link--grey">Home</NavLink>
      </li>
      <li className="main-nav__mobile-item">
        <NavLink onClick={handleToggle} to="/products" className="main-nav__link main-nav__link--grey">Products</NavLink>
      </li>
    </ul>
  );
}

export default MobileNav;