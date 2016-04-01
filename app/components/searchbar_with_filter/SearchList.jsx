import React, { Component, PropTypes } from 'react';
import ResultItem from './ResultItem';

export default class SearchList extends Component {
  render() {
    let filteredResults = this.props.results.filter(
      (result) => result.title.toLowerCase().indexOf(this.props.filterText) !== -1
    );
    return (
      <ul className='list-unstyled'>
        {
          filteredResults.map(
            (result) => <ResultItem key = { result.id }
                                    title = { result.title }
                                    content = { result.content } />
          )
        }
      </ul>
    );
  }
}

SearchList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
};
