import React from 'react';
import GalleryCarousel from '../../Widgets/GalleryCarousel.jsx';

const Card = ({details, images}) => {

  return (
    <div className="card">
      {/* <GalleryCarousel className="card-images" images={images}/> */}

      {details ?
      <div className="card-info">
      <p>{details.category}</p>
      <h3>{details.name}</h3>
      <p>{details.slogan}</p>
      <p>${details.default_price}</p>
    </div> :
    <></>}

    </div>
  )
}

export default Card;