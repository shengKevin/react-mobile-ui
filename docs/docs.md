## start

### 安装

使用npm

```js
$ npm install react-mobile-ui --save  (推荐)
```

也可以将[github](https://github.com/shengKevin/react-mobile-ui)上的build/dist/react-mobile.js或/react-mobile.min.js文件下载再来使用

### 示例

```js
    import { DatePicker } from 'react-mobile-ui';
    ReactDOM.render(<DatePicker />, mountNode);
```

样式: 当前并没有分离css, 想分离的同学可以clone项目修改webpack.config.lib.js(打开相关注释即可)
重新build lib

```js
const plugins = [
  ...  
  // new ExtractTextWebpackPlugin('react-mobile-ui.css')
];

// Rules
const rules = [{
    test: /\.css/,
    // use: ExtractTextWebpackPlugin.extract({
    //   fallback: 'style-loader',
    use: [
      ...
      ]
    // })
  }, {
    test: /\.less$/,
    exclude: /node_modules/,
    // use: ExtractTextWebpackPlugin.extract({
    //   fallback: '',
    use: [
      ...
    ]
    // })
  },
```

### 按需加载

下面两种方式都可以只加载用到的组件。
使用 [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)（推荐）

```js
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", {
      "libraryName": "react-mobile-ui",
      "libraryDirectory": "lib",
    }]
  ]
}
```

然后 import { DatePicker } from 'react-mobile-ui';会帮助你按需加载

手动引入

```js
 import { DatePicker } from 'react-mobile-ui/build/lib/Picker';
```
