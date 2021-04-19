import React from "react";
import ax from 'axios';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reviews-ratings">
        <h3>RATINGS & REVIEWS</h3>
        <div className="reviews-ratings__ratings-breakdown">
        </div>
        <div className="reviews-ratings__product-breakdown">
        </div>
        <div className="reviews-ratings__review-list">
        </div>
      </div>
    );
  }
}

export default Review;