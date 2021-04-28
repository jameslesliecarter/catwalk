import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

class ReviewList extends React.Component {
//const ReviewList = ({reviews, maxDisp, moreReviews}) => {
  constructor(props) {
    super(props);
    this.state = {
      maxDisp: 2,
    };
  }

  componentDidMount() { }

  componentDidUpdate() {
    //
  }

  render() {
    if (!this.props.reviews) { return(<></>); }
    else if (this.props.reviews.length === this.props.maxDisp) {
      return (
        <div>
          <div className="reviews__review-list">
            {this.props.reviews.map((review, i) => {
              if (i < this.props.maxDisp) {
                return(
                  <div key={i} className="review-list__list-item">
                    <ReviewListItem review={review} />
                  </div>
                );
                }
            })}
          </div>
          <div className="reviews_buttons">
            <button type="button" disabled>
              More Reviews
            </button>
            <button type="button">
              Add a Review +
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="reviews__review-list">
            {this.props.reviews.map((review, i) => {
              if (i < this.props.maxDisp) {
                return(
                  <div key={i} className="review-list__list-item">
                    <ReviewListItem review={review} />
                  </div>
                );
                }
            })}
          </div>
          <div className="reviews_buttons">
            <button type="button" onClick={this.props.moreReviews}>
              More Reviews
            </button>
            <button type="button">
              Add a Review +
            </button>
          </div>
        </div>
      );
    }
  }
};

export default ReviewList;