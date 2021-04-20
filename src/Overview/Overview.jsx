import React from "react";
import ProductInfo from './components/ProductInfo.jsx';
import sampleData from '../../SampleData.js';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: sampleData.products,
    }
  }

  componentDidMount () {
    axios.get('/')
     .then((resData) => {
       this.setState({
          data: resData.data
         });
      });
    }

  render() {
    return (
     <div className='overview-widget'>
       <h4>Temp Place header for Overview</h4>

       <ProductInfo products={this.state.products}/>
    </div>
    )
  }
}

export default Overview;