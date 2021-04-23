import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = ({reviews}) => {
  //console.log(props.reviews)
  return (
    <div className="reviews__review-list">
      {reviews.map((review, i) => {
        return(
          <div key={i} className="review-list__list-item">
            <ReviewListItem review={review} />
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;