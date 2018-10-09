# React-mui

Web mobile components with react

## Doc

Please read the [documentation](https://shengkevin.github.io/react-mui/)

## Use

npm install react-mui --save-dev

## Example

```javascript
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-mui';

const App = () => <Button>hello react-mui</Button>;

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## Bug

Please commit [issues](https://github.com/shengKevin/react-mui/issues)

## Dir

```

├── build
│   ├── dist
│   ├── docs
│   ├── example
│   └── lib
├── docs
│   ├── app.js
│   ├── app.less
│   ├── docs.md
│   ├── index.html
│   └── index.js
├── example
│   ├── app.js
│   ├── app.less
│   ├── example.md
│   ├── index.html
│   └── index.js
├── src
│   ├── components
│   ├── index.js
│   ├── utils
│   └── version.js
├── webpack.config.js       // docs and exmple
└── webpack.config.lib.js   // build lib

```