import React from 'react';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';

class Slider extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    prevDisable: true,
    nextDisable:
    this.refs && this.refs.offsetWidth >= this.refs.scrollWidth ? true : false
   };

   this.checkButtons = this.checkButtons.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.checkButtons(this.refs.offsetWidth, this.refs.scrollWidth);
    }
  }

  checkButtons(offsetWidthValue, scrollWidthValue) {
   this.setState({
    prevDisable: this.refs.scrollLeft <= 0 ? true : false,
    nextDisable:
    this.refs.scrollLeft + offsetWidthValue >= scrollWidthValue ? true : false
   });
  };

 render() {
  const offsetWidthValue = this.refs.offsetWidth,
        scrollWidthValue = this.refs.scrollWidth;
  return (
   <div className="slider-container" ref={ el => { this.refs = el }}>

    <div className={`slider-arrow slider-arrow-prev ${this.state.prevDisable ? "slider-arrow slider-arrow-disable" : ""}`} disabled={this.state.prevDisable} onClick={() => { this.refs.scrollLeft -= offsetWidthValue / 2; this.checkButtons(offsetWidthValue, scrollWidthValue);}}>
     {this.state.prevDisable ? null : <MdKeyboardArrowLeft />}
    </div>

    <div className={`slider-wrapper slider-wrapper-${this.props.direction}`}>{this.props.children}</div>

    <div className={`slider-arrow slider-arrow-next ${this.state.nextDisable ? "slider-arrow slider-arrow-disable" : ""}`} disabled={this.state.nextDisable} onClick={() => {this.refs.scrollLeft += offsetWidthValue / 2; this.checkButtons(offsetWidthValue, scrollWidthValue);}}>
    {this.state.nextDisable ? null : <MdKeyboardArrowRight />}
    </div>

   </div>
  );
 }
}

export default Slider;