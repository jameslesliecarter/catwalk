import React from "react";
import ProductInfo from './components/ProductInfo.jsx';
import axios from 'axios';
import ImgGallery from './components/ImgGallery.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddCart from './components/AddCart.jsx';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: this.props.styles,
      product: this.props.product
    }
    this.handleStyleClick = this.handleStyleClick.bind(this);
  }

  componentDidUpdate (prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        styles: this.props.styles,
        product: this.props.product
      })
    }
  }

 handleStyleClick (name) {

 }

 render() {
    return (
     <div className='overview-widget'>
       <ImgGallery style={this.state.styles} />
       <ProductInfo product={this.state.product}/>
       <StyleSelector styles={this.state.styles} handleClick={this.handleStyleClick}/>
       <AddCart />
    </div>
    )
 }
}

export default Overview;

