import React from 'react';
import Search from '../Widgets/Search.jsx';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="https://symplmarketing.com/wp-content/uploads/2019/02/sympl-2.png" alt="logo" className="logo"/>
      <Search type='text' placeholder='Search' onClick={() => console.log('hi')}/>
    </nav>
  )
}

export default Navbar;