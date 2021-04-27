import React from 'react';
import GalleryCarousel from '../../Widgets/GalleryCarousel.jsx';
import Slider from '../../Widgets/Slider.jsx';

class ImgGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.current,
      currentImg: this.props.current
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.current !== this.props.current) {
      this.setState({
        currentStyle: this.props.current,
        currentImg: this.props.current.photos
      })
    }
  }


  render() {
    return (
      <div className='img-gallery-wrap'>
        <div className="img-list carousel-list carousel-vertical">
          { this.state.currentStyle ?
          <Slider direction={'vertical'}>
            {this.state.currentImg.map((image, index) => {
              return (
                <div key={index} >
                  <img src={image.thumbnail_url} className='thumbnail-gallery' />
                </div>
              )
            })}
          </Slider> : <></>
          }
        </div>
        <div className="gallery-img">
          {this.state.currentStyle ?
          <GalleryCarousel images={this.state.currentImg} />
          : <></>
          }
        </div>
      </div>
    )
  }
}

export default ImgGallery;


