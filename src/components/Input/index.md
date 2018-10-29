## Input

输入框

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Button,
  Cell,
  CellBody,
  CellHeader,
  CellFooter,
  Space,
  Label,
  Input
} from 'react-mobile-ui';

export default class InputDemo extends React.PureComponent {

  validate = (value) => {
    console.log(value);
    return false;
  }

  handlerSubmint = () => {
    console.log(this.iphone.getValue());
    // this.refs.testinput.setValue();
    this.iphone.doValidate();
  }

  evenValueRules = () => {
    return new RegExp(/\D|[1|3|5|7|9]*/g);
  }

  render() {
    return (
      <div>
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
        <Input label="姓名" type="tel" placeholder="请输入姓名" clear />
        <Input 
          ref={(c) => { this.iphone = c; }}
          defaultValue="fefaulttest" onChange={this.onChange} clear
          label="手机" type="tel" placeholder="请输入手机"
          rules={[
            {dovalidate: this.validate, message: 'xxxxx'},
            {validate: /^1[3|4|5|6|7|8|9]\d{9}$/, message: '请输入正确的手机号码'}
          ]}
        />
        <Input placeholder="valuerules is even" label="输入偶数"
          valuerules={this.evenValueRules}
        />
        <Input placeholder="请输入" />
        <Space size="lg" />
        <Button onClick={this.handlerSubmint}>submit</Button>
      </div>
    );
  }
}

ReactDOM.render((
    <InputDemo/>
), document.getElementById('container'));

```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| defaultValue    | 默认初始value  |   string |  |
| value    |  value 值(受控) | string | |
| type   | input type  | string |    text  |
| label    | label | string |   无  |
| placeholder    | placeholder |   string  | 无 |
|  onChange |  change回调 | function | 无 |
| onBlur |  blur回调 | function | 无 |
| onFocus |  focus回调 | function | 无 |
| clear |  支持清除所有输入按钮 | bool | false |
| rules |  校验规则 [{
      message: PropTypes.string,
      dovalidate: PropTypes.func,
    } || {
      message: PropTypes.string,
      validate: PropTypes.RegExp,
    }] | array | 无 |
| valuerules |  输入规则限制 | function | 无 |
| maxLength |  输入长度 | numbrt | 无 |


