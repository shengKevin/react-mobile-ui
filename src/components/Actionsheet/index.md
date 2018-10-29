## ActionSheet

ios弹出效果

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { ActionSheet, Button } from 'react-mobile-ui';

class ActionSheetDemo extends React.PureComponent {

  state = {
    show: false,
    menus: [
      {
        label: 'Option 1',
        onClick: () => this.setState({show: false})
      }, 
      {
        label: 'Option 2',
        onClick: () => this.setState({show: false})
      }],
    actions: [
      {
        label: 'Cancel',
        onClick: () => this.hide()
      }
    ],
    title: 'this is actionsheet title',
  };

  hide(){
    this.setState({
      show: false,
    });
  }

  render() {
    const { show, title, menus, actions } = this.state;
    return (
      <div>
        <Button type="default" onClick={() => { this.setState({show: true}); }}>ActionSheet</Button>
        <ActionSheet
          title={title}
          menus={menus}
          actions={actions}
          show={show}
          onClose={() => { this.setState({show: false}); }}
          // onCloseMask={false}
        />
      </div>
    );
  }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title    | title   |   string/element | '' |
| menus    | 下拉单的每一项[{ label: '',onClick :function }],lable为内容，onclick点击回调 | array | [] |
| actions   | 操作选项, 参考menus  | array |    []  |
| onCloseMask    | 点击蒙层是否触发onClose |   boolean  | true |
| onClose    | 点击蒙层触发 | function |   无  |
