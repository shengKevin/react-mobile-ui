## button

点击后会触发一个操作。

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-mui';

const App = () => <Button>hello react-mui</Button>;

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`primary`/`default`/`warning`或者不设  |   string| `default`|
| size    | 按钮大小，可选值为`small`/`normal`或者不设  | string | `normal`|
| disabled   | 设置禁用  | boolean |    false  |
| onClick    | 点击按钮的点击回调函数 | (e: Object): void |   无  |
| style    | 自定义样式 |   Object  | 无 |
| className |  样式类名 | string | 无 |
