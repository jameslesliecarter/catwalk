import React from 'react';
import QuestionItem from './QuestionItem.jsx';
import Answer from './Answer.jsx';
import _ from 'underscore';

const QuestionList = (props) => {
  return (
    <div>
      {props.questions.map((question, i) => {
        return (
        <div key={i}>
          <div className="question-container container">
            <QuestionItem key={i} question={question}/>
          </div>
          <div className="answer-container container">
            {Object.keys(question.answers).map((k,j) => {
              return <Answer answer={j} key={k} />
            })}
          </div>
        </div>
      )})}
    </div>
  );
};
export default QuestionList;