import React from 'react';
import Search from '../../Widgets/Search.jsx';

class SearchResults extends React.Component {
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
      <>
        <Search onChange={this.updateSearch} placeholder='Have a question? Search for answers...' onClick={this.updateSearch} type='text' className='questions-and-answers-area' />
      </>
    )
  }
}

export default SearchResults;