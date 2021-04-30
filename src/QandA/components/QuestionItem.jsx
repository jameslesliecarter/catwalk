import React from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import Photos from './Photos.jsx';
import AnswerForm from './AnswerForm.jsx';


class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.question.question_helpfulness,
      updatedHelpfulness: false,
      show: false,
      answered: 0
    };

    this.updateHelpful = this.updateHelpful.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.answered = this.answered.bind(this);
  }

  closeModal() {
    this.setState({
      show: false,
      photoPreviews: [],
      photoFiles: []
    });
  }

  openModal() {
    this.setState({
      show: true
    });
  }

  answered() {
    this.setState({
      answered: this.state.answered + 1
    });
  }

  updateHelpful() {
    if(!this.state.updatedHelpfulness) {
      axios.put(`/api/qa/questions/${this.props.question.question_id}/helpful`)
      .catch((error) => {
        console.error('Question not marked as helpful. Error: ', error);
      })
      this.setState({
        updatedHelpfulness: true,
        helpfulness: this.state.helpfulness + 1
      });
    }
  }

  componentDidMount() {
    ReactModal.setAppElement('body');
  }

  render() {
    return (
      <div className="question-and-answer-container">
        <div className="question-item">
          <div className="question-body">
            <span className="question-icon">Q: </span>{this.props.question.question_body}
          </div>
          <div className="question-interaction interaction">
            <button onClick={this.updateHelpful} className="btn_">
              Helpful? Yes &#40;{this.state.helpfulness}&#41;
            </button>
            <button onClick={this.openModal} className="btn_">Add Answer
            </button>
            <AnswerForm question={this.props.question} isOpen={this.state.show} closeModal={this.closeModal} answered={this.answered} />
          </div>
        </div>
        <AnswerList answered={this.state.answered} question={this.props.question} />
      </div>
    );
    }
};

export default QuestionItem;