import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/searchbar_with_filter/Search.jsx';

let results = [
  {
    id: 1,
    title: 'Cassio Zen',
    content: 'cassiozen@gmail.com',
  }, {
    id: 2,
    title: 'Dan Abramov',
    content: 'gaearon@somewhere.com',
  }, {
    id: 3,
    title: 'Pete Hunt',
    content: 'floydophone@somewhere.com',
  }, {
    id: 4,
    title: 'Paul O’Shannessy',
    content: 'zpao@somewhere.com',
  }, {
    id: 5,
    title: 'Ryan Florence',
    content: 'rpflorence@somewhere.com',
  }, {
    title: 'Sebastian Markbage',
    content: 'sebmarkbage@here.com',
  },
];

ReactDOM.render(
  <Search results = { results } />,
  document.getElementById('search-component')
);
