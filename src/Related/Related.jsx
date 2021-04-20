import React from "react";
import ListCarousel from '../Widgets/ListCarousel.jsx';
import {images} from '../SampleImages.js';

class Related extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="related">
        <h2 className="related-text">RELATED PRODUCTS</h2>
        {/* <ListCarousel images={images}/> */}
        <h2 className="outfit-text">YOUR OUTFIT</h2>
        {/* <ListCarousel images={images}/> */}
      </div>
    );
  }
}

export default Related;