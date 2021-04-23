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
      overview: {
        avgRating: '',
        totReviews: '',
        recoPerc: '',
      },
      reviewStars: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
      },
      productChars: {},
    };
    this.changeSort = this.changeSort.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
  }

  componentDidMount() {
    let pID = `product_id=${this.state.productID}`;
    ax.get(`/reviews/?${pID}&sort=relevant&page=1&count=2`)
      .then((res) => {
        this.setState({ reviews: res.data.results });
      })
      .catch((err) => {
        console.dir(err);
        console.error('err in componentdidmount.ax.get /');
      });
    ax.get(`/reviews/meta/?${pID}`)
      .then((res) => {
        // ratings
        const {ratings} = res.data;
        let sum = 0;
        let tot = 0;
        let avg = 0;
        for (let key in ratings) {
          let val = Number(ratings[key]);
          sum += val;
          tot++;
        }
        avg = (sum / tot).toFixed(1).toString();
        sum = sum.toString();
        //console.log('compDidMnt axget avg, sum', avg, sum);
        // recommended %
        let recosTot = res.data.recommended.true + res.data.recommended.false;
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
        console.log(totalStars, star1perc, star2perc, star3perc, star4perc, star5perc)
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
        console.error('err in componentdidmount.ax.get /meta/avg');
      });
  }

  componentDidUpdate(prevProps, prevState) { // optional 3rd param - snapshot
    //if (this.state.productID !== prevState.productID) {
    //  let pID = `product_id=${this.state.productID}`;
    //  ax.get(`/reviews/?${pID}&sort=relevant&page=1&count=2`)
    //  .then((res) => {
    //    this.setState({
    //      reviews: this.state.reviews.concat(res.data.results)
    //    });
    //  })
    //  .catch((err) => {
    //    console.error('===============================');
    //    console.error('err in componentdidmount.ax.get');
    //    console.dir(err);
    //  });
    //}
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
    let pID = `product_id=${this.state.productID}`;

    ax.get(`/reviews/?${pID}&${page}&count=2`)
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
        <RatingsOverview
          className="reviews__breakdown"
          avgRating={this.state.avgRating}
        />
        <ReviewsOverview totalReviews={this.state.totReviews} />
        <Breakdown
         reviewStars={this.state.reviewStars}
         productChars={this.state.productChars}
        />
        <ReviewList
          className="reviews__review-list"
          reviews={this.state.reviews}
        />
      </div>
    );
  }
}

export default Reviews;