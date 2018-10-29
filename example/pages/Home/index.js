import React from 'react';
import { Link } from 'react-router-dom';
// import '../../../build/dist/verdor';
import { Accordion, Cell } from '../../../build/dist/react-mobile-ui.min.js';
import Header from '../../components/Header/index.jsx';


export default class Home extends React.PureComponent {

  render() {
    return (
      <div className="app">
        <Header />
        <Accordion onChange={this.accordionChange} style={{ paddingTop: 20}}>
          <Accordion.Panel header="Data Entry">
            <Cell cellafter style={{ textAlign: 'left' }}>
              <Link to="/button">button</Link>
            </Cell>
            <Cell>
              <Link to="/picker">picker</Link>
            </Cell>
            <Cell>
              <Link to="/picker">datePicker</Link>
            </Cell>
            <Cell>
              <Link to="/picker">cascadePicker</Link>
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
            <Cell><Link to="/flex">felx</Link></Cell>
            <Cell><Link to="/blank">blank</Link></Cell>
            <Cell><Link to="/blank">space</Link></Cell>
          </Accordion.Panel>
          <Accordion.Panel header="Data Display">
            <Cell>
              <Link to="/accordion">accordion</Link>
            </Cell>
          </Accordion.Panel>
          <Accordion.Panel header="Navigation">
          </Accordion.Panel>
          <Accordion.Panel header="Feedback">
            <Cell>
              <Link to="/actionsheet">actionSheet</Link>
            </Cell>
            <Cell>
              <Link to="/modal">modal</Link>
            </Cell>
            <Cell>
              <Link to="/toast">toast</Link>
            </Cell>
            <Cell>
              <Link to="/toptips">toptips</Link>
            </Cell>
            <Cell>
              <Link to="/tag">tag</Link>
            </Cell>
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}
