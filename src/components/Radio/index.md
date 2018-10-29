## Radio

单选按钮

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Radio, Cell } from 'react-mobile-ui';

class RadioDemo extends React.PureComponent {

  state = {
    radio: '1',
    computer: '2',
  };

  computerRadioChange = (value, e) => {
    console.log(value);
    this.setState({
      computer: value,
    });
  }

  radioChange = (value) => {
    console.log(value);
    this.setState({
      radio: value,
    });
  }

  render() {
    const { radio, computer } = this.state;
    return (
      <div>
        <Cell>Radio</Cell>
        <Radio name="computer" value="1" checked={computer === '1'} onChange={this.computerRadioChange}>thinkpad</Radio>
        <Radio name="computer" value="2" checked={computer === '2'} onChange={this.computerRadioChange}>mac</Radio>
        <Cell>Disabled radio</Cell>
        <Radio name="r1" value="1" checked={radio === '1'} onChange={this.radioChange}>ios</Radio>
        <Radio name="r1" value="2" checked={radio === '2'} onChange={this.radioChange}>andriod</Radio>
        <Radio name="r1" value="3" checked={radio === '3'} disabled onChange={this.radioChange}>塞班</Radio>
      </div>
    );
  }
}

ReactDOM.render((
    <RadioDemo/>
), document.getElementById('container'));

```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| name    | 同一组radio的标识  |   string | '' |
| value    | radio值 | string | '' |
| disabled   | 设置禁用  | boolean |    false  |
| onChange    | 点击按钮的点击回调函数,参数value | function |   无  |
| checked    | 是否选中 |   boolean  | false |
