import React from 'react';
import axios from 'axios';
import AnswerForm from './FormModal.jsx';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.renderQuestions = this.renderQuestions.bind(this);
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

  renderQuestions() {
    this.props.fetch();
  }

  render() {
    return (
      <div>
        <div onClick={this.openModal} className="add-question-btn">
          Add Question
        </div>
        <AnswerForm productId={this.props.productId} isOpen={this.state.show} closeModal={this.closeModal} open={this.openModal} fetch={this.props.fetch}/>
      </div>
    )
  }
};
export default AddQuestion;