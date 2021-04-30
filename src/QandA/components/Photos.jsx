import React from 'react';

const Photos = (props) => {
  if (props.photos.length > 0) {
    return (
      <>
        {props.photos.map((photo, i) => {
          return (
            <img key={i} src={`${photo}`} />
            )
        })}
      </>
    )
  } else {
    return (
      <div className="no-photos">
      </div>
    )
  }
};

export default Photos;