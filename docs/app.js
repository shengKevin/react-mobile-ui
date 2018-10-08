import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'babel-polyfill';
import './app.less';
import initialSource from './docs.md';

const Markdown = require('react-markdown');

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* react-mui docs
        <Markdown source={initialSource} /> */}
        敬请等待...
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
