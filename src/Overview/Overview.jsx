import React from "react";
import ProductInfo from './components/ProductInfo.jsx';
import sampleData from '../../SampleData.js';
import axios from 'axios';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:9000/products/19093')
     .then((resData) => {
       this.setState({
          product: resData.data
         });
      })
    }

  render() {
    console.log(this.state.product)
    return (
     <div className='overview-widget'>
       <ProductInfo product={this.state.product}/>
    </div>
    )
  }
}

export default Overview;