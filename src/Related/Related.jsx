import React from "react";
import axios from 'axios';
import Slider from '../Widgets/Slider.jsx';
import Card from '../Widgets/Card.jsx';
import { Outfits } from './Outfits.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.related !== prevProps.related) {
      this.props.related.forEach(id => {
        axios
        .get(`/api/products/${id}`)
        .then(response => response.data)
        .then(details => {
          axios.get(`/api/products/${id}/styles`)
          .then(response => response.data)
          .then(styles => {
            details.styles = styles.results[0].photos;
            this.setState(prevState => ({
              products: prevState.products.concat([{
                details: details,
                images: styles.results[0].photos
              }])
            }))
          })
        })
      });
    }
  }

  render() {
    return (
      <div>
        <div className="related">
          <h2 className="related-text">RELATED PRODUCTS</h2>
          <div className="related-list carousel-list carousel-horizontal">
            <Slider direction={'horizontal'}>
            {this.state.products.map((product,index) =>
              <Card details={product.details} images={product.images} key={index} cardClick={this.props.cardClick}/>
            )}
            </Slider>
          </div>
        </div>
        <Outfits product={this.props.product} styles={this.props.styles} cardClick={this.props.cardClick} />
      </div>
    );
  }
}

export default Related;