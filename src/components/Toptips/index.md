## toptips

提示/警告

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Space, Toptips } from 'react-mobile-ui';

class ToptipsDemo extends React.PureComponent {

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
        <Space size="lg" />
        <Space size="lg" />
        <Space size="lg" />
        <Space size="lg" />
        <Space size="lg" />
        <Space size="lg" />
        <Space size="lg" />
        <Button type="default" onClick={this.handleIconClick}>primary toptips</Button>
        <Space />
        <Toptips show={showIcon} text="Success!!!" type="primary" />
        <Button type="default" onClick={this.handleshowAnyClick}>warn toptips</Button>
        <Toptips show={showAny} type="warn">
          <p><Icon type="icon-close-circle-fill" />  This is a dangerous</p>
        </Toptips>
        <Space />
        <Button onClick={this.handleClick} type="default">my toptips</Button>
        <Space />
        <Toptips style={{background: '#1aad19'}} show={show} text="This is toptips!!!" />
      </div>
    );
  }
}

ReactDOM.render((
    <ToptipsDemo />
), document.getElementById('container'));

```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| show | 弹出toptips | boolean | false
| type   | 风格`primary`/`warn`/`default`  | string |   primary  |
| text   | 文案  | string |    ''  |
| children | 子元素 | any | 无

