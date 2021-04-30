import React from 'react';
import Photos from './Photos.jsx';
import moment from 'moment';
import axios from 'axios';
import _ from 'underscore';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.answer.helpfulness,
      reported: false,
      updatedHelpfulness: false,
      updatedReport: false
    }
    this.updateHelpful = this.updateHelpful.bind(this);
    this.updateReport = this.updateReport.bind(this);
    this.byLine = this.props.answer.answerer_name === 'Seller' ? <b>Seller</b> : <span>{this.props.answer.answerer_name}</span>;
  }


  updateHelpful(e) {
    e.preventDefault();
    if(!this.state.updatedHelpful) {
      axios.put(`/api/qa/answers/${this.props.answer.answer_id}/helpful`)
      .catch((error) => {
        console.error('Helpful Button Click error: ', error);
      });
      this.setState({
        updatedHelpful :  true,
        helpfulness: this.state.helpfulness + 1
      });
    }
  }

  updateReport() {
    if (!this.state.updatedReport) {
      axios.put(`/api/qa/answers/${this.props.answer.answer_id}/report`)
      .catch((error) => {
        console.error('Answer Report Button Error: ', error);
      });
      this.setState({
        reported : true
      });
    }
  }

  reportView() {
    const {reported} = this.state;

    if (!reported) {
      return (
        <button onClick={this.updateReport} className="btn_">
          Report
        </button>
      )
    } else {
      return (
        <button className="btn_"><em>Reported</em></button>
      )
    }
  }

  render() {
    return (
      <div className="answer-area">
        <div className="answer-header">
          <div className="answer-text">
            {this.props.answer.body}
          </div>
          <div className="answer-interaction interaction">
            <div className="user-info">
              <span className="answer-name">by: {this.byLine}</span>, <span className="answer-date">{moment(this.props.answer.date).add(1, 'day').format('MMMM Do YYYY')}</span>
            </div>
            <button onClick={this.updateHelpful} className="btn_">
              Helpful? &#40;{this.state.helpfulness}&#41;
            </button>
            {this.reportView()}
          </div>
        </div>
      <div className="photo-details">
        <Photos photos={_.pluck(this.props.answer.photos, 'url')}/>
      </div>
    </div>
  )
  }
}

export default AnswerItem;