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
    let ddlabel = 'ddlabel';
    let ddlist = ['one', 'two', 'three'];
    return (
      // jsx

      <div>
        <label htmlFor="dropdown">{ddlabel}:</label>
        <select name="dropdown" id={ddlabel}>
          {ddlist.map((option, i) => {
            <option key={i} value={option}>{option}</option>
          })}
        </select>
      </div>
    );
  }
}

export default DropDown;