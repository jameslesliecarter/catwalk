import React from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <ReactModal
          className="modal__add-review"
          isOpen={this.state.show}
          onRequestClose={this.closeModal}
        >
          <h2>Write Your Review</h2>
          <h4>About the {this.props.name}</h4>
          <form onSubmit={this.handleSubmit}>
            <label>
              Overall Rating
            </label>
            <label>
              Do you Recommend this Product?
              <input type="radio" value="yes" required />
              <input type="radio" value="no" required />
            </label>
            <label>
              Characteristics
              <input type="radio" value="1" required />
              <input type="radio" value="2" required />
              <input type="radio" value="3" required />
              <input type="radio" value="4" required />
              <input type="radio" value="5" required />
            </label>
            <label>
              Review Summary
              <textarea
                placeholder="Example: Best purchase ever!"
                onChange={}
              />
            </label>
            <label>
              Review Body
              <textarea
                placeholder="Why did you like th product or not?"
                minLength="50"
                maxLength="1000"
                required
              />
            </label>
            <label>
              Upload Your Photo
              <input type="file" accept="image/png, image/jpeg" />
            </label>
            <label>
              What is your nickname?
              <textarea
                placeholder="Example: jackson11!"
                maxLength="60"
                required
              />
              For privacy reasons, do not use your full name or email address
            </label>
            <label>
              <textarea
                placeholder="Example: jackson11@email.com"
                maxLength="60"
                required
              />
            </label>
            <button type="submit" onClick={this.handleSubmit}>
              Submit Review
            </button>
          </form>
        </ReactModal>
      </div>
    );
  }
}