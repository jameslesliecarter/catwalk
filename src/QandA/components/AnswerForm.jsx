import React from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import Photos from './Photos.jsx';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      answerBody: '',
      photoPreviews: []
    }
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.updatePhotos = this.updatePhotos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.close = this.close.bind(this);
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

  updateAnswers() {
    this.props.answered();
  }

  close() {
    this.props.closeModal();
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
        this.updateAnswers();
        this.close();
      })
      .catch((error) => {
        console.error('Question Post Error: ', error);
      });
    }
  }

  render() {
    return (
      <>
        <ReactModal onRequestClose={this.close} className="qa-modal" isOpen={this.props.isOpen} >
          <div className="qa-modal-form">
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
              onClick={this.handleSubmit}
              className="qa-modal-btn"
              >Submit Answer!</button>
            </form>
          </div>
        </ReactModal>
      </>
    )
  }
}

export default AnswerForm;