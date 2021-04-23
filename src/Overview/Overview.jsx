import React from "react";
import ProductInfo from './components/ProductInfo.jsx';
import axios from 'axios';
import ImgGallery from './components/ImgGallery.jsx';
import StyleSelector from './components/StyleSelector.jsx';


class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

 render() {
    return (
     <div className='overview-widget'>
       <ImgGallery style={this.props.styles} />
       <ProductInfo product={this.props.product}/>
      <StyleSelector />
    </div>
    )
 }
}

export default Overview;

