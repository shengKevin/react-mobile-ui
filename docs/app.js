import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'babel-polyfill';
import lib from '../src/index';
import { Menu } from './components/Menu';
import CodeBlock from './code-block';
import './app.less';
import { CellBody } from '../src/components/Cell';
const btnMark = require('../src/components/Button/index.md');
const { Cell } = lib;

// const routers = [
//   { path: '/Accordion', component: Accordion },
//   { path: '/button', component: Button },
//   { path: '/button', component: Button },
//   { path: '/button', component: Button },
//   { path: '/button', component: Button },
//   { path: '/button', component: Button },
//   { path: '/button', component: Button },
//   { path: '/button', component: Button },
//   { path: '/button', component: Button },
//   { path: '/button', component: Button },
//   { path: '/button', component: Button },
// ];

class App extends React.Component {

  handleMenuChange = (key) => {
    console.log(key);
  }

  render() {
    return (
      <div className="app">
        <Cell style={{background: '#FF5A10', color: '#fff'}}><CellBody>react-mui docs</CellBody></Cell>
        <Menu onClick={this.handleMenuChange} style={{background: '#f5f5f5'}}>
          <Menu.Item key="1">选项一</Menu.Item>
          <Menu.Item key="2">选项二</Menu.Item>
          <Menu.Item key="3">选项三</Menu.Item>
          <Menu.Item key="4">选项四</Menu.Item>
          <Menu.Item key="5">选项五</Menu.Item>
          <Menu.Item key="6">选项六</Menu.Item>
        </Menu>
        {/* <div>
          <Markdown
            source={btnMark}
            renderers={{code: CodeBlock}}
          />
        </div> */}
        {/* <iframe src="https://shengkevin.github.io/react-mui/index.html"></iframe> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
