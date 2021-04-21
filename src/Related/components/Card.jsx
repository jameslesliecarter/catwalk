import React from 'react';
import GalleryCarousel from '../../Widgets/GalleryCarousel.jsx';

const Card = ({details, image, imgClick}) => {

  return (
    <div className="card" onClick={imgClick}>
      {/* <GalleryCarousel className="card-images" images={images}/> */}
      <img src={image}/>

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