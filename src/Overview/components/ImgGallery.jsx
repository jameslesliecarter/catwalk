import React from 'react';
import GalleryCarousel from '../../Widgets/GalleryCarousel.jsx';
import Slider from '../../Widgets/Slider.jsx';

class ImgGallery extends React.Component {
  constructor(props) {
    super(props);
    this.imgClick = this.imgClick.bind(this);
  }

  imgClick(e) {
    // update state current image selected
    console.log('we clicked!')
  }

  render() {
    return (
      <div>
        <div className="carousel-list carousel-vertical">
          <Slider>
            {this.props.styles.map((image, index) => {
              return (
                  <div key={index} className='thumbnail'>
                    <img src={image.thumbnail_url} onClick={this.imgClick} />
                  </div>
              )
            })}
          </Slider>
        </div>
        <GalleryCarousel images={this.props.styles} />
      </div>
    )
  }
}

export default ImgGallery;