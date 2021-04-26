import React, { useState } from 'react';
import Slider from '../Widgets/Slider.jsx';
import Card from '../Widgets/Card.jsx';
import { ImCancelCircle } from 'react-icons/im';

export const Outfits = ({product, styles, cardClick}) => {
  const [outfits, setOutfits] = useState([]);

  const addOutfit = () => {
    setOutfits(outfits.concat([{details: product, images: styles.results[0].photos}]))
  }

  const removeOutfit = (index) => {
    outfits.splice(index, 1);
    setOutfits(outfits);
  }

  return (
  <div className="outfits">
    <h2 className="outfits-text">YOUR OUTFITS</h2>
    <div className="outfits-list carousel-list carousel-horizontal">
      <Slider>
        <Card addOutfit={addOutfit}/>
        {outfits.map((outfit,index) =>
          <Card details={outfit.details} images={outfit.images} key={index} index={index} cardClick={cardClick} btnClick={removeOutfit} glyph={<ImCancelCircle />} />
        )}
      </Slider>
    </div>
  </div>)
}