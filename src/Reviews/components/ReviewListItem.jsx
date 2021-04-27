import React from 'react';
import ax from 'axios';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.review.helpfulness,
      updatedHelpfulness: false,
      reported: false,
    };
    this.helpfulReview = this.helpfulReview.bind(this);
    this.reportReview = this.reportReview.bind(this);
  }

  helpfulReview(reviewID) {
    if (this.state.updatedHelpfulness) { return; }
    ax.put(`/api/reviews/${reviewID}/helpful`)
      .then((res) => { console.log('put helpful'); })
      .then((res) => {
        this.setState({
          updatedHelpfulness: true,
          helpfulness: (this.state.helpfulness + 1),
        });
      })
      .catch((err) => {
        console.dir(err);
        console.error('ax err: /api/:review_id/helpful');
      });
  }

  reportReview(reviewID) {
    if (this.state.reported) { return; }
    ax.put(`/api/reviews/${reviewID}/report`)
      .then((res) => { console.log('put report'); })
      .then((res) => { this.setState({ reported: true, }); })
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
    // add no or report after Helpful? Yes? ???
    return (
      <div id={review_id}>
        <span className="list-item__star-rating">
          ***** ({rating}) &nbsp;
        </span>
        <span className="list-item__reviewer-name">
          {reviewer_name} &nbsp;
        </span>
        <span className="list-item__date">
          {date} &nbsp;
        </span>
        <br />
        <h4>{summary}</h4>
        <p>{body}</p>
        { (response) ?
          <div>
            <span><p><b>Response:</b></p></span>
            <span><p>{response}</p></span>
          </div>
          : null
        }
        <br />
        <p>Helpful?</p>
        <u onClick={() => {this.helpfulReview(review_id)}}>
          Yes
        </u> ({this.state.helpfulness})
        &nbsp;|&nbsp;
        <u onClick={() => {this.reportReview(review_id)}}>
          Report
        </u>
        <hr />
      </div>
    );
  }
};

export default ReviewListItem;