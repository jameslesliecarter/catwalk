import React from 'react';
import QuestionItem from './QuestionItem.jsx';


const QuestionList = ({questions}) => {
  return (
    <div>
      {questions.map((question, i) => {
        return (
          <div key={i} className="question-container container">
            <QuestionItem key={i} question={question}/>
          </div>
      )})}
    </div>
  );
};

export default QuestionList;