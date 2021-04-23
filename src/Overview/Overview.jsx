import React from "react";
import ProductInfo from './components/ProductInfo.jsx';
import axios from 'axios';
import ImgGallery from './components/ImgGallery.jsx';
import StyleSelector from './components/StyleSelector.jsx';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: this.props.styles,
      product: this.props.product
    }
    this.handleListClick = this.handleListClick.bind(this);
  }

  componentDidUpdate (prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        styles: this.props.styles,
        product: this.props.product
      })
    }
  }

 handleListClick () {

 }

 render() {
    return (
     <div className='overview-widget'>
       <ImgGallery style={this.state.styles} />
       <ProductInfo product={this.state.product}/>
       <StyleSelector styles={this.state.styles}/>
    </div>
    )
 }
}

export default Overview;

