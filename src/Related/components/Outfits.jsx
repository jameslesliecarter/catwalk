import React, { useState, useEffect } from 'react';
import Slider from '../../Widgets/Slider.jsx';
import Card from '../../Widgets/Card.jsx';
import { ImCancelCircle } from 'react-icons/im';

export const Outfits = ({product, styles, cardClick}) => {
  const [outfits, setOutfits] = useState([]);

  const addOutfit = () => {
    setOutfits(outfits.concat([{details: product, images: styles.results[0].photos}]))
  }

  const removeOutfit = (index, event) => {
    event.stopPropagation();
    let newOutfits = [...outfits];
    newOutfits.splice(index, 1);
    setOutfits(newOutfits);
  }

  return (
  <div className="outfits">
    <div className="outfits-list carousel-list carousel-horizontal">
      <h2 className="outfits-text">YOUR OUTFITS</h2>
      <Slider direction={'horizontal'}>
        <Card addOutfit={addOutfit}/>
        {outfits.map((outfit,index) =>
          <Card details={outfit.details} images={outfit.images} key={index} index={index} cardClick={cardClick} btnClick={removeOutfit} glyph={<ImCancelCircle />} />
        )}
      </Slider>
    </div>
  </div>)
}