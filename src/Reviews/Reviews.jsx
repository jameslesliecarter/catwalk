import React from "react";
import ax from "axios";
import RatingsOverview from './components/RatingsOverview.jsx';
import ReviewsOverview from './components/ReviewsOverview.jsx';
import Breakdown from './components/Breakdown.jsx';
import ReviewList from './components/ReviewList.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: '19092',
      reviews: [],
      sortOption: 'relevant',
      maxDisp: 2,
      overview: {},
      reviewStars: {},
      productChars: {},
    };
    this.changeSort = this.changeSort.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
  }

  componentDidMount() {
    let pID = `product_id=${this.state.productID}`;
    ax.get(`/reviews/?${pID}&sort=relevant&count=99`)
      .then((res) => {
        this.setState({ reviews: res.data.results });
      })
      .catch((err) => {
        console.dir(err);
        console.error('err in componentdidmount.ax.get /');
      });
    ax.get(`/reviews/meta/?${pID}`)
      .then((res) => {
        const {ratings} = res.data;
        let sum = 0;
        let tot = 0;
        let avg = 0;
        for (let key in ratings) {
          let val = (Number(key) * Number(ratings[key]));
          sum += val;
          tot += Number(ratings[key]);
        }
        avg = (sum / tot).toFixed(1).toString();
        sum = sum.toString();
        // recommended %
        let recosTot = Number(res.data.recommended.true)
        recosTot = recosTot + Number(res.data.recommended.false);
        let recoPerc = Math.round((res.data.recommended.true / recosTot) * 100);
        recoPerc = recoPerc.toString();
        // reviewStars
        let totalStars = 0;
        for (let star in res.data.ratings) {
          totalStars += Number(res.data.ratings[star]);
        }
        let star1perc = (Math.round((res.data.ratings['1']/totalStars)*100));
        star1perc = star1perc.toString();
        let star2perc = (Math.round((res.data.ratings['2']/totalStars)*100));
        star2perc = star2perc.toString();
        let star3perc = (Math.round((res.data.ratings['3']/totalStars)*100));
        star3perc = star3perc.toString();
        let star4perc = (Math.round((res.data.ratings['4']/totalStars)*100));
        star4perc = star4perc.toString();
        let star5perc = (Math.round((res.data.ratings['5']/totalStars)*100));
        star5perc = star5perc.toString();
        // productchars
        let productChars = {};
        if (res.data.characteristics.Fit) {
          productChars.Fit = res.data.characteristics.Fit.value;
        }
        if (res.data.characteristics.Comfort) {
          productChars.Comfort = res.data.characteristics.Comfort.value;
        }
        if (res.data.characteristics.Quality) {
          productChars.Quality = res.data.characteristics.Quality.value;
        }
        if (res.data.characteristics.Length) {
          productChars.Length = res.data.characteristics.Length.value;
        }
        if (res.data.characteristics.Width) {
          productChars.Width = res.data.characteristics.Width.value;
        }
        this.setState({
          overview: {
            'avgRating': avg,
            'totReviews': sum,
            'recoPerc': recoPerc,
          },
          reviewStars: {
            '1': star1perc,
            '2': star2perc,
            '3': star3perc,
            '4': star4perc,
            '5': star5perc,
          },
          'productChars': productChars,
        })
      })
      .catch((err) => {
        console.dir(err);
        console.error('err in componentdidmount.ax.get /meta');
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // optional 3rd param - snapshot
  }

  changeSort(sortOption) {
    this.setState({
      sortOption: sortOption,
    });
  };

  moreReviews(e) {
    e.preventDefault();
    this.setState({ maxDisp: (this.state.maxDisp + 2) });
  }

  render() {
    return (
      <div className="reviews">
        <h3>RATINGS & REVIEWS</h3>
        <RatingsOverview
          className="reviews__breakdown"
          avgRating={this.state.overview.avgRating}
        />
        <ReviewsOverview totalReviews={this.state.overview.totReviews} />
        <Breakdown
         reviewStars={this.state.reviewStars}
         productChars={this.state.productChars}
        />
        <ReviewList
          className="reviews__review-list"
          reviews={this.state.reviews}
          maxDisp={this.state.maxDisp}
          moreReviews={this.moreReviews}
        />
      </div>
    );
  }
}

export default Reviews;