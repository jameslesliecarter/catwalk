import React from 'react';
import Search from '../Widgets/Search.jsx';
import Icon from '../Widgets/Icon.jsx';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Icon />
    </div>
    <Search type='text' placeholder='Search'/>
  </nav>
)

export default Navbar;