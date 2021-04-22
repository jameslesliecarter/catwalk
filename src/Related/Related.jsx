import React from "react";
import axios from 'axios';
import Slider from '../Widgets/Slider.jsx';
import Card from '../Widgets/Card.jsx';

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
        .get(`http://localhost:9000/products/${id}`)
        .then(response => response.data)
        .then(details => {
          axios.get(`http://localhost:9000/products/${id}/styles`)
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
      <div className="related">
        <h2 className="related-text">RELATED PRODUCTS</h2>
          <Slider>
          {this.state.products.map(product =>
            <Card details={product.details} images={product.images}/>
          )}
          </Slider>

      </div>
    );
  }
}

export default Related;