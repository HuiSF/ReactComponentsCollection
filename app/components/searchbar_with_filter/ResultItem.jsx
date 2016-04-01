import React, { Component, PropTypes } from 'react';

export default class ResultItem extends Component {
  render() {
    return (
      <li>
        <dl>
          <dt>{ this.props.title }</dt>
          <dl>{ this.props.content }</dl>
        </dl>
      </li>
    );
  }
}

ResultItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
