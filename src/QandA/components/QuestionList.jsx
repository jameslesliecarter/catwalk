import React from 'react';
import QuestionItem from './QuestionItem.jsx';


const QuestionList = ({questions, count, term}) => {
  return (
    <div>
      {questions.filter((question) => question.question_body.indexOf(term) !== -1).map((question, i) => {
        if (i < count) {
          return (
            <div key={i} className="question-container container">
              <QuestionItem key={i} question={question}/>
            </div>
          )} else {
            return (
              <div key={i}></div>
            )
          }
      })}
    </div>
  );
};

export default QuestionList;