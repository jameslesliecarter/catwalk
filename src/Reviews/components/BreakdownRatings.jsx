import React from 'react';

const BreakdownRatings = (props) => {
  //console.log('breakdownproduct avg: ', props.avgRating);
  return (
    <div className="breakdown__breakdown-ratings">
      <p>5 stars: {props.reviewStars['5']}%</p>
      <p>4 stars: {props.reviewStars['4']}%</p>
      <p>3 stars: {props.reviewStars['3']}%</p>
      <p>2 stars: {props.reviewStars['2']}%</p>
      <p>1 stars: {props.reviewStars['1']}%</p>
    </div>
  );
};

export default BreakdownRatings;