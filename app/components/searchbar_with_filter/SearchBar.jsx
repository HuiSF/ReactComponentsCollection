import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
  render() {
    return <input
              className = 'form-control'
              type = 'search'
              placeholder = 'enter keyword'
              value = { this.props.filterText }
              onChange = { this.handleChange } />;
  }

  handleChange = (event) => {
    this.props.onUserInput(event.target.value);
  };
}

SearchBar.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
};
