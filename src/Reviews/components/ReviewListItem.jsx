import React from 'react';
import ax from 'axios';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.helpfulReview = this.helpfulReview.bind(this);
  }

  helpfulReview(reviewID) {
    ax.put(`/api/reviews/${reviewID}/helpful`)
      .then((res) => { console.log('put helpful'); })
      .catch((err) => {
        console.dir(err);
        console.error('ax err: /api/:review_id/helpful');
      });
    //ax.get get the whole reviews arr again
  }

  reportReview(reviewID) {
    ax.put(`/api/reviews/${reviewID}/report`)
      .then((res) => { console.log('put report'); })
      .catch((err) => {
        console.dir(err);
        console.error('ax err: /api/:review_id/report');
      });
  }

  render() {
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
    } = this.props.review;
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
        <u onClick={() =>{this.helpfulReview(review_id)}}>Yes</u> ({helpfulness}) | <u>no or report?</u>
        <hr />
      </div>
    );
  }
};

export default ReviewListItem;