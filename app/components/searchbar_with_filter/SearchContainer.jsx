import React, { Component, PropTypes } from 'react';
import Search from './Search';
import 'whatwg-fetch';

export default class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch('./results.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ results: responseData });
      })
      .catch((error) => {
        console.log('Error fetching data and parsing data', error);
      });
  }

  render() {
    return (
      <Search results = { this.state.results } />
    );
  }
}
