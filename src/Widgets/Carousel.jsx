import React from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var clickedClass = e.target.classList.value;
    if (clickedClass === 'arrow-left' && this.state.currentImg !== 0) {
      this.setState({currentImg: this.state.currentImg - 1});
    } else if (clickedClass === 'arrow-right' && this.state.currentImg !== this.props.images.length) {
      this.setState({currentImg: this.state.currentImg + 1});
    }
  }

  render() {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="arrow-left" onClick={this.handleClick} />
        {this.props.images.map((image, index) => <img src={image.image} alt="travel" />)}
        <FaArrowAltCircleRight className="arrow-right" onClick={this.handleClick} />
      </section>
    )
  }
}

export default Carousel;