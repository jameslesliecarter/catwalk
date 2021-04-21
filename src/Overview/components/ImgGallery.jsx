import React from 'react';
import GalleryCarousel from '../../Widgets/GalleryCarousel.jsx';
import ListCarousel from '../../Widgets/ListCarousel.jsx';

class ImgGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // thumbnail: this.props.styles.photos[0].thumbnail_url,
      // desktop: this.props.styles.photos[0].url
    }
    this.imgClick = this.imgClick.bind(this);
  }

  imgClick(e) {
    // update state current image selected
    console.log('we clicked!')
  }

  render() {
    // console.log('this is the styles photos arr ',this.props.styles)
    return (
      <div>
        <ListCarousel images={this.props.styles} imgClick={this.imgClick} />
        <GalleryCarousel images={this.props.styles} />
      </div>
    )
  }
}

export default ImgGallery;