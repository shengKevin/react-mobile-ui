import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FastClick from 'fastclick';
import 'babel-polyfill';
import '../build/dist/verdor';
// import { Button, Chexkbox } from '../build/dist/react-mui';
import { Button, Chexkbox, Accordion, Icon, Cell } from '../src/index';
// import { Button } from '../build/lib/Button'; 
// import '../build/dist/react-mui.css';
import './app.less';

window.addEventListener('load', () => {
  const body = document.body || document.documentElement;
  FastClick.attach(body);
});

const route = [
  { path: '', component: '' },
];

// const App = (props) => {
//   return (
//     <div className="app">
//       <Button>test</Button>
//       <Chexkbox name="1">test</Chexkbox>
//       <Chexkbox name="checkbox" value="one checkbox" checked={checked} />
//     </div>
//   );
// };

class App extends React.Component {
  state = {
    checked: false,
  };

  accordionChange = (activeKeys) => {
    console.log(activeKeys);
  }

  render() {
    const { checked } = this.state;
    return (
      <div className="app">
        <Button>test</Button>
        <Chexkbox name="1" disabled>test</Chexkbox>
        <Chexkbox name="checkbox" 
          value="one checkbox"
          checked={checked}
          onChange={(check) => { this.setState({checked: check}); }}
        />
        <Accordion defaultActiveKeys={['0']} onChange={this.accordionChange} style={{ paddingTop: 20}}>
          <Accordion.Panel header="Data Entry">
            <Cell cellafter style={{ textAlign: 'left' }}>text text text text text text text text text text text </Cell>
          </Accordion.Panel>
          <Accordion.Panel header="Layout">
            <Cell><Icon type="icon-like" /></Cell>
            <Cell><Icon type="icon-home" /></Cell>
            <Cell><Icon type="icon-skin" /></Cell>
          </Accordion.Panel>
          <Accordion.Panel header="Data Display">
            <Cell><Icon type="icon-like" /></Cell>
            <Cell><Icon type="icon-home" /></Cell>
            <Cell><Icon type="icon-skin" /></Cell>
          </Accordion.Panel>
          <Accordion.Panel header="Navigation">
            <Cell><Icon type="icon-like" /></Cell>
            <Cell><Icon type="icon-home" /></Cell>
            <Cell><Icon type="icon-skin" /></Cell>
          </Accordion.Panel>
          <Accordion.Panel header="Feedback">
            <Cell><Icon type="icon-like" /></Cell>
            <Cell><Icon type="icon-home" /></Cell>
            <Cell><Icon type="icon-skin" /></Cell>
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
