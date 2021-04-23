import React from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';


class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.question.question_helpfulness,
      updatedHelpfulness: false,
      show: false,
      name: '',
      email: '',
      answerBody: '',
    }
    this.updateHelpful = this.updateHelpful.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    this.setState({
      show: false
    });
  }

  openModal() {
    this.setState({
      show: true
    });
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  updateEmail(e) {
    console.log(Object.keys(e.target));
    this.setState({
      email: e.target.value
    });
  }

  updateAnswer(e) {
    this.setState({
      answer: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {this.closeModal();}, 500);
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

  componentWillMount() {
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
            <div onClick={this.updateHelpful} className="helpful-btn">
              Helpful? Yes &#40;{this.state.helpfulness}&#41;
            </div>
            <div onClick={this.openModal} className="add-answer-btn">Add Answer
            </div>
            <ReactModal onRequestClose={this.closeModal} className="add-answer-modal" isOpen={this.state.show} >
                <div className="add-answer-form">
                  <form>
                    <label>
                      Nickname:
                      <br></br>
                      <input type="text" placeholder="Nickname" onChange={this.updateName}></input>
                    </label>
                    <br></br>
                    <label>
                      Email:
                      <br></br>
                      <input type="email" placeholder="Email" onChange={this.updateEmail}></input>
                    </label>
                    <br></br>
                    <label>
                      Answer:
                      <br></br>
                      <textarea placeholder="Answer" onChange={this.updateAnswer}></textarea>
                    </label>
                    <br></br>
                    <button type="submit" onClick={this.handleSubmit}>Submit Answer!</button>
                  </form>
                </div>
              </ReactModal>
          </div>
        </div>
        <AnswerList question={this.props.question} />
      </div>
    );
    }
};

export default QuestionItem;