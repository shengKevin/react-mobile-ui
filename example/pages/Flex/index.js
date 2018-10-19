import React from 'react';
import { Blank, Space } from '../../../build/lib/Blank';
import { Flex, FlexItem } from '../../../build/lib/Flex';
import { Switch } from '../../../build/lib/switch';

export default class FlexDemo extends React.PureComponent {

  render() {
    return (
      <div>
        <Blank>
          <Space />
          <Flex>
            <FlexItem>
              <Switch onChange={this.handleSwitch} />
            </FlexItem>
            <FlexItem>
              <Switch defaultChecked="checked" />
            </FlexItem>
            <FlexItem>
              <Switch />
            </FlexItem>
          </Flex>
          <Space />
          <Flex>
            <FlexItem>
              <div>block</div>
            </FlexItem>
            <FlexItem>
              <div>block</div>
            </FlexItem>
          </Flex>
          <Space />
          <Flex style={{justifyContent: 'space-around'}}>
            <FlexItem style={{flexGrow: 0}}>
              <div style={{background: '#ebebef', width: 60, height: 20}}>block</div>
            </FlexItem>
            <FlexItem style={{flexGrow: 0}}>
              <div style={{background: '#ebebef', width: 60, height: 20}}>block</div>
            </FlexItem>
            <FlexItem style={{flexGrow: 0}}>
              <div style={{background: '#ebebef', width: 60, height: 20}}>block</div>
            </FlexItem>
          </Flex>
          <Space />
          <Flex style={{justifyContent: 'space-between'}}>
            <FlexItem style={{flexGrow: 0}}>
              <div style={{background: '#ebebef', width: 60, height: 20}}>block</div>
            </FlexItem>
            <FlexItem style={{flexGrow: 0}}>
              <div style={{background: '#ebebef', width: 60, height: 20}}>block</div>
            </FlexItem>
            <FlexItem style={{flexGrow: 0}}>
              <div style={{background: '#ebebef', width: 60, height: 20}}>block</div>
            </FlexItem>
          </Flex>
        </Blank>
      </div>
    );
  }
}
