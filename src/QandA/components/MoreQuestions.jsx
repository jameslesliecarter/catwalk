import React from 'react';

const MoreQuestions = ({revealQuestions}) => {
  return (
    <div onClick={revealQuestions} className="more-questions-btn">
      More Questions
    </div>
  )
};

export default MoreQuestions;