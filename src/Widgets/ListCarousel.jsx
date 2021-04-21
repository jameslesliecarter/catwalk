import React from 'react';
import Card from '../Related/components/Card.jsx';
// import Arrow from './Arrow.jsx';
// import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri';
import Slider from './Slider.jsx';

class ListCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.arrowClick = this.arrowClick.bind(this);
  }

  arrowClick(e) {
    console.log(e.target)
  }

  render() {
    const offsetWidthValue = this.refs.offsetWidth,
    scrollWidthValue = this.refs.scrollWidth;

    return (
      <section className="carousel carousel-list parent">
        {/* <Arrow direction='left' arrowClick={this.arrowClick} glyph={<RiArrowLeftSLine />} /> */}
        <Slider>
          {this.props.images.map((image, index) => {
            return (
              <Card key={index} image={image.thumbnail_url} imgClick={this.props.imgClick}/>
            )
          })}
        </Slider>
        {/* <Arrow direction='right' arrowClick={this.arrowClick} glyph={<RiArrowRightSLine />} /> */}
      </section>
    )
  }
}

export default ListCarousel;