import React from "react";
import axios from 'axios';

class Related extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   detailsAllProducts:
    //   stylesAllProducts: (for gallery carousel)
    //   firstImageOfEachProduct: (for list carasoul)
    // }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.related !== prevProps.related) {
      // this.props.related.forEach(id => {
      //   axios
      //   .get(`http://localhost:9000/products/${id}`)
      //   .then(response => response.data)
      //   .then(details => {
      //     axios.get(`http://localhost:9000/products/${id}/styles`)
      //     .then(response => response.data)
      //     .then(styles => {
      //       details.style = styles.results;
      //       this.setState(prevState => ({
      //         relatedProducts: prevState.relatedProducts.concat([details])
      //       }))
      //     })
      //   })
      // });
    }
  }

  render() {
    return (
      <div className="related">
        <h2 className="related-text">RELATED PRODUCTS</h2>
      </div>
    );
  }
}

export default Related;