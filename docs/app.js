import React from 'react';
import ReactDOM from 'react-dom';
import SplitPane from 'react-split-pane';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'babel-polyfill';
import './app.less';
import { Button, ActionSheet } from '../src';
import CodeBlock from './code-block';
import initialSource from './docs.md';


const Markdown = require('react-markdown');

class App extends React.Component {

  state = {
    ios_show: false,
    menus: [
      {
        label: 'Option 1',
        onClick: e=> this.setState({ios_show: false})
      }, 
      {
        label: 'Option 2',
        onClick: e=> this.setState({ios_show: false})
      }],
    actions: [
      {
        label: 'Cancel',
        onClick: this.hide
      }
    ],
    title: 'this is actionsheet title',
  };

  render() {
    return (
      <div className="app">
        <p>Welcome react-mui docs</p>
        {/* <Markdown
          source={initialSource}
          renderers={{code: CodeBlock}}
        /> */}
        <p>敬请等待...</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
