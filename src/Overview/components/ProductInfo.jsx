import React from 'react';
import StarRating from '/src/Widgets/StarRating.jsx'

const ProductInfo = ({products}) => {
  return (
    <div className='overview-widget-productInfo'>
      <div>
       <div><StarRating/> <p>See all reviews</p></div>
      </div>
      <p>{products[0].category}</p>
      <h4>{products[0].name}</h4>
      <p>{products[0].default_price}</p>
    </div>
  );
}

export default ProductInfo;