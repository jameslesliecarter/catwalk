import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '', // ddDefault
    };
    // method bindings
    this.handleChange = this.handleChange.bind(this);
  }

  // methods
  handleChange(e) { this.setState({val: e.target.value}); }

  handleSubmit(e) { e.preventDefault(); }

  render() {
    // js;
    // the following should be unique to the specific dropdown -
    // for=
    // name=
    // id= ddid = "dropdown-reviews"
    // default sort? for reviews: !relevant!
    let ddLabel = this.props.ddLabel;
    let ddList = this.props.ddList;
    let ddDefault = this.props.ddDefault;
    return (
      <div>
        <label htmlFor="dropdown">{ddLabel}:
          <select id={ddLabel} onChange={this.handleChange}>
            {ddList.map((option, i) => {
              //if (option === this.state.val) {
              if (option === ddDefault) {
                <option selected key={i} value={option}>{option}</option>
              } else {
                <option key={i} value={option}>{option}</option>
              }
            })}
          </select>
        </label>
      </div>
    );
  }
}

export default DropDown;