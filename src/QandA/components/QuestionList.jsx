import React from 'react';
import Answer from './Answer.jsx';

const Questions = (props) => {
  return (
    <div>
      {props.questions.map((question) => {
        return (
        <div>
          <div className="question">
            <label>Question: </label>
            {question.question_body}
          </div>
          <div className="answer">
            <label>Asker: </label>
            <Answer />
          </div>
        </div>
      )})}
    </div>
  )
}
export default Questions