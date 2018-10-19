## Switch

开关

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-mui';

const App = () => <Switch defaultChecked="checked" />;
ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## API

由<input type="checkbox" />实现，props一致

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| defaultChecked  | 默认值 |  string | '' |
| onChange | 回调 | function | 无 |
| checked | 选中 | string | '' |
