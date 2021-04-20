import React from 'react';
import GalleryCarousel from '../../Widgets/GalleryCarousel.jsx';

const Card = ({image, images}) => (
  <div className="card">
    <GalleryCarousel images={images}/>
    some text
    $999
  </div>
)

export default Card;