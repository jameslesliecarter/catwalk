import React, { useState } from 'react';
import Slider from '../Widgets/Slider.jsx';
import Card from '../Widgets/Card.jsx';

export const Outfits = ({product, styles}) => {
  const [outfits, addOutfits] = useState([]);

  const addOutfit = () => {
    addOutfits(outfits.concat([{details: product, images: styles.results[0].photos}]))
  }

  return (
  <div className="outfits">
    <h2 className="outfits-text">YOUR OUTFITS</h2>
    <div className="outfits-list carousel-list carousel-horizontal">
      <Slider direction={'horizontal'}>
        <Card addOutfit={addOutfit}/>
        {outfits.map((outfit,index) =>
          <Card details={outfit.details} images={outfit.images} key={index}/>
        )}
      </Slider>
    </div>
  </div>)
}