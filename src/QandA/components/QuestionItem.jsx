import React from 'react';

const QuestionItem = (props) => {
  return (
    <div className="question-item">
      <div className="question-body">
        {props.question.question_body}
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