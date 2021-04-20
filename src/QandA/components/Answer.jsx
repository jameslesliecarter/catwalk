import React from 'react';
import Photos from './Photos.jsx'

const Answer = (props) => {

  return (
    <div className="answer-area">
      <div className="answer-header">
        <div className="answer-text">
          Answer text goes here this is from props
        </div>
        <div className="answer-interaction interaction">
          <div className="helpful-btn btn">
            Helpful btn
          </div>
          <div className="report-btn btn">
            Report btn
          </div>
        </div>
      </div>
      <div className="user-info">
        User information
      </div>
      <div className="photo-details">
        Photo details go here if they exist
        <Photos photos={[{image_url: 'https://www.innovadiscs.com/wp-content/uploads/2015/06/course-target-featured.jpg'}, {image_url: 'https://www.innovadiscs.com/wp-content/uploads/2015/06/course-target-featured.jpg'}, {image_url: 'https://www.innovadiscs.com/wp-content/uploads/2015/06/course-target-featured.jpg'}, {image_url: 'https://www.innovadiscs.com/wp-content/uploads/2015/06/course-target-featured.jpg'}, {image_url: 'https://www.innovadiscs.com/wp-content/uploads/2015/06/course-target-featured.jpg'}, {image_url: 'https://www.innovadiscs.com/wp-content/uploads/2015/06/course-target-featured.jpg'}]}/>
      </div>
    </div>
  )
}

export default Answer;