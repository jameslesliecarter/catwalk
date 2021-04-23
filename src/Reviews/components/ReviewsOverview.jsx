import React from 'react';
import Dropdown from '../../Widgets/Dropdown.jsx'

const ReviewsOverview = (props) => {
  let totalReviews = props.totalReviews;
  return (
    <div className="reviews-overview">
      {totalReviews} reviews, sorted by
      <Dropdown
        ddLabel="ddReviews"
        ddList={['relevance', 'latest', 'helpfulness']}
        ddDefault="relevance"
      />
    </div>
  );
};

export default ReviewsOverview;