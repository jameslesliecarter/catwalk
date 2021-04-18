import React from "react";
import Question from './components/Questions.jsx';
import sampleData from '../../SampleData.js';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: sampleData.sampleQuestions[0].results
    }
  }

  render() {
    return (
      <div>
        <Question questions={this.state.questions} />
      </div>
    )
  }
}

export default QandA;