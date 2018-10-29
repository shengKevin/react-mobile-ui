## ChexkBox

复选框

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { CheckboxGroup, Checkbox, Cell } from 'react-mobile-ui';

class CheckboxDemo extends React.PureComponent {
  state = {
    checkedName: ['checkbox1', 'checkbox2'],
    onecheckbox: false,
  };

  onCheckboxChange = (value, e) => {
    e.stopPropagation();
    console.log(value);
    this.setState({ checkedName: [...value] });
  }

  onOneCheckboxChange = (value, e) => {
    e.stopPropagation();
    console.log(value);
    this.setState({ onecheckbox: value });
  }

  render() {
    const { checkedName, onecheckbox } = this.state;
    return (
      <div>
        <Cell>CheckboxGroup</Cell>
        <CheckboxGroup onChange={this.onCheckboxChange} checkedName={checkedName}>
          <CheckboxGroup.item name="checkbox1">option1</CheckboxGroup.item>
          <CheckboxGroup.item name="checkbox2">option2</CheckboxGroup.item>
          <Checkbox name="checkbox3" value="option3" />
          <Checkbox disabled name="checkbox4" value="option4" />
        </CheckboxGroup>
        <Cell>One checkbox</Cell>
        <Checkbox name="checkbox5" value="one checkbox" checked={onecheckbox} onChange={this.onOneCheckboxChange} />
        <Cell>Disabled checkd</Cell>
        <Checkbox name="checkbox6" checked disabled>option6</Checkbox>
      </div>
    );
  }
}

ReactDOM.render((
    <CheckboxDemo/>
), document.getElementById('container'));

```

## API

### checkboxgroup

<CheckBoxGroup>的child必须为<CheckBoxGroup.item>或者<Checkbox>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| checkedName    | 选中的子节点name集合  |   array | [] |
| onChange    | 改变checkbox状态的回调,参数为当前选中的checkbox的name数组  | function | ()=>{} |

### checkbox
只有一个checkbox时可以不与checkboxgroup一起使用

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| value    |  和child的效果一样 |   string | '' |
| name    |  必填项，原生checkbox的name，作为唯一标识 |   string  | undefined |
| checked    |  初始状态是否选中,与checkboxgroup配合使用时使用checkedName |   bool | false |
| disabled    |  禁用 |   bool | false |
