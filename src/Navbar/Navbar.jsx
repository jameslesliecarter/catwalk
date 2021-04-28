import React from 'react';
import Search from '../Widgets/Search.jsx';
import Icon from '../Widgets/Icon.jsx';

const Navbar = () => (
  <nav className="navbar">

      <Icon className='navbar-logo'/>

    <Search type='text' placeholder='Search'/>
  </nav>
)

export default Navbar;