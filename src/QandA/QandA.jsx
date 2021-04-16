import React from "react";
import QuestionList from './components/QuestionList.jsx';
import Search from './components/Search.jsx';
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
      <div>
        <div className="search-bar">
          <Search />
        </div>
        <div className="questions-and-answers">
          <QuestionList questions={this.state.questions} />
        </div>
        <div>
          <MoreQuestions />
        </div>
        <div>
          <AddQuestion />
        </div>
      </div>
    )
  }
}
export default QandA;