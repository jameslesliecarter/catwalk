import React from "react";
import ListCarousel from '../Widgets/ListCarousel.jsx';
import axios from 'axios';
import {images} from '../SampleImages.js';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: []
    }
    // this.getRelatedProducts = this.getRelatedProducts.bind(this);
  }

  async componentDidUpdate(prevProps) {
    if (this.props.related !== prevProps.related) {
      let promises = [];
      console.log('props: ', this.props.related);

      this.props.related.forEach(id => {
        promises.push(axios.get(`http://localhost:9000/products/${id}`).then(response => response.data));
      });
      await Promise.all(promises)
      .then(results => this.setState({
        relatedProducts: results
      }));
    }
 }

  render() {
    return (
      <div className="related">
        <h2 className="related-text">RELATED PRODUCTS</h2>
        {/* <ListCarousel related={this.props.related}/> */}
      </div>
    );
  }
}

export default Related;