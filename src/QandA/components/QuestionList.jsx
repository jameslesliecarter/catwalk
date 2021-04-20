import React from 'react';
import QuestionItem from './QuestionItem.jsx';
import Answer from './Answer.jsx';

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
              return <Answer answer={question.answers[k]} key={j} />
            })}
          </div>
        </div>
      )})}
    </div>
  );
};
export default QuestionList;