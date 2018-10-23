## button

点击后会触发一个操作。

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Space, Blank } from 'react-mui';

const App = () => (
      <div>
        <Blank>
          <Space />
          <Button>primary</Button>
          <Space />
          <Button disabled>primary disabled</Button>
          <Space />
          <Button type="default">default</Button>
          <Space />
          <Button type="default" disabled>default disabled</Button>
          <Space />
          <Button type="warning">warning</Button>
          <Space />
          <Button type="warning" disabled>warning disabled</Button>
          <Space />
          <Button type="ghost">ghost</Button>
          <Space />
          <Button type="ghost" disabled>ghost disabled</Button>
          <Space />
          <Button size="small" inline>inline</Button> &nbsp;
          <Button type="ghost" size="small" inline>small</Button> &nbsp;
          <Button style={{color: '#108ee9', border: '1px #108ee9 solid'}}   type="ghost" size="small" inline>add style</Button>
        </Blank>
      </div>
    );

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`primary`/`default`/`warning`/`ghost`或者不设  |   string| `default`|
| size    | 按钮大小，可选值为`small`/`normal`或者不设  | string | `normal`|
| disabled   | 设置禁用  | boolean |    false  |
| inline | 是否设置为行内按钮 | boolean | false
| onClick    | 点击按钮的点击回调函数 | (e: Object): void |   无  |
| style    | 自定义样式 |   Object  | 无 |
| className |  样式类名 | string | 无 |
