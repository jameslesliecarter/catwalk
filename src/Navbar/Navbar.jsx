import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="https://symplmarketing.com/wp-content/uploads/2019/02/sympl-2.png" alt="logo" className="logo"/>
      <div className="search">
        <input className="search-input" placeholder="Search products..." />
        <button className="btn search-btn"><FaSearch className="search-icon" /></button>
      </div>
    </nav>
  )
}

export default Navbar;