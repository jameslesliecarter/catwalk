import React from "react";
import axios from "axios";
import _ from 'underscore';
import Search from './components/Search.jsx';
import QuestionList from './components/QuestionList.jsx';
import MoreQuestions from './components/MoreQuestions.jsx';
import AddQuestion from './components/AddQuestion.jsx';


class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      product_id: '19093',
      count: 4,
      searchTerm: '',
      displayed: 4
    };
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
    this.renderView = this.renderView.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }


  fetchQuestions() {
    axios.get(`qa/questions/?product_id=${this.state.product_id}&page=1&count=${this.state.count}`)
    .then((data) => {
      this.setState({
        questions: _.sortBy(data.data.results, (question) => {
          return -question.question_helpfulness;
        })
      });
    })
    .catch((err) => {
      console.log('QA ERROR: ', err);
    });
  }

  renderView() {
    const {questions} = this.state;

    if (questions.length > 0) {
      return (
        <div>
          <div>
            <Search update={this.updateSearch} />
          </div>
          <div className="questions-and-answers">
            <QuestionList count={this.state.displayed} questions={this.state.questions} />
          </div>
          <div className="more-questions">
            <MoreQuestions />
          </div>
        </div>
      );
    } else {
      return <div className="no-questions">No Questions Yet</div>;
    }
  }

  updateSearch(term) {
    this.setState({
      searchTerm: term
    });
  }

  postQuestion(name, email, body, product_id) {
    axios.post('/qa/questions', {
      name: name,
      email: email,
      body: body,
      product_id: product_id
    })
    .then((response) => {
      console.log('hey it works')
    })
    .catch((response) => {
      console.log('Not so moovin, ', error);
    });
  }

  componentDidMount() {
    this.fetchQuestions();
  }
  render() {
    return (
      <div className="q-and-a-widget">
       <h3>Questions &amp; Answers</h3>
        {this.renderView()}
        <div className="add-question">
          <AddQuestion />
        </div>
      </div>
    )
  }
}
export default QandA;