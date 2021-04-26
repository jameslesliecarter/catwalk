import React from 'react';
import StarRating from '../../Widgets/StarRating.jsx'

const OverviewRatings = (props) => {
  let avgRating = props.avgRating;
  //let avgStars = (Math.round(avgRating * 4) / 4).toFixed(2);
  let avgStars = (Math.round(avgRating * 2) / 2).toFixed(1);
  return (
    <div className="ratings-breakdown__ratings-summary">
      <span className="ratings-summary__avg-rating">
        <b>{avgRating}</b> (avg rating)
      </span>
      <span className="ratings-sumary__star-rating">
        <StarRating product_id={props.product_id} /> ({avgStars} stars)
      </span>
    </div>
  );
};

export default OverviewRatings;