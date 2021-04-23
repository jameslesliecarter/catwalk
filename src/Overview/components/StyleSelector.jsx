import React from 'react';

const StyleSelector = ({styles}) => {

  return (
    <div className='style-select'>
      <h2>Style Selector</h2>
      <div className="style-select-img">
        { styles ?
        <div>
          {styles.map((image, index) => {
            return (
              <div key={index} >
                <img src={image.photos[0].thumbnail_url} className='thumbnail' />
              </div>
            )
          })}
        </div> : <></>
        }
      </div>
    </div>
  )
}

export default StyleSelector;