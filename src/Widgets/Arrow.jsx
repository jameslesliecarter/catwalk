import React from 'react';

const Arrow = ({ direction, clickFunction, glyph }) => {
  console.log(glyph);
  return (
  <div
    className={ `slide-arrow ${direction}` }
    onClick={ clickFunction }>
    { glyph }
  </div>
  )
};

export default Arrow;