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
      <p>{product.overview ? product.overview : <></>}</p>
      <form>SOCIAL MEDIA BAR
      <a href="#" className="fa fa-facebook"></a>
      <a href="#" className="fa fa-twitter"></a>
      <a href="#" className="fa fa-pintrest"></a>
      </form>
    </div>
  );
}

export default ProductInfo;