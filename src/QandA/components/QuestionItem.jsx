import React from 'react';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.question.question_helpfulness,
      updatedHelpfulness: false
    }
    this.updateHelpful = this.updateHelpful.bind(this);
  }

  updateHelpful() {
    if(!this.state.updatedHelpfulness) {
      axios.put(`/qa/questions/${this.props.question.question_id}/helpful`)
      .catch((error) => {
        console.error('Question not marked as helpful. Error: ', error);
      })
      this.setState({
        updatedHelpfulness: true,
        helpfulness: this.state.helpfulness + 1
      });
    }
  }

  render() {
    return (
      <div className="question-and-answer-container">
        <div className="question-item">
          <div className="question-body">
            <span className="question-icon">Q: </span>{this.props.question.question_body}
          </div>
          <div className="question-interaction interaction">
            <div onClick={this.updateHelpful} className="helpful-btn">
              Helpful? Yes &#40;{this.state.helpfulness}&#41;
            </div>
            <div className="add-answer-btn">
              Add Answer btn
            </div>
          </div>
        </div>
        <AnswerList question={this.props.question} />
      </div>
    );
    }
};

export default QuestionItem;