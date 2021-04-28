import React from 'react';
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';


 const StarRating = (props) => {
  var jsxArr =[];
  for (var i = 1; i <= 5; i++) {
    if (i <= props.product.avgRating) {
      jsxArr.push(<FaStar className="stars" key={i} />);
    } else if (props.product.avgRating === (i - 0.5)) {
      jsxArr.push(<FaStarHalfAlt className="stars" key={(i-0.5)} />);
    } else {
      jsxArr.push(<FaRegStar className="stars" key={i} />);
    }
  }
  return(<div>{jsxArr}</div>);
};

export default StarRating;