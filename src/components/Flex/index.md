## Flex

用于弹性布局

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Blank, Space, Flex, FlexItem, Switch } from 'react-mobile-ui';

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

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

### API 

flex布局 

.mui-flex {
    display: flex;
    align-items: center;
    text-align: center;
}

.mui-flex-item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
