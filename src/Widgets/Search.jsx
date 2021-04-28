import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({type, placeholder, onChange, onClick, className}) => (
  <div className={"search " + className + "-search"}>
    <input className={"search-input " + className + "-search-input"} placeholder={placeholder} type={type} onChange={onChange} />
    <button className={"search-btn " + className + "-search-btn"} onClick={onClick}>
      <FaSearch className={"search-icon " + className + "-search-btn-icon"} />
    </button>
  </div>
)

export default Search;