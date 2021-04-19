import React from "react";
import Search from './components/Search.jsx';
import QuestionList from './components/QuestionList.jsx';
import MoreQuestions from './components/MoreQuestions.jsx';
import AddQuestion from './components/AddQuestion.jsx';

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
      <div className="q-and-a-widget">
        <div>
          <Search />
        </div>
        <div className="questions-and-answers">
          <QuestionList questions={this.state.questions} />
        </div>
        <div className="more-questions">
          <MoreQuestions />
        </div>
        <div className="add-question">
          <AddQuestion />
        </div>
      </div>
    )
  }
}
export default QandA;