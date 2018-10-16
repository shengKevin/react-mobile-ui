import React from 'react';
import { Link } from 'react-router-dom';
import '../../../build/dist/verdor';
import { Accordion, Icon, Cell } from '../../../build/dist/react-mui.min.js';
import Header from '../../components/Header/index.jsx';


export default class Home extends React.PureComponent {

  render() {
    return (
      <div className="app">
        <Header />
        <Accordion defaultActiveKeys={['0']} onChange={this.accordionChange} style={{ paddingTop: 20}}>
          <Accordion.Panel header="Data Entry">
            <Cell cellafter style={{ textAlign: 'left' }}>
              <Link to="/button">button</Link>
            </Cell>
            <Cell>
              <Link to="/picker">picker</Link>
            </Cell>
            <Cell>
              <Link to="/cell">cell</Link>
            </Cell>
            <Cell>
              <Link to="/checkbox">checkbox</Link>
            </Cell>
            <Cell>
              <Link to="/radio">radio</Link>
            </Cell>
            <Cell>
              <Link to="/switch">switch</Link>
            </Cell>
            <Cell>
              <Link to="/input">input</Link>
            </Cell>
            <Cell>
              <Link to="/label">label</Link>
            </Cell>
          </Accordion.Panel>
          <Accordion.Panel header="Layout">
            <Cell>
              <Link to="/button">button</Link>
            </Cell>
          </Accordion.Panel>
          <Accordion.Panel header="Data Display">
            <Cell>
              <Link to="/button">button</Link>
            </Cell>
            <Cell>
              <Link to="/button">button</Link>
            </Cell>
            <Cell>
              <Link to="/button">button</Link>
            </Cell>
          </Accordion.Panel>
          <Accordion.Panel header="Navigation">
            <Cell>
              <Link to="/button">button</Link>
            </Cell>
            <Cell>
              <Link to="/button">button</Link>
            </Cell>
            <Cell>
              <Link to="/button">button</Link>
            </Cell>
          </Accordion.Panel>
          <Accordion.Panel header="Feedback">
            <Cell>
              <Link to="/button">button</Link>
            </Cell>
            <Cell>
              <Link to="/button">button</Link>
            </Cell>
            <Cell>
              <Link to="/button">button</Link>
            </Cell>
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}
