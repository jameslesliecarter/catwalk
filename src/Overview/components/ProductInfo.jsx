import React from 'react';

const ProductInfo = ({products}) => {
  return (
    <div className='overview-widget-productInfo'>
      <div>Star Rating <href>See all reviews</href></div>
      <p>{products[0].category}</p>
      <h4>{products[0].name}</h4>
      <p>{products[0].default_price}</p>
    </div>
  );
}

export default ProductInfo;