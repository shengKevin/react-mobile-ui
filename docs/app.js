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

const ReactMarkdown = (md) => {
  if (!md) return null;
  const mdTitle = md.match(/##\s\S*/g);
  const str = mdTitle[0] || '';
  const title = str.replace('##', '').trim();
  const source = `https://shengkevin.github.io/react-mui/example/index.html#/${title}`;
  const introduce = md.split('## code')[0];
  const api = md.match(/## API[\s\S]*/)[0];
  const code = md.replace(api, '').replace(introduce, '').replace('## code', '');
  return () => (
    <Layout routers={routers}>
      <div className="layout-header">
        <Markdown source={introduce} renderers={{code: CodeBlock}} />
        <p style={{ marginTop: 12}}>如有滚动效果，请用手机模式点击<a style={{color: '#1890ff'}} href={source}>这里</a></p>
      </div>
      <div className="layout-content">
        <div className="layout-mobile">
          <iframe 
            title={title} 
            src={source}
            style={{ width: 375, height: 667, border: '1px solid rgb(247,247,247)' }}
          />
        </div>
        <div className="layout-content-code"><Markdown source={code} renderers={{code: CodeBlock}} /></div>
      </div>
      <div className="layout-footer"><Markdown source={api} renderers={{code: CodeBlock}} /></div>
    </Layout>);
};

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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
