import React from 'react';

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
   <div
    className="slider-container"
    ref={el => {
     this.refs = el;
    }}
    >
    <div className={`slider-wrapper slider-wrapper-${this.props.direction}`}>{this.props.children}</div>
    <div
     className={`slider-prev ${this.state.prevDisable ? "slider-disable" : ""}`}
     disabled={this.state.prevDisable}
     onClick={() => {
      this.refs.scrollLeft -= offsetWidthValue / 2;
      this.checkButtons(offsetWidthValue, scrollWidthValue);
     }}
     >
     {"<"}
    </div>
    <div
     className={`slider-next ${this.state.nextDisable ? "slider-disable" : ""}`}
     disabled={this.state.nextDisable}
     onClick={() => {
      this.refs.scrollLeft += offsetWidthValue / 2;
      this.checkButtons(offsetWidthValue, scrollWidthValue);
     }}
     >
     {">"}
    </div>
   </div>
  );
 }
}

export default Slider;