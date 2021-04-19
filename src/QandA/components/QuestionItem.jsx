import React from 'react';

const QuestionItem = (props) => {
  return (
    <div className="question-item">
      <div className="question-body">
        Question Body Goes Here
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
  );
};

export default QuestionItem;