import React from 'react';
import {
  Cell,
  CellBody,
  CellHeader,
  CellFooter,
} from '../../../build/lib/Cell';
import { Space } from '../../../build/lib/Blank';
import { Button } from '../../../build/lib/Button';
import { Label } from '../../../build/lib/Label';
import { Input } from '../../../build/lib/Input';

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
