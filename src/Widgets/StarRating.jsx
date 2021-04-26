import React from 'react';
import ax from 'axios';
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avg: 0,
    };
  }

  componentDidMount() {
    ax.get(`/api/reviews/meta/avg/?product_id=${this.props.product_id}`)
      .then((res) => { this.setState({ avg: Number(res.data)}); })
      .catch((err) => {
        console.error('err in StarRating ax.get to /api/reviews/meta/avg');
        console.dir(err);
      });
  }

  render() {
    var jsxArr =[];
    for (var i = 1; i <= 5; i++) {
      if (i <= this.state.avg) {
        jsxArr.push(<FaStar className="stars" key={i} />);
      } else if (this.state.avg === (i - 0.5)) {
        jsxArr.push(<FaStarHalfAlt className="stars" key={(i-0.5)} />);
      } else {
        jsxArr.push(<FaRegStar className="stars" key={i} />);
      }
    }
    return(<div>{jsxArr}</div>);
  }
}

export default StarRating;