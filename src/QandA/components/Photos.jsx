import React from 'react';

const Photos = (props) => {
  if (props.photos.length > 0) {
    return (
      <div className="photo-list">
        {props.photos.map((photo, i) => {
          return (
            <img key={i} src={`${photo}`} />
            )
        })}
      </div>
    )
  } else {
    return (
      <div className="no-photos">
      </div>
    )
  }
};

export default Photos;