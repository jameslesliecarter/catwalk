import React from 'react';

const ReviewListItem = (props) => {
  let {
    review_id,
    rating,
    summary,
    recommend,
    response,
    body,
    date,
    reviewer_name,
    helpfulness,
    photos
  } = props.review;
  //console.dir(photos);
  return (
    <div id={review_id}>
      <span className="list-item__star-rating">*****({rating})</span>
      <span className="list-item__reviewer-name">{reviewer_name}</span>
      <span className="list-item__date">{date}</span>
    </div>
  );
};

export default ReviewListItem;