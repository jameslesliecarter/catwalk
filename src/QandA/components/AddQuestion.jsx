import React from 'react';
import axios from 'axios';
import QuestionForm from './QuestionForm.jsx';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

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

  render() {
    return (
      <div>
        <div onClick={this.openModal} className="add-question-btn">
          Add Question
        </div>
        <QuestionForm productId={this.props.productId} isOpen={this.state.show} closeModal={this.closeModal} fetch={this.props.fetch}/>
      </div>
    )
  }
};
export default AddQuestion;