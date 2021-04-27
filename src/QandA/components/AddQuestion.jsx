import React from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import FormModal from './FormModal.jsx';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
      // questionBody: '',
      // name: '',
      // email: '',
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    // this.updateName = this.updateName.bind(this);
    // this.updateEmail = this.updateEmail.bind(this);
    // this.updateQuestion = this.updateQuestion.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.validateEmail = this.validateEmail.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
  }

  // validateEmail(email) {
  //   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  // }

  // areInvalid(name, email, body) {
  //   var invalidResults = [];
  //   if (name === '') {
  //     invalidResults.push('Name');
  //   }
  //   if (!this.validateEmail(email)) {
  //     invalidResults.push('Email');
  //   }
  //   if (body === '') {
  //     invalidResults.push('Answer Text');
  //   }
  //   return invalidResults;
  // }

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

  // updateName(e) {
  //   this.setState({
  //     name: e.target.value
  //   });
  // }

  // updateEmail(e) {
  //   this.setState({
  //     email: e.target.value
  //   });
  // }

  // updateQuestion(e) {
  //   this.setState({
  //     questionBody: e.target.value
  //   });
  // }

  renderQuestions() {
    this.props.fetch();
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const {name, email, questionBody} = this.state;
  //   let invalids = this.areInvalid(name, email, questionBody);
  //   if (invalids.length > 0) {
  //     let responseMessage = 'You must enter the following: ';
  //     for (var i = 0; i < invalids.length; i ++) {
  //       responseMessage += invalids[i] + ' ';
  //     }
  //     alert(responseMessage);
  //   } else {
  //     axios.post('/api/qa/questions/',
  //     {body: questionBody, name: name, email: email, product_id: this.props.productId})
  //     .then((data) => {
  //       this.renderQuestions();
  //       this.closeModal();
  //     })
  //     .catch((error) => {
  //       console.error('Question Post Error: ', error);
  //     });
  //   }
  // }

  render() {
    return (
      <div>
        <div onClick={this.openModal} className="add-question-btn">
          Add Question
        </div>
        <FormModal isOpen={this.state.show} closeModal={this.closeModal} open={this.openModal} fetch={this.props.fetch}/>
        {/* <ReactModal className="add-question-modal" isOpen={this.state.show} onRequestClose={this.closeModal}>
          <h2>Ask Your Question</h2>
          <h4>About the {this.props.productName}</h4>
          <form>
          <label>
              Your Question*:
              <br></br>
              <textarea maxLength="1000" placeholder="Your Question" onChange={this.updateQuestion}></textarea>
            </label>
            <br></br>
            <label>
              What is your nickname*:
              <br></br>
              <input maxLength="60" type="text" placeholder="Example: jackson11!" onChange={this.updateName}></input>
              <br></br>
            </label>
              <p>For privacy reasons, do not use your full name or email address</p>
            <label>
              Your email*:
              <br></br>
              <input maxLength="60" type="email" placeholder="jack@email.com" onChange={this.updateEmail}></input>
              <p>For authentications reasons, you will not be emailed.</p>
            </label>
            <br></br>
            <br></br>
            <button type="submit" onClick={this.handleSubmit}>Submit Question!</button>
          </form>
        </ReactModal> */}
      </div>
    )
  }
};
export default AddQuestion;