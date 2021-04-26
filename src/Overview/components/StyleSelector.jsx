import React from 'react';

const StyleSelector = ({styles}) => {

  return (
    <div className='style-select'>
      <div>
      <p className='style-head'>{styles ? styles[0].name : <></> }</p>
      </div>
      <div className="style-select-img">
        { styles ?
        <div>
          {styles.map((image, index) => {
            return (
              <div key={index} className='row-select'>
                <img src={image.photos[0].thumbnail_url} className='style-img'/>
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