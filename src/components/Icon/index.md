## Icon

图标， 封装阿里iconfont
[完整图标库](http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=9402)

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-mobile-ui';

const App = () => <Icon type="icon-alipay-circle-fill" />;

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```


## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    |  图标,支持颜色，大小 |   string | 无 |
| size    |  大小 xxs xs sm md lg |   string | xxs |
