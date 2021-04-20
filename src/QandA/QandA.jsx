import React from "react";
import axios from "axios";
import Search from './components/Search.jsx';
import QuestionList from './components/QuestionList.jsx';
import MoreQuestions from './components/MoreQuestions.jsx';
import AddQuestion from './components/AddQuestion.jsx';

import sampleData from '../../SampleData.js';


class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      product_id: ''
    }
    this.fetchQuestions = this.fetchQuestions.bind(this);
  }


  fetchQuestions() {
    axios.get('http://localhost:9000/qa/questions/?product_id=19089&page=1&count=5')
    .then((data) => {
      this.setState({
        questions: data.data.results
      });
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