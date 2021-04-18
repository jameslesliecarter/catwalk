import React from 'react';

const Questions = (props) => {
  return (
    <div>
      {props.questions.map((question) => {
        return (
        <div>
          <div>
            <label>Question: </label>
            {question.question_body}
          </div>
          <div>
            <label>Asker: </label>
            {question.asker_name}
          </div>
        </div>
      )})}
    </div>
  )
}




export default Questions