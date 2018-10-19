## Picker

在一组预设数据中进行选择

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Picker, CascadePicker, DatePicker } from 'react-mui';
import data from '../../static/cnCity';
// data 格式
// const data = [
//   {
//     "label":"北京",
//     "value":"110000",
//     "children": [{label, value, children},{},{}]
//   }]

class PickerDemo extends React.PureComponent {
  state = {
    show: false,
    showLocation: false,
    showDate: false,
    showCascade: false,
    showTime: false,
    showDateTime: false,
    developers: [
      [
        {label: 'web', value: '1'},
        {label: 'app', value: '2'},
        {label: 'test', value: '3'},
        {label: 'service', value: '4'},
        {label: 'database', value: '5'},
      ],
      [
        {label: 'node', value: '1'},
        {label: 'jave', value: '2'},
        {label: 'c++', value: '3'},
        {label: 'javascript', value: '4'},
        {label: 'php', value: '5'},
        {label: 'python', value: '6'},
      ],
      [
        {label: '1-3', value: '1'},
        {label: '3-5', value: '2'},
        {label: '5-10', value: '3'},
        {label: '10+', value: '4'},
      ]
    ],
    extra: '请选择',
    developersValue: ['1', '2', '3'],
    locationValue: [],
    cascadeValue: ['150000', '150100', '150102'],
    dateValue: new Date(2000, 1, 1),
    DateTimeValue: new Date(2000, 1, 1),
    timeValue: new Date(2000, 1, 1),
  };

  handlePickerClick = () => {
    this.setState({ show: true });
  }

  handleCancel = () => {
    this.setState({ show: false });
  }

  handleOk = (value, obj) => {
    console.log(value, obj);
    this.setState({ show: false, developersValue: [...value] });
  }

  handleLocalPickerClick = () => {
    this.setState({ showLocation: true });
  }

  handleLocalOk = (value, obj) => {
    console.log(value, obj);
    this.setState({ showLocation: false, locationValue: [...value] });
  }

  handleLocalCancel = () => {
    this.setState({ showLocation: false });
  }
  
  handleCaseOk = (value, obj) => {
    console.log(value, obj);
    this.setState({ showCascade: false, cascadeValue: [...value] });
  }

  handleLocalCaseClick = () => {
    this.setState({ showCascade: true });
  }

  handleCaseCancel = () => {
    this.setState({ showCascade: false });
  }

  handleDatePicker = () => {
    this.setState({ showDate: true});
  }

  handleDateOk = (value, obj) => {
    console.log(value, obj);
    this.setState({ showDate: false, dateValue: value});
  }

  handleDateCancel = () => {
    this.setState({ showDate: false});
  }

  handleDateTimePicker = () => {
    this.setState({ showDateTime: true});
  }

  handleDateTimeOk = (value, obj) => {
    console.log(value, obj);
    this.setState({ showDateTime: false, dateValue: value});
  }

  handleDateTimeCancel = () => {
    this.setState({ showDateTime: false});
  }

  handleTimePicker = () => {
    this.setState({ showTime: true});
  }

  handleTimeOk = (value, obj) => {
    console.log(value, obj);
    this.setState({ showTime: false, timeValue: value});
  }

  handleTimeCancel = () => {
    this.setState({ showTime: false});
  }

  render() {
    const {
      show, showLocation, showDate, showCascade, showTime, developers, extra, 
      developersValue, locationValue, cascadeValue, dateValue, DateTimeValue,
      showDateTime, timeValue
    } = this.state;
    return (
      <div>
        <Picker 
          show={show}
          data={developers}
          extra={extra}
          value={developersValue}
          title="select title"
          onClick={this.handlePickerClick}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          Picker
        </Picker>
        <Picker     
          show={showLocation}
          data={[data]}
          value={locationValue}
          onOk={this.handleLocalOk}
          onClick={this.handleLocalPickerClick}
          onCancel={this.handleLocalCancel}
        >
          请选择省份
        </Picker>
        <CascadePicker     
          show={showCascade}
          data={data}
          level={3}
          value={cascadeValue}
          onOk={this.handleCaseOk}
          onClick={this.handleLocalCaseClick}
          onCancel={this.handleCaseCancel}
        >
          请选择地区
        </CascadePicker>
        <DatePicker 
          show={showDate}
          onClick={this.handleDatePicker}
          onOk={this.handleDateOk}
          onCancel={this.handleDateCancel}
          title="请选择日期"
          extra={this.state.extra}
          value={dateValue}
          maxDate={new Date()}
          minDate={new Date(2000, 1, 1)}
        >请选择日期</DatePicker>
        <DatePicker  
          mode="time"
          show={showTime}
          onClick={this.handleTimePicker}
          onOk={this.handleTimeOk}
          onCancel={this.handleTimeCancel}
          title="请选择日期"
          extra={this.state.extra}
          value={timeValue}
          maxDate={new Date()}
          minDate={new Date(2000, 1, 1)}
        >请选择具体时间</DatePicker>
        <DatePicker  
          mode="datetime"
          show={showDateTime}
          onClick={this.handleDateTimePicker}
          onOk={this.handleDateTimeOk}
          onCancel={this.handleDateTimeCancel}
          title="请选择日期"
          extra={this.state.extra}
          value={DateTimeValue}
          maxDate={new Date()}
          minDate={new Date(2000, 1, 1)}
        >请选择具体时间</DatePicker>
      </div>
    );
  }
}


ReactDOM.render((
    <PickerDemo />
), document.getElementById('container'));

```

## API

### picker

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data  | 数据源   |  Array<[{label, value}],[{label, value}]> 二维数据child为object | [[]] |
| show | 显示picker | boolean | false |
| value   | 格式为[value1,value2],对应数据源value  | array |  []  |
| extra    | 临时占位符，value为真是失效 |   string  | 请选择 |
| title    | 大标题 |   string  | '' |
| letfbtn    | 左侧按钮 |   string  | 'Cancel' |
| rightbtn    | 右侧按钮 |   string  | 'Ok' |
| onOk    | 点击选中是回调，参数value, obj |   function  | ()=>{} |
| onCancel    | 点击取消参数 |   function  | ()=>{} |
| onClick    | 点击弹出 | function |   ()=>{}  |

### cascadePicker

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data  | 数据源  |  Array<{label, value, children}> | [[]] |
| level | 多少级联动 | number | 1 |
| show | 显示picker | boolean | false |
| value   | 格式为[value1,value2],对应数据源value  | array |  []  |
| extra    | 临时占位符，value为真是失效 |   string  | 请选择 |
| title    | 大标题 |   string  | '' |
| letfbtn    | 左侧按钮 |   string  | 'Cancel' |
| rightbtn    | 右侧按钮 |   string  | 'Ok' |
| onOk    | 点击选中是回调，参数value, obj |   function  | ()=>{} |
| onCancel    | 点击取消参数 |   function  | ()=>{} |
| onClick    | 点击弹出 | function |   ()=>{}  |

### datePicker

对picker和pickerGroup的二次封装

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode   |  支持 year(年) /month（年+月）/ date(年+月+日)/ time(时间-时+分)/ datetime(日期+时间)  | string |  date  |
| show | 显示picker | boolean | false |
| value   | new Date(2000, 1, 1) | array |  []  |
| maxDate   | new Date(2000, 1, 1)最大值范围  | Date |  []  |
| minDate   | new Date(2000, 1, 1)最小值范围 | Date |  []  |
| reverse   | 倒置显示年月日分时秒  | boolean |  false |
| extra    | 临时占位符，value为真是失效 |   string  | 请选择 |
| title    | 大标题 |   string  | '' |
| letfbtn    | 左侧按钮 |   string  | 'Cancel' |
| rightbtn    | 右侧按钮 |   string  | 'Ok' |
| onOk    | 点击选中是回调，参数value, obj |   function  | ()=>{} |
| onCancel    | 点击取消参数 |   function  | ()=>{} |
| onClick    | 点击弹出 | function |   ()=>{}  |
