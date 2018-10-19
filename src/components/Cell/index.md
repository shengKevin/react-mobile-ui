## cell

行

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-mui';

const App = () => (
  <Cell>
    <CellHeader>Header</CellHeader>
    <CellBody>Body</CellBody>
    <CellFooter>Footer</CellFooter>
  </Cell>
  <Cell>
    <Label>输入框</Label>
  </Cell>
  <Cell>
    <CellHeader><Label>单位名称</Label></CellHeader>
    <CellBody>
    <input className="mui-input" placeholder="请输入单位名称" />
    </CellBody>
  </Cell>
);

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## API

### Cell
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| href    | a标签链接，存在cell为<a></a>  | string | 无
| cellbefore | cell的上划线 border | boolean | false
| cellafter | cell的下划线 border | boolean | true

