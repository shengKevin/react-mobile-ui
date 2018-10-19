## Modal

对话框

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Space, Modal } from 'react-mui';

export default class ModalDemo extends React.PureComponent {

  state = {
    modalVisible: false,
    show: false,
  };

  onCloseModal = () => {
    this.setState({ modalVisible: false, show: false });
  }

  render() {
    const { modalVisible, show } = this.state;
    return (
      <div>
        <Button onClick={() => this.setState({modalVisible: true})}>alert modale</Button>
        <Modal
          visible={modalVisible}
          title="Title"
          actions={
            [
              { 
                label: 'Ok', 
                onClick: () => { this.onCloseModal(); },
              },
              { 
                label: 'Cancel', 
                onClick: () => { this.onCloseModal(); },
              }
            ]}
          onClose={() => this.setState({modalVisible: false})}
          onClosemask
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
          </div>
        </Modal>
        <Space />
        <Button onClick={() => this.setState({show: true})}>alert modale1</Button>
        <Modal
          visible={show}
          title="Title"
          actions={
            [
              { 
                label: 'Ok', 
                onClick: () => { this.onCloseModal(); },
              },
              // { 
              //   label: 'Cancel', 
              //   onClick: () => { this.onCloseModal(); },
              // }
            ]}
          onClose={() => this.setState({show: false})}
          onClosemask
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
            scoll content1...<br />
            scoll content1...<br />
            scoll content1...<br />
            scoll content1...<br />
            scoll content1...<br />
            scoll content1...<br />
          </div>
        </Modal>
      </div>
    );
  }
}


ReactDOM.render((
    <ModalDemo/>
), document.getElementById('container'));

```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title    | title   |   string/element | '' |
| visible | 显示modal | boolean | false |
| actions   | 操作选项  | array |    []  |
| onCloseMask    | 点击蒙层是否触发onClose |   boolean  | true |
| onClose    | 点击蒙层触发 | function |   无  |