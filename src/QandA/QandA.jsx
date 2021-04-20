import React from "react";
import axios from "axios";
import QuestionList from './components/QuestionList.jsx';
import Search from './components/Search.jsx';
import MoreQuestions from './components/MoreQuestions.jsx';
import AddQuestion from './components/AddQuestion.jsx';
import Question from './components/Questions.jsx';
import sampleData from '../../SampleData.js';


class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: sampleData.sampleQuestions[0].results,
      product_id: ''
    }

    this.fetchQuestions = this.fetchQuestions.bind(this);
  }


  fetchQuestions() {
    axios.get('http://localhost:9000/qa/questions/?product_id=19089&page=1&count=5')
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log('QA ERROR: ', err);
    });
  }

  componentDidMount() {
    this.fetchQuestions();
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
        <Question questions={this.state.questions} />
      </div>
    )
  }
}
export default QandA;