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
      count: 99,
      searchTerm: '',
      displayed: 2,
      product: ''
    };
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
    this.renderView = this.renderView.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.revealQuestions = this.revealQuestions.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }


  fetchQuestions() {
    axios.get(`/api/qa/questions/?product_id=${this.props.product.id}&page=1&count=${this.state.count}`)
    .then((data) => {
      this.setState({
        questions: _.sortBy(data.data.results, (question) => {
          return -question.question_helpfulness;
        }),
        productName: this.props.product.name,
        productId: this.props.product.id
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
        <div className="questions-and-answers-area">
          <div>
            <Search update={this.updateSearch} />
          </div>
          <div className="questions-and-answers">
            <QuestionList product={this.state.productName} count={this.state.displayed} term={this.state.searchTerm} questions={this.state.questions} />
          </div>
          {this.renderButton()}
        </div>
      );
    } else {
      return <div className="no-questions">No Questions Yet</div>;
    }
  }

  renderButton() {
    const {displayed, questions} = this.state;

    if (questions.length > displayed) {
      return (
        <div className="more-questions">
          <MoreQuestions revealQuestions={this.revealQuestions} />
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  updateSearch(term) {
    this.setState({
      searchTerm: term
    });
  }

  revealQuestions(){
    this.setState({
      displayed: this.state.displayed + 2
    });
  }

  postQuestion(name, email, body, product_id) {
    axios.post('/api/qa/questions', {
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

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      this.fetchQuestions();
    }
  }

  render() {
    return (
      <div className="q-and-a-widget">
       <h3>Questions &amp; Answers</h3>
        {this.renderView()}
        <div className="add-question">
          <AddQuestion fetch={this.fetchQuestions} productName={this.state.productName} productId={this.state.productId} />
        </div>
      </div>
    )
  }
}
export default QandA;