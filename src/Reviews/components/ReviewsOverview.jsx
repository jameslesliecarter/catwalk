import React from 'react';
import Dropdown from '../../Widgets/Dropdown.jsx'

const ReviewsOverview = (props) => {
  let totalReviews = props.totalReviews;
  let changeSort = props.changeSort;
  return (
    <div className="reviews-overview">
      {totalReviews} reviews, sorted by
      <Dropdown
        ddLabel="ddReviews"
        ddList={['relevant', 'newest', 'helpful']}
        ddVal="relevant"
        ddCB={changeSort}
      />
    </div>
  );
};

export default ReviewsOverview;