import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'babel-polyfill';
import Layout from './components/Layout';
import CodeBlock from './code-block';
import './app.css';
import {
  ButtonDocs,
  CellDocs,
  BlankDocs,
  ActionSheetDocs,
  CheckboxDocs,
  InputDocs,
  FlexDocs,
  ModalDocs,
  PickerDocs,
  SwitchDocs,
  RadioDocs,
  AccordionDocs,
  IconDocs,
} from '../src/md.js';

// const btnMark = require('../src/components/Button/index.md');

const ReactMarkdown = (md) => { return () => <Layout routers={routers}><Markdown source={md} renderers={{code: CodeBlock}} /></Layout>; };

const routers = [
  {path: '/start', component: ReactMarkdown(''), exact: true},
  {path: '/button', component: ReactMarkdown(ButtonDocs)},
  {path: '/cell', component: ReactMarkdown(CellDocs)},
  {path: '/blank', component: ReactMarkdown(BlankDocs)},
  {path: '/space', component: ReactMarkdown(BlankDocs)},
  {path: '/actionsheet', component: ReactMarkdown(ActionSheetDocs)},
  {path: '/checkbox', component: ReactMarkdown(CheckboxDocs)},
  {path: '/input', component: ReactMarkdown(InputDocs)},
  {path: '/flex', component: ReactMarkdown(FlexDocs)},
  {path: '/flexItem', component: ReactMarkdown(FlexDocs)},
  {path: '/modal', component: ReactMarkdown(ModalDocs)},
  {path: '/picker', component: ReactMarkdown(PickerDocs)},
  {path: '/cascadePicker', component: ReactMarkdown(PickerDocs)},
  {path: '/datePicker', component: ReactMarkdown(PickerDocs)},
  {path: '/switch', component: ReactMarkdown(SwitchDocs)},
  {path: '/radio', component: ReactMarkdown(RadioDocs)},
  {path: '/accordion', component: ReactMarkdown(AccordionDocs)},
  {path: '/icon', component: ReactMarkdown(IconDocs)},
];

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            {
              routers.map(({path, component, exact}) => (
                <Route key={path} path={path} component={component} exact={exact} />
              ))
            }
            <Redirect to="/start" />
          </Switch>
        </Router>
        {/* <iframe src="https://shengkevin.github.io/button"></iframe> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
