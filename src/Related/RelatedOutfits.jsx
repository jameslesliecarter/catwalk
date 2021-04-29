import React from 'react';
import RelatedProducts from './components/RelatedProducts.jsx';
import {Outfits} from './components/Outfits.jsx';

const RelatedOutfits = ({product, styles, cardClick}) => (
  <div className="related-outfits-container">
    <RelatedProducts product={product} styles={styles} cardClick={cardClick}/>
    <Outfits product={product} styles={styles} cardClick={cardClick}/>
  </div>
)


export default RelatedOutfits;