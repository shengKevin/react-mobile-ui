## Steps

显示任务的进度

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Space, Steps, Step } from 'react-mobile-ui';

class StepsDemo extends React.PureComponent {

  render() {
    return (
      <div>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={1}>
          <Step key={0} title='步骤一' />
          <Step key={1} title='步骤二' />
          <Step key={2} title='步骤二' />
        </Steps>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={2}>
          <Step key={0} title='步骤一' description="只是一个描述..." />
          <Step key={1} title='步骤二' description="也是一个描述..." />
          <Step key={2} title='步骤二' description="又是一个描述..." />
        </Steps>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={1}>
          <Step key={0} title='步骤一' />
          <Step key={1} title='出错啦!' status="error" />
          <Step key={2} title='步骤二' />
        </Steps>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={0}>
          <Step showIcon icon="icon-message-fill" key={0} title='自己' />
          <Step showIcon icon="icon-alipay-circle-fill" key={1} title='定义' />
          <Step showIcon icon={<Icon size="md" type="icon-taobao-circle-fill" />} key={2} title='element' />
        </Steps>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={1}>
          <Step key={0} title='步骤一' />
          <Step showIcon icon={<Icon size='md' type="icon-check-circle" style={{color: 'FF5A10'}} />} key={1} title='步骤二' />
          <Step key={2} title='步骤二' />
        </Steps>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={1} direction="vertical">
          <Step key={0} title='步骤一' />
          <Step key={1} title='步骤二' />
          <Step key={2} title='步骤二' />
        </Steps>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={2} direction="vertical">
          <Step key={0} title='步骤一' description="只是一个描述..." />
          <Step key={1} title='步骤二' description="也是一个描述..." />
          <Step key={2} title='步骤三' description="又是一个描述..." />
          <Step key={3} title='步骤4四' description="还是一个描述..." />
          <Step key={4} title='步骤午' description="就是一个描述..." />
        </Steps>
      </div>
    );
  }
}

ReactDOM.render((
    <StepsDemo />
), document.getElementById('container'));

```

## API

### steps

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| direction    | vertical/horizontal  |  string| `horizontal`|
| current    | 当前执行在哪一步  | number | 0 |

### step
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| showIcon    | 是否要自定义element节点  |   boolean| false|
| icon    | 自定义节点icon，可以直接使用字符串（icon的type），也可以自己定义<Icon />或者div等  |  element | '' |
| title   | 标题  | string |   ''  |
| description | 描述 | string | ‘’ |
| status | 当前执行状态 | string | ‘’ |
| style    | 自定义样式 |   Object  | 无 |tong'guo
| className |  样式类名 | string | 无 |ment