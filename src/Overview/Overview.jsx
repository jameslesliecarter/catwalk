import React from "react";
import ProductInfo from './components/ProductInfo.jsx';
import sampleData from '../../SampleData.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: sampleData.products
    }
  }

  render() {
    return (
     <div>
       <h4>Temp Place header for Overview</h4>
       <ProductInfo products={this.state.products}/>
    </div>
    )
  }
}

export default Overview;