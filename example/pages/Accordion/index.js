import React from 'react';
import { Cell } from '../../../build/lib/Cell';
import { Accordion } from '../../../build/lib/Accordion';

export default class AccordionDemo extends React.PureComponent {

  accordionChange = (value) => {
    console.log(value);
  }

  render() {
    return (
      <div>
        <Accordion defaultActiveKeys={['0']} onChange={this.accordionChange}>
          <Accordion.Panel header="title 1">
            <Cell>content 1</Cell>
            <Cell>content 2</Cell>
            <Cell>content 3</Cell>
          </Accordion.Panel>
          <Accordion.Panel header="title 2">
            <Cell>content 1</Cell>
            <Cell>content 2</Cell>
            <Cell>content 3</Cell>
          </Accordion.Panel>
          <Accordion.Panel header={<span>title 3</span>}>
            <Cell>content 1</Cell>
            <Cell>content 2</Cell>
            <Cell>content 3</Cell>
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}
