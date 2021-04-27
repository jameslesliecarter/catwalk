import React from 'react';
import GalleryCarousel from '../../Widgets/GalleryCarousel.jsx';
import Slider from '../../Widgets/Slider.jsx';

class ImgGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.current,
      images: [],
      currentImg: 0
    }
    this.handleListClick = this.handleListClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.current !== this.props.current) {
      this.setState({
        currentStyle: this.props.current,
        images: this.props.current.photos,
      })
    }
  }

  handleListClick(e) {
    this.setState({
      currentImg: Number(e.target.id)
    })
  }

  // BUGGY CODE W/OUT ADJUSTING GALLERY
      // let index = e.target.id;
    // let arr = this.state.currentImg;
    // let newImg = arr.splice(index, 1);
    // let newState = newImg.concat(arr);
    // this.setState({
    //   currentImg: newState
    // })

  // retrieve index of clicked on img in list carousel
  // pass index to gallery carousel as prop
    // set state of curretn img in gallery carousel to index or 0

  render() {
    return (
      <div className='img-gallery-wrap'>
        <div className="img-list carousel-list carousel-vertical">
          { this.state.currentStyle ?
          <Slider direction={'vertical'}>
            {this.state.images.map((image, index) => {
              return (
                <div key={index} >
                  <img src={image.thumbnail_url} className='thumbnail-gallery'
                  id={index} onClick={this.handleListClick}/>
                </div>
              )
            })}
          </Slider> : <></>
          }
        </div>
        <div className="gallery-img">
          {this.state.currentStyle ?
          <GalleryCarousel images={this.state.images} currentImg={this.state.currentImg} handleClick={this.handleListClick}/>
          : <></>
          }
        </div>
      </div>
    )
  }
}

export default ImgGallery;


