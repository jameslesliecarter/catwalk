import React from 'react';

const MoreQuestions = ({revealQuestions}) => {
  return (
    <div onClick={revealQuestions} className="qa-more-btn">
      MORE ANSWERED QUESTIONS
    </div>
  )
};

export default MoreQuestions;