## toast

反馈/提示

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Space, Toast } from 'react-mui';

class ToastDemo extends React.PureComponent {

  state = {
    show: false,
    showIcon: false,
    showAny: false,
  };

  handleClick = () => {
    this.setState({ show: true });
    setTimeout(() => {
      this.setState({ show: false });      
    }, 3000);
  }

  handleIconClick = () => {
    this.setState({ showIcon: true });
    setTimeout(() => {
      this.setState({ showIcon: false });      
    }, 3000);
  }

  handleshowAnyClick = () => {
    this.setState({ showAny: true });
    setTimeout(() => {
      this.setState({ showAny: false });      
    }, 3000);
  }

  render() {
    const { show, showIcon, showAny } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>Toast</Button>
        <Space />
        <Toast show={show} text="this is toast!!!" />
        <Button onClick={this.handleIconClick}>icon Toast</Button>
        <Space />
        <Toast show={showIcon} icon="icon-check" size="lg" text="Success!!!" />
        <Button onClick={this.handleshowAnyClick}>children Toast</Button>
        <Toast show={showAny}>
          <div>
            <p><Icon type="icon-close-circle-fill" /></p>
            <p>content ...</p>
            <p>content ...</p>
          </div>
        </Toast>
      </div>
    );
  }
}

ReactDOM.render((
    <ToastDemo />
), document.getElementById('container'));

```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| show | 弹出toast | boolean | false
| icon    | Icon组件的type  |   string | ``|
| size    | Icon的size  | string | `md`|
| text   | 文案  | string |    ''  |
| children | 子元素 | any | 无

