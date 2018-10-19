## blank
布局空间

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-mui';

const App = () => (
  <Blank>
    <Space />
    <Button>primary</Button>
    <Space />
    <Button disabled>primary disabled</Button>
    <Space />
  </Blank>
);

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## API
### blank 

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| size    | 两翼留白间距，可选 sm, md, lg,不选 | string | md|
### space
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| size    | 上下留白间距，可选 sm, md, lg,不选 | string | md|
