import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = ({reviews, maxDisp, moreReviews}) => {
  //console.log(props.reviews)
  //console.log('reviewlist reviews: ', reviews)
  //console.log('reviewlist maxdisp: ', maxDisp)
  reviews = reviews.slice(0, maxDisp);
  //console.log('reviewlist reviews after chop: ', reviews)
  return (
    <div>
      <div className="reviews__review-list">
        {reviews.map((review, i) => {
          return(
            <div key={i} className="review-list__list-item">
              <ReviewListItem review={review} />
            </div>
          );
        })}
      </div>
      <div className="reviews_buttons">
        <button type="button" onClick={moreReviews}>
          More Reviews
        </button>
        <button type="button">
          Add a Review +
        </button>
      </div>
    </div>
  );
};

export default ReviewList;