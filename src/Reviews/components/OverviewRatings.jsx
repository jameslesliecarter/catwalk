import React from 'react';
import StarRating from '../../Widgets/StarRating.jsx'

const OverviewRatings = ({product, avgRating}) => {
  //let avgStars = (Math.round(avgRating * 4) / 4).toFixed(2);
  let avgStars = (Math.round(avgRating * 2) / 2).toFixed(1);
  if (avgRating === 0) { avgStars = 0 }
  return (
    <div className="ratings-breakdown__ratings-summary">
      <span className="ratings-summary__avg-rating">
        <b>{avgRating}</b> (avg rating)
      </span>
      <span className="ratings-sumary__star-rating">
        <StarRating product={product} /> ({avgStars} stars)
      </span>
    </div>
  );
};

export default OverviewRatings;