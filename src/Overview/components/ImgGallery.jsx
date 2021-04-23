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
    console.log(this.props.style)
    return (
      <div>
        <div className="img-list carousel-list carousel-vertical">
          <Slider>
            {this.props.styles.map((image, index) => {
              return (
                  <div key={index} >
                    <img src={image.thumbnail_url} onClick={this.imgClick} className='thumbnail'/>
                  </div>
              )
            })}
          </Slider>
        </div>
        <div className="gallery-img">
          <GalleryCarousel images={this.props.styles} />
        </div>
      </div>
    )
  }
}

export default ImgGallery;