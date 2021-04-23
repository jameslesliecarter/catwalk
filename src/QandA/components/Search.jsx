import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    if (e.target.value.length >= 3) {
      this.props.update(e.target.value);
    } else {
      this.props.update('');
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={this.updateSearch} type="text" placeholder="Search Bar Goes Here"></input>
      </div>
    )
  }
}

export default Search;