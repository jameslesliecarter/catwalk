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
      product: this.props.product,
      currentStyle: this.props.styles
    }
    this.handleStyleClick = this.handleStyleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      styles: this.props.styles,
      product: this.props.product,
      currentStyle: this.props.styles[0]
    })
  }

  componentDidUpdate (prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        styles: this.props.styles,
        product: this.props.product,
        currentStyle: this.props.styles[0]
      })
    }
  }

 handleStyleClick(id) {
   for (let i = 0; i < this.state.styles.length; i++) {
     if (id == this.state.styles[i].style_id) {
       this.setState({
         currentStyle: this.state.styles[i]
       })
       break;
     }
   }
 }

 render() {
    return (
     <div className='overview-widget'>
       <ImgGallery current={this.state.currentStyle}/>
       <ProductInfo product={this.state.product}/>
       <StyleSelector styles={this.state.styles} handleClick={this.handleStyleClick}/>
       <AddCart />
    </div>
    )
 }
}

export default Overview;

