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
    console.log(this.props.style);
    return (
      <div className='img-gallery-wrap'>
        <div className="img-list carousel-list carousel-vertical">
          { this.props.style ?
          <Slider direction={'vertical'}>
            {this.props.style[0].photos.map((image, index) => {
              return (
                <div key={index} >
                  <img src={image.thumbnail_url} onClick={this.imgClick} className='thumbnail-gallery' />
                </div>
              )
            })}
          </Slider> : <></>
          }
        </div>
        <div className="gallery-img">
          {this.props.style ?
          <GalleryCarousel images={this.props.style[0].photos} />
          : <></>
          }
        </div>
      </div>
    )
  }
}

export default ImgGallery;


