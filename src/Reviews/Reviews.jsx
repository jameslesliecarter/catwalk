import React from "react";
import ax from "axios";
import OverviewRatings from './components/OverviewRatings.jsx';
import OverviewReviews from './components/OverviewReviews.jsx';
import Breakdown from './components/Breakdown.jsx';
import ReviewList from './components/ReviewList.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: '19093',
      sortOption: 'relevant',
      maxDisp: 2,
      reviews: [],
      overview: {},
      reviewStars: {},
      productChars: {},
    };
    this.changeSort = this.changeSort.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.updateReviews = this.updateReviews.bind(this);
  }

  componentDidMount() { this.updateReviews(); }

  componentDidUpdate(prevProps) {
      // optional 3rd param - snapshot
    if (prevProps.product.id !== this.props.product.id) {
      this.setState({
        productID: this.props.product.id,
        sortOption: 'relevant',
        maxDisp: 2,
      }, () => { this.updateReviews(); });
    }
  }

  async updateReviews() {
    let productID = this.state.productID || 'default'; //19093
    let sortOpt = this.state.sortOption || 'default'; //relevant
    let pID = `product_id=${productID}`;
    let sort = `sort=${sortOpt}`;
    const [firstRes, secondRes] = await Promise.all([
      ax.get(`/api/reviews/?${pID}&${sort}&count=42`),
      ax.get(`/api/reviews/meta/?${pID}`)
    ]);

    //firstRes
    this.setState({ reviews: firstRes.data.results });
    //secondRes
    if (!Object.keys(secondRes.data).length) {
      this.setState({
        overview: {},
        reviewStars: {},
        productChars: {},
      });
    } else {
      // total reviews
      const res = secondRes.data;
      let sum = 0;
      for (let key in res.ratings) {
        let val = (Number(key) * Number(res.ratings[key]));
        sum += val;
      }
      // recommended %
      let recosTot = Number(res.recommended.true);
      recosTot = recosTot + Number(res.recommended.false);
      let recoPerc = Math.round((res.recommended.true / recosTot) * 100);
      recoPerc = recoPerc.toString();
      // reviewStars
      let totalStars = 0;
      for (let star in res.ratings) {
        totalStars += Number(res.ratings[star]);
      }
      let star1perc = (Math.round((res.ratings['1']/totalStars)*100));
      star1perc = star1perc.toString();
      let star2perc = (Math.round((res.ratings['2']/totalStars)*100));
      star2perc = star2perc.toString();
      let star3perc = (Math.round((res.ratings['3']/totalStars)*100));
      star3perc = star3perc.toString();
      let star4perc = (Math.round((res.ratings['4']/totalStars)*100));
      star4perc = star4perc.toString();
      let star5perc = (Math.round((res.ratings['5']/totalStars)*100));
      star5perc = star5perc.toString();
      // productchars
      let productChars = {};
      if (res.characteristics.Fit) {
        productChars.Fit = res.characteristics.Fit.value;
      }
      if (res.characteristics.Comfort) {
        productChars.Comfort = res.characteristics.Comfort.value;
      }
      if (res.characteristics.Quality) {
        productChars.Quality = res.characteristics.Quality.value;
      }
      if (res.characteristics.Length) {
        productChars.Length = res.characteristics.Length.value;
      }
      if (res.characteristics.Width) {
        productChars.Width = res.characteristics.Width.value;
      }
      this.setState({
        overview: {
          'avgRating': this.props.product.avgRating,
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
      });
    }
  }

  changeSort(sortOption) {
    let pID = `product_id=${this.state.productID}`;
    console.log(pID)
    // is 42 max?
    ax.get(`/api/reviews/?${pID}&sort=${sortOption}&count=42`)
      .then((res) => {
        this.setState({
          'reviews': res.data.results,
          'sortOption': sortOption,
          'maxDisp': 2,
        });
      })
      .catch((err) => {
        console.dir(err);
        console.error('err in changeSort.ax.get /');
      });
  }

  moreReviews(e) {
    e.preventDefault();
    this.setState({ maxDisp: (this.state.maxDisp + 2) });
  }

  render() {
    if (this.props.product === undefined) { return (<></>); }
    else if (Object.keys(this.state.overview).length === 0) {
      return (
        <div>
          <button type="button">
            write the first review!
          </button>
        </div>
      );
    } else {
      return (
        <div className="reviews">
          <h3>RATINGS & REVIEWS</h3>
          <OverviewRatings
            className="reviews__breakdown"
            product={this.props.product}
            product_id={this.state.productID}
            avgRating={this.state.overview.avgRating}
          />
          <OverviewReviews
            totalReviews={this.state.overview.totReviews}
            changeSort={this.changeSort}
          />
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
}

export default Reviews;