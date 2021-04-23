import React from 'react';

const MoreQuestions = ({revealQuestions}) => {
  return (
    <div onClick={revealQuestions} className="more-questions-btn">
      More Questions Button Here
    </div>
  )
};

export default MoreQuestions;