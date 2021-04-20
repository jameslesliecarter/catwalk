import React from 'react';
import Card from '../Related/components/Card.jsx';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

class ListCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="carousel carousel-list">
        <FaArrowAltCircleLeft className="arrow-left" />
        {this.props.images.map((image, index) => {
          return (
            <Card image={image} key={index} images={images}/>
          )
        })}
        <FaArrowAltCircleRight />
      </section>
    )
  }
}

export default ListCarousel;