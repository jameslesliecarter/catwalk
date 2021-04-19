import React from 'react';
import QuestionItem from './QuestionItem.jsx';
import Answer from './Answer.jsx';

const QuestionList = (props) => {
  return (
    <div>
      {props.questions.map((question) => {
        return (
        <div>
          <div className="question-container container">
            <QuestionItem question={question}/>
          </div>
          <div className="answer-container container">
            <Answer  question={question}/>
          </div>
        </div>
      )})}
    </div>
  );
};
export default QuestionList;