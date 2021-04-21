import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'val',
    };
    // method bindings
  }

  // methods

  render() {
    // js;
    // the following should be unique to the specific dropdown -
    // for=
    // name=
    // id= ddid = "dropdown-reviews"
    // default sort? for reviews: !relevant!
    return (
      // jsx
      <div>
        <label for="dropdown">{this.props.ddlabel}:</label>
        <select name="dropdown" id={ddid}>
          {this.props.ddlist.map((option, i) => {
            <option key={i} value={option}>{option}</option>
          })}
        </select>
      </div>
    );
  }
}

export default DropDown;