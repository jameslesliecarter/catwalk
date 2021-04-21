import React from "react";
import ax from "axios";
import Breakdown from './components/Breakdown.jsx';
import ReviewList from './components/ReviewList.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      reviewsList: [],
      sortOption: 'relevant',
    });
    const route = 'http://localhost:9000/reviews'
    //const route = `${host}/reviews`;
    const pid = 'product_id=19092';
  }

  componentDidMount() {
    ax.get(`${host}/reviews/?${pid}&sort=relevant&page=1&count=2`)
    .then((res) => {
      this.setState({
        reviewsList: this.state.reviewsList.concat(res.data.results)
      })
    })
    .catch((err) => {
      console.error('===============================');
      console.error('err in componentdidmount.ax.get');
      console.dir(err);
      console.error('err in componentdidmount.ax.get');
      console.error('===============================');
    });
  }

  changeSort(sortOption) {
    this.setState({
      sortOption: sortOption,
    });
  };

  moreReviews() {
    let sortOption = this.state.sortOption;
    let lastIndex = this.state.reviewsList.length;
    let page = `page=${lastIndex}`;

    ax.get(`${route}/?${pid}&${page}&count=2`)
    .then((data) => {
      this.setState({

      });
    })
    .catch((err) => {
      console.error('Reviews fetchReviews get err:');
      console.dir(err);
    });
  }

  render() {
    return (
      <div className="reviews">
        <h3>RATINGS & REVIEWS</h3>
        <Breakdown className="reviews__breakdown" />
        <ReviewList className="reviews__review-list" />
      </div>
    );
  }
}

export default Reviews;