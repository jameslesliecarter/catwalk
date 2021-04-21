import React from "react";
import ListCarousel from '../Widgets/ListCarousel.jsx';
import axios from 'axios';
import Arrow from '../Widgets/Arrow.jsx';
import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidUpdate(prevProps) {
    if (this.props.related !== prevProps.related) {
      let promises = [];

      this.props.related.forEach(id => {
        promises.push(axios.get(`http://localhost:9000/products/${id}`).then(response => response.data));
      });

      await Promise.all(promises)
      .then(results => this.setState({
        relatedProducts: results
      }));
    }
  }

  handleClick(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="related">
        <h2 className="related-text">RELATED PRODUCTS</h2>
        {/* <RiArrowRightSLine />
        <RiArrowLeftSLine /> */}
        <Arrow direction='left' handleClick={this.handleClick} glyph={<RiArrowLeftSLine />} />
        <ListCarousel related={this.state.relatedProducts} />
        <Arrow direction='right' handleClick={this.handleClick} glyph={<RiArrowRightSLine />} />
      </div>
    );
  }
}

export default Related;