import React from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: 0
    }

    // this.handleClick = this.handleClick.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  // handleClick(e) {
  //   var clickedClass = e.target.classList.value;
  //   if (clickedClass === 'arrow-left' && this.state.currentImg !== 0) {
  //     this.setState({currentImg: this.state.currentImg - 1});
  //   } else if (clickedClass === 'arrow-right' && this.state.currentImg < this.props.images.length - 1) {
  //     this.setState({currentImg: this.state.currentImg + 1});
  //   }
  // }

  prevSlide() {
    this.setState({currentImg: this.state.currentImg - 1});
  }

  nextSlide() {
    this.setState({currentImg: this.state.currentImg + 1});
  }

  render() {
    return (
      <section className="slider">
        {this.state.currentImg === 0 ? <></> : <FaArrowAltCircleLeft className="arrow-left" onClick={this.prevSlide} />}
        {this.props.images.map((image, index) => {
          return (
            <div className={index === this.state.currentImg ? 'slide active' : 'slide'} key={index}>
              {index === this.state.currentImg && (<img src={image.image} alt="travel" className="image" />)}
            </div>
          )
        })}
        {this.state.currentImg === this.props.images.length - 1? <></> : <FaArrowAltCircleRight className="arrow-right" onClick={this.nextSlide} />}
      </section>
    )
  }
}

export default Carousel;