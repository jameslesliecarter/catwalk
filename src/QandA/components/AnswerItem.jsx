import React from 'react';
import Photos from './Photos.jsx'

const AnswerItem = (props) => {

  return (
    <div className="answer-area">
      <div className="answer-header">
        <div className="answer-text">
          <span className="answer-icon">A: </span>{props.answer.body}
        </div>
        <div className="answer-interaction interaction">
        <div className="user-info">
          by: {props.answer.answerer_name}
        </div>
          <div className="helpful-btn btn">
            Helpful btn
          </div>
          <div className="report-btn btn">
            Report btn
          </div>
        </div>
      </div>
      <div className="photo-details">
        Photo details go here if they exist
        <Photos photos={[{image_url: 'https://source.unsplash.com/1600x900/?corgi'}, {image_url: 'https://source.unsplash.com/1600x900/?puppy'}, {image_url: 'https://source.unsplash.com/1600x900/?springtime'}, {image_url: 'https://source.unsplash.com/1600x900/?frisbee'}, {image_url: 'https://source.unsplash.com/1600x900/?corgi'}, {image_url: 'https://source.unsplash.com/1600x900/?autumn'}]}/>
      </div>
    </div>
  )
}

export default AnswerItem;