import React from 'react';
import QuestionItem from './QuestionItem.jsx';
import Answer from './Answer.jsx';
import _ from 'underscore';

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
            {_.map(props.question.answers, (answer) => {
              return (
              <Answer answer={answer} />
            )})}
          </div>
        </div>
      )})}
    </div>
  );
};
export default QuestionList;