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
  date = new Date(Date.parse(date)).toLocaleString('en-US',{dateStyle:'long'});
  return (
    <div id={review_id}>
      <span className="list-item__star-rating">*****({rating})</span>
      <span className="list-item__reviewer-name">{reviewer_name}</span>
      <span className="list-item__date">{date}</span>
      <h4>{summary}</h4>
      <p>{body}</p>
      { (response) ?
        <div>
          <span><p><b>Response:</b></p></span>
          <span><p>{response}</p></span>
        </div>
        : null
      }
      <p>Helpful?</p>
      <a><u>Yes</u> | <u>Report</u></a>
      <hr />
    </div>
  );
};

export default ReviewListItem;