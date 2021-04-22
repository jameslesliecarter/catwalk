import React from 'react';
import AnswerList from './AnswerList.jsx';

const QuestionItem = ({question}) => {
  return (
    <div className="question-and-answer-container">
      <div className="question-item">
        <div className="question-body">
          <span className="question-icon">Q: </span>{question.  question_body}
        </div>
        <div className="question-interaction interaction">
          <div className="helpful-btn btn">
            Helpful btn
          </div>
          <div className="add-answer-btn btn">
            Add Answer btn
          </div>
        </div>
      </div>
      <AnswerList question={question} />
    </div>
  );
};

export default QuestionItem;