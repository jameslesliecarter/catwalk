import React from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import Photos from './Photos.jsx';


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
      answered: 0,
      photoPreviews: []
    };
    this.updateHelpful = this.updateHelpful.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.updatePhotos = this.updatePhotos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  areInvalid(name, email, body) {
    var invalidResults = [];
    if (name === '') {
      invalidResults.push('Name');
    }
    if (!this.validateEmail(email)) {
      invalidResults.push('Email');
    }
    if (body === '') {
      invalidResults.push('Answer Text');
    }
    return invalidResults;
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

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  updateAnswer(e) {
    this.setState({
      answerBody: e.target.value
    });
  }

  updatePhotos(e) {
    let previews = [];
    for (var i = 0; i < e.target.files.length; i ++) {
      previews.push(URL.createObjectURL(e.target.files[i]));
    }
    this.setState({
      photoPreviews: this.state.photoPreviews.concat(previews),
    });
  }

  renderPhotos() {
    const {photoPreviews} = this.state;
    let shortenedPhotoList = [];
    for (var i = 0; i < 5; i ++ ) {
      if (photoPreviews[i]) {
        shortenedPhotoList.push(photoPreviews[i]);
      }
    }

    if (photoPreviews.length > 0) {
      return (
        <div>
          <Photos photos={shortenedPhotoList} />
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  renderPhotoInput() {
    const {photoPreviews} = this.state;

    if (photoPreviews.length < 5) {
      return (
        <div>
          <input
            type="file"
            accept="image/png, image/jpeg"
            ref="file"
            multiple={true}
            onChange={this.updatePhotos}
            ></input>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const {name, email, answerBody, photoPreviews} = this.state;
    let invalids = this.areInvalid(name, email, answerBody);
    if (invalids.length > 0) {
      let responseMessage = 'You must enter the following: ';
      for (var i = 0; i < invalids.length; i ++) {
        responseMessage += invalids[i] + ' ';
      }
      alert(responseMessage);
    } else {
      let data = new FormData();
      axios.post(`/api/qa/questions/${this.props.question.question_id}/answers`,
      {body: answerBody, name: name, email: email, photos: photoPreviews})
      .then((data) => {
        this.setState({
          answered: this.state.answered + 1
        })
        this.closeModal();
      })
      .catch((error) => {
        console.error('Question Post Error: ', error);
      });
    }
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
            <div onClick={this.updateHelpful} className="helpful-btn">
              Helpful? Yes &#40;{this.state.helpfulness}&#41;
            </div>
            <div onClick={this.openModal} className="add-answer-btn">Add Answer
            </div>
            <ReactModal onRequestClose={this.closeModal} className="add-answer-modal" isOpen={this.state.show} >
                <div className="add-answer-form">
                  <h3>Submit your Answer</h3>
                  <h4>{this.props.product}: {this.props.question.question_body}</h4>
                  <form>
                    <label>
                      Nickname:
                      <br></br>
                      <input
                      maxLength="60"
                      type="text"
                      placeholder="Example: jack543"
                      onChange={this.updateName}></input>
                      <br></br>
                    </label>
                    <p>For privacy reasons, do not use your full name or email address</p>
                    <label>
                      Email:
                      <br></br>
                      <input
                      maxLength="60"
                      type="email"
                      placeholder="jack@email.com"
                      onChange={this.updateEmail}></input>
                      <p>For authentications reasons, you will not be emailed.</p>
                    </label>
                    <br></br>
                    <label>
                      Answer:
                      <br></br>
                      <textarea
                      maxLength="1000"
                      placeholder="Answer"
                      onChange={this.updateAnswer}></textarea>
                    </label>
                    <br></br>
                    <label>
                      Add photos
                      <br></br>
                      {this.renderPhotos()}
                      {this.renderPhotoInput()}
                    </label>
                    <br></br>
                    <button
                    type="submit"
                    onClick={this.handleSubmit}>Submit Answer!</button>
                  </form>
                </div>
              </ReactModal>
          </div>
        </div>
        <AnswerList answered={this.state.answered} question={this.props.question} />
      </div>
    );
    }
};

export default QuestionItem;