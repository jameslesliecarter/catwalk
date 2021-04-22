import React, { useState } from 'react';
import GalleryCarousel from './GalleryCarousel.jsx';

const Card = ({details, images, cardClick}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="card">
      <div className="card-display" onMouseEnter={() => setIsHovering(!isHovering)} onMouseLeave={() => setIsHovering(!isHovering)}>
      {isHovering ? <GalleryCarousel className="card-images" images={images} size={'thumbnail_url'}/> :
      <img src={images[0].thumbnail_url}/>}

      </div>
      <div className="card-info">
        <p>{details.category}</p>
        <h3>{details.name}</h3>
        <p>{details.slogan}</p>
        <p>${details.default_price}</p>
      </div>
    </div>
  )
}

export default Card;