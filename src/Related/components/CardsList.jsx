import React from 'react';
import Carousel from '../../Widgets/Carousel.jsx';
import {images} from '../../SampleImages.js';

const CardsList = () => {
  return (
    <div>
      <Carousel images={images}/>
    </div>
  )
}

export default CardsList;