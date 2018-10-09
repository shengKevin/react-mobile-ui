import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import hljs from 'highlight.js';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'babel-polyfill';
import './app.less';
import { Button } from '../src';
import CodeBlock from './code-block';
import initialSource from './docs.md';


const Markdown = require('react-markdown');

class App extends React.Component {

  componentWillMount() {
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value,
    });
  }

  render() {
    return (
      <div className="app">
        <p>Welcome react-mui docs</p>
        {/* <section className="mobile-page">
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
          <Button>test</Button>
        </section> */}
        <Markdown
          source={initialSource}
          renderers={{code: CodeBlock}}
        />
        <p>敬请等待...</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
