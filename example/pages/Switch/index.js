import React from 'react';
import { Blank, Space } from '../../../build/lib/Blank';
import { Flex, FlexItem } from '../../../build/lib/Flex';
import { Switch } from '../../../build/lib/switch';

export default class SwitchDemo extends React.PureComponent {

  handleSwitch = (e) => {
    console.log(e.target.checked);
  }

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
        </Blank>
      </div>
    );
  }
}
