import React from 'react';
import PropTypes from 'prop-types';
import Picker from './picker.jsx';

class DatePicker extends React.Component {
    
  constructor(props) {
    super(props);
    let { value, minDate, maxDate } = props;
    if (!(value instanceof Date)) {
      value = new Date();
      console.warn('invalid value props,  value must to be Date instance');
    }
    this.state = {
      yearGroup: this.initDatePickerGroup(minDate.getFullYear(), maxDate.getFullYear() + 1, '年'),
      monthGroup: this.initDatePickerGroup(1, 13, '月'),
      dateGroup: this.setDateGroup(value),
      hoursGroup: this.initDatePickerGroup(0, 25, '时'),
      MinutesGroup: this.initDatePickerGroup(0, 61, '分'),
      data: [],
      dateValue: this.initValue(),
    };
  }

  componentDidMount() {
    this.setDateData();
  }

  setDateData = () => {
    const { mode } = this.props;
    const { data, yearGroup, monthGroup, dateGroup, hoursGroup, MinutesGroup } = this.state;
    // year month date time(时间) datetime(日期+时间)
    switch(mode) {
      case 'year':
        data.push(yearGroup);
        break;
      case 'month':
        data.push(yearGroup);
        data.push(monthGroup);
        break;
      case 'date':
        data.push(yearGroup);
        data.push(monthGroup);
        data.push(dateGroup);
        break;
      case 'time':
        data.push(hoursGroup);
        data.push(MinutesGroup);
        break;
      case 'datetime':
        data.push(yearGroup);
        data.push(monthGroup);
        data.push(dateGroup);
        data.push(hoursGroup);
        data.push(MinutesGroup);
        break;
      default:
        break;
    }
    this.setState({ data });
  }

  initValue = () => {
    const { value, mode } = this.props;
    // year month date time(时间) datetime(日期+时间)
    switch(mode) {
      case 'year':
        return [`${value.getFullYear()}`];
      case 'month':
        return [`${value.getFullYear()}`, `${value.getMonth()}`];
      case 'date':
        return [`${value.getFullYear()}`, `${value.getMonth()}`, `${value.getDate()}`];
      case 'time':
        return [`${value.getHours()}`, `${value.getMinutes()}`];
      case 'datetime':
        return [`${value.getFullYear()}`, `${value.getMonth()}`, `${value.getDate()}`, `${value.getHours()}`, `${value.getMinutes()}`];
      default:
        return [];
    }
  }

  initDatePickerGroup = (start, len, type) => {
    const arr = [];
    for (let i = start; i < len; i += 1) {
      const obj = { label: `${i}${type}`, value: `${i}` };
      arr.push(obj);
    }
    return arr;
  }

  setDateGroup = (value) => {
    const year = value.getFullYear();
    const month = value.getMonth();
    const date = [];
    for (let i = 1; i < new Date(year, month, 0).getDate() + 1; i += 1) {
      const obj = { label: `${i}日`, value: `${i}` };
      date.push(obj);
    }
    return date;
  }

  handleChange = (value, index, gkey, select) => {
    const { mode } = this.props;
    const { data } = this.state;
    if ((mode === 'date' || mode === 'datetime') && (gkey === 0 || gkey === 1)) {
      const curdate = this.setDateGroup(new Date(select[0], select[1]));
      data.splice(2, 1, curdate);
      this.setState({
        data: [...data],
      });
    }
  }

  handleOk = (value, valueObj, e) => {
    this.setState({
      dateValue: value,
    });
    this.props.onOk(value, valueObj, e);
  }
  
  render() {
    const { 
      mode, minDate, maxDate, value, reverse, onOk,
      ...others
    } = this.props;
    const { data, dateValue } = this.state;
    if (!data.length) return null;
    return (
      <Picker
        data={data}
        value={dateValue}
        onChange={this.handleChange}
        onOk={this.handleOk}
        {...others}
      />
    );
  }

}

DatePicker.displayName = 'mui-date-picker';

DatePicker.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  onOk: PropTypes.func,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  letfbtn: PropTypes.string,
  rightbtn: PropTypes.string,
  extra: PropTypes.string,
  mode: PropTypes.string,
  value: PropTypes.object,
  maxDate: PropTypes.object,
  minDate: PropTypes.object,
  reverse: PropTypes.bool,
};

DatePicker.defaultProps = {
  value: new Date(),
  maxDate: new Date(2030, 1, 1, 23, 59, 59),
  minDate: new Date(2000, 1, 1, 0, 0, 0),
  reverse: false,
  // year month date time(时间) datetime(日期+时间)
  mode: 'date',
  title: '',
  show: false,
  letfbtn: 'Cancel',
  rightbtn: 'Ok',
  extra: '请选择', 
  onOk: () => {},
  // onCancel: () => {},
  onClick: () => {},
};

export default DatePicker;
