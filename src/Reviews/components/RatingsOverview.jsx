import React from 'react';

const RatingsOverview = (props) => {
  let avgRating = props.avgRating;
  let avgStars = (Math.round(avgRating * 4) / 4).toFixed(2);
  return (
    <div className="ratings-breakdown__ratings-summary">
      <span className="ratings-summary__avg-rating"><b>{avgRating}</b></span>
      <span className="ratings-sumary__star-rating">***** ({avgStars})</span>
    </div>
  );
};

export default RatingsOverview;