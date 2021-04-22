import React from 'react';
import Photos from './Photos.jsx'

const AnswerItem = ({answer}) => {

  return (
    <div className="answer-area">
      <div className="answer-header">
        <div className="answer-text">
          <span className="answer-icon">A: </span>{answer.body}
        </div>
        <div className="answer-interaction interaction">
        <div className="user-info">
          by: {answer.answerer_name}
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
        <Photos photos={answer.photos}/>
      </div>
    </div>
  )
}

export default AnswerItem;