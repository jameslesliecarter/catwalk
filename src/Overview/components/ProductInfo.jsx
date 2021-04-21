import React from 'react';
import StarRating from '/src/Widgets/StarRating.jsx'

const ProductInfo = ({product}) => {
  return (
    <div className='overview-widget-productInfo'>
      <div>
       <div><StarRating/> <p>See all reviews</p></div>
      </div>
      <p>{product.category}</p>
      <h4>{product.name}</h4>
      <p>{product.default_price}</p>
    </div>
  );
}

export default ProductInfo;