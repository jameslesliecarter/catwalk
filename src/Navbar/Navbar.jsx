import React from 'react';
import Search from '../Widgets/Search.jsx';
import Icon from '../Widgets/Icon.jsx';
import Company from '../Widgets/Company.jsx';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-main">
      <Icon className='navbar-main-logo' />
      <Company className='navbar-main-name' />
      <Search type='text' placeholder='Search' className="navbar-main"/>
    </div>
  </nav>
)

export default Navbar;