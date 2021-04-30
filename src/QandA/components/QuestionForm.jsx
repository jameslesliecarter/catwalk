import React from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBody: '',
      name: '',
      email: ''
    }

    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.close = this.close.bind(this);
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

  updateQuestion(e) {
    this.setState({
      questionBody: e.target.value
    });
  }

  renderQuestions() {
    this.props.fetch();
  }

  close() {
    this.props.closeModal();
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


  handleSubmit(e) {
    e.preventDefault();
    const {name, email, questionBody} = this.state;
    let invalids = this.areInvalid(name, email, questionBody);
    if (invalids.length > 0) {
      let responseMessage = 'You must enter the following: ';
      for (var i = 0; i < invalids.length; i ++) {
        responseMessage += invalids[i] + ' ';
      }
      alert(responseMessage);
    } else {
      axios.post('/api/qa/questions/',
      {body: questionBody, name: name, email: email, product_id: this.props.productId})
      .then((data) => {
        this.renderQuestions();
        this.close();
      })
      .catch((error) => {
        console.error('Question Post Error: ', error);
      });
    }
  }


  render() {
    return (
      <div>
        <ReactModal className="qa-modal" isOpen={this.props.isOpen} onRequestClose={this.close}>
            <h2>Ask Your Question</h2>
            <h4>About the {this.props.productName}</h4>
            <form className="qa-modal-form">
            <label for="qa-modal-body">
                Your Question*:
                <br></br>
                <textarea className="qa-modal-body" maxLength="1000" placeholder="Your Question" onChange={this.updateQuestion}></textarea>
              </label>
              <br></br>
              <label for="qa-modal-nickname">
                What is your nickname*:
                <br></br>
                <input className="qa-modal-nickname" maxLength="60" type="text" placeholder="Example: jackson11!" onChange={this.updateName}></input>
                <br></br>
              </label>
                <p>For privacy reasons, do not use your full name or email address</p>
              <label for="qa-modal-email">
                Your email*:
                <br></br>
                <input className="qa-modal-email" maxLength="60" type="email" placeholder="jack@email.com" onChange={this.updateEmail}></input>
                <p>For authentications reasons, you will not be emailed.</p>
              </label>
              <br></br>
              <br></br>
              <button className="qa-modal-btn" type="submit" onClick={this.handleSubmit}>Submit Question!</button>
            </form>
          </ReactModal>
        </div>
    )
  }
}

export default QuestionForm;