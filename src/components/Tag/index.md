## tag

标签

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Tag, Space, Flex, FlexItem } from 'react-mobile-ui';

class TagDemo extends React.PureComponent {

  render() {
    return (
      <div>
        <Space size="lg" />
        <Space size="lg" />
        <Flex>
          <FlexItem>
            <Tag>basic</Tag>
          </FlexItem>
          <FlexItem>
            <Tag type="primary">primary</Tag>
          </FlexItem>
          <Space size="lg" />
          <Space size="lg" />
          <FlexItem>
            <Tag type="default">default</Tag>
          </FlexItem>
        </Flex>
        <Space size="lg" />
        <Space size="lg" />
        <Flex>
          <FlexItem>
            <Tag small>small basic</Tag>
          </FlexItem>
          <FlexItem>
            <Tag small type="primary">small primary</Tag>
          </FlexItem>
          <FlexItem>
            <Tag small type="default">small default</Tag>
          </FlexItem>
        </Flex>
        <Space size="lg" />
        <Space size="lg" />
        <Flex>
          <FlexItem>
            <Tag selected>selected basic</Tag>
          </FlexItem>
          <FlexItem>
            <Tag selected type="default">selected default</Tag>
          </FlexItem>
        </Flex>
      </div>
    );
  }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 类型，可选值为`primary`/`normal`/`warning`/`defalut`  |   string| `normal`|
| small    | 小型tag  | string | 无 |
| disabled   | 设置禁用  | boolean |    false  |
| selected | 是否可以点击， 点击切换风格 | boolean | false
| onClick    | 点击回调函数 | (e: Object): void |   无  |
| style    | 自定义样式 |   Object  | 无 |
| className |  样式类名 | string | 无 |
