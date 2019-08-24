import React, { Component } from 'react';

import NavbarList from './NavbarList';
import MobileNav from './MobileNav';


class Navbar extends Component {
  state = {
    isOpen: false,
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className="navbar">
        <nav className="main-nav">
          <ul className="main-nav__menu">
            <NavbarList handleToggle={this.handleToggle} />
          </ul>
        </nav>
        <MobileNav handleToggle={this.handleToggle} addClass={isOpen ? ' show' : ''} />
      </div>
    );
  }
}

export default Navbar;