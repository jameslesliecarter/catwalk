import React from 'react';
import BreakdownProduct from './BreakdownProduct';
import BreakdownRatings from './BreakdownRatings';

const Breakdown = (props) => {
  return (
    <div className="reviews__breakdown">
      <BreakdownRatings reviewStars={props.reviewStars} />
      <BreakdownProduct productChars={props.productChars} />
    </div>
  );
};

export default Breakdown;