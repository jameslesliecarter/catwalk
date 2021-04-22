import React from 'react';

const Arrow = ({ direction, arrowClick, glyph }) => {
  return (
  <div
    className={ `slide-arrow ${direction}` }
    onClick={ arrowClick }>
    { glyph }
  </div>
  )
};

export default Arrow;