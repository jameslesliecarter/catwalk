import React from 'react';
import AnswerItem from './AnswerItem.jsx';
import axios from 'axios';
import _ from 'underscore';



class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      answers: [],
      buttonText: 'See More Answers'
    }
    this.fetchAnswers = this.fetchAnswers.bind(this);
    this.toggleAnswers = this.toggleAnswers.bind(this);
    this.render = this.render.bind(this);
    this.renderMoreAnswersButton = this.renderMoreAnswersButton.bind(this);
  }

  fetchAnswers() {
    axios.get(`/api/qa/questions/${this.props.question.question_id}/answers/?count=99`)
    .then((data) => {
      this.setState({
        answers: data.data
      })
    })
    .catch((err) => {
      console.log('ANSWER FETCH ERROR: ', err);
    });
  }

  toggleAnswers() {
    if (this.state.count === 2) {
      this.setState({
        count: 99,
        buttonText: 'Collapse Answers'
      });
      this.render();
    } else {
      this.setState({
        count: 2,
        buttonText: 'See More Answers'
      });
    }
  }

  renderMoreAnswersButton() {
    if (this.state.answers.length && this.state.answers.length > 2) {
      return (
        <button onClick={this.toggleAnswers} className="btn_">
          {this.state.buttonText}
        </button>
      )
    } else {
      return (
        <></>
      )
    }
  }

  componentDidMount() {
    this.fetchAnswers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.answered !== this.props.answered) {
      this.fetchAnswers();
    }
    if (prevProps.question.question_id !== this.props.question.question_id) {
      this.fetchAnswers();
    }
  }

  render() {
    return (
      <div className="qa-main-item-a">
          {_.sortBy(_.sortBy(this.state.answers, (answer) => {
            return -answer.helpfulness;
          }), (answer) => {
            return answer.answerer_name !== 'Seller';
          })
          .map((answer, i) => {
            if (i < this.state.count) {
              return (
                <AnswerItem key={i} answer={answer} />
                )
            } else {
              return <></>
            }
          })}
        {this.renderMoreAnswersButton()}
      </div>
    )
  }
}

export default AnswerList;