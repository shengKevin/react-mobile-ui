import React from 'react';
import data from '../../static/cnCity';
import { Picker, CascadePicker, DatePicker } from '../../../src/components/Picker';

export default class PickerDemo extends React.PureComponent {
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
