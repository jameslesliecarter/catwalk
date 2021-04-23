import React from 'react';
import Dropdown from '../../Widgets/Dropdown.jsx'

const ReviewsOverview = (props) => {
  let totalReviews = props.totalReviews;
  return (
    <div className="reviews-overview">
      {totalReviews} reviews, sorted by <Dropdown />
    </div>
  );
};

export default ReviewsOverview;