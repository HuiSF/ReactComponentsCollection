import React, {Component, PropTypes} from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';

export default class Search extends Component {
  constructor() {
    super();
    this.state = { filterText: '' };
  }

  render() {
    return (
      <div>
        <SearchBar filterText = { this.state.filterText }
                   onUserInput= { this.handleUserInput }/>
        <br/>
        <SearchList results={ this.props.results }
                    filterText = { this.state.filterText }/>
      </div>
    );
  }

  handleUserInput = (searchTerm) => {
    this.setState({ filterText: searchTerm });
  };
}
Search.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
};
