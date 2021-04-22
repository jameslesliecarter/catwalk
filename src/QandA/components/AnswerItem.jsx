import React from 'react';
import Photos from './Photos.jsx';
import moment from 'moment';

const AnswerItem = ({answer}) => {

  let byLine = answer.answerer_name === 'Seller' ? <b>Seller</b> : <span>{answer.answerer_name}</span>;

  return (
    <div className="answer-area">
      <div className="answer-header">
        <div className="answer-text">
          {answer.body}
        </div>
        <div className="answer-interaction interaction">
          <div className="user-info">
            <span className="answer-name">by: {byLine}</span>, <span className="answer-date">{moment(answer.date).format('MMMM do YYYY')}</span>
          </div>
          <div className="helpful-btn">
            Helpful btn
          </div>
          <div className="report-btn">
            Report btn
          </div>
        </div>
      </div>
      <div className="photo-details">
        <Photos photos={answer.photos}/>
      </div>
    </div>
  )
}

export default AnswerItem;