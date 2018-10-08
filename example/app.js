import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import FastClick from 'fastclick';
import 'babel-polyfill';
import { Button, Chexkbox, Accordion, Icon, Cell } from '../src';
import './app.less';

// document.addEventListener('touchmove', (e) => {
//   e.preventDefault();
// }, { passive: false });

// window.addEventListener('load', () => {
//   const body = document.body || document.documentElement;
//   FastClick.attach(body);
// });

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
