import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({type, placeholder, onChange, onClick}) => (
  <div className="search">
    <input className="search-input" placeholder={placeholder} type={type} onChange={onChange} />
    <button className="btn search-btn" onClick={onClick}>
      <FaSearch className="search-icon" />
    </button>
  </div>
)

export default Search;