import React from 'react';
import AnswerItem from './AnswerItem.jsx';
import axios from 'axios';



class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question_id: this.props.question.question_id,
      count: 2,
      answers: []
    }
    this.fetchAnswers = this.fetchAnswers.bind(this);
  }

  fetchAnswers() {
    axios.get(`/qa/questions/${this.state.question_id}/answers/?count=${this.state.count}`)
    .then((data) => {
      this.setState({
        answers: data.data
      })
    })
    .catch((err) => {
      console.log('ANSWER FETCH ERROR: ', err);
    });
  }

  componentDidMount() {
    this.fetchAnswers();
  }

  render() {
    return (
      <div>
        {this.state.answers.map((answer, i) => {
          return (
            <AnswerItem key={i} answer={answer} />
          )
        })}
      </div>
    )
  }
}

export default AnswerList;