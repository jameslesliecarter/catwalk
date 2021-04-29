import React from 'react';
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';


 const StarRating = ({product}) => {
  var jsxArr =[];
  for (var i = 1; i <= 5; i++) {
    if (i <= product.avgRating) {
      jsxArr.push(<FaStar className="stars" key={i} />);
    } else if (product.avgRating === (i - 0.5)) {
      jsxArr.push(<FaStarHalfAlt className="stars" key={(i-0.5)} />);
    } else {
      jsxArr.push(<FaRegStar className="stars" key={i} />);
    }
  }
  return(<div className="stars-container">{jsxArr}</div>);
};

export default StarRating;