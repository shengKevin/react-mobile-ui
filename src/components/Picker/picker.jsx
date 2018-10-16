import React from 'react';
import PropTypes from 'prop-types';
import { Mask } from '../Mask';
import PickerGroup from './picker-group.jsx';
import classNames from '../../utils/classnames';
import './index.less';

class Picker extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.initState();
  }

    initState = () => {
      const { data } = this.props;
      const state = {};
      for (let i = 0; i < data.length; i += 1) {
        state[`groupValue${i}`] = {
          value: data[i][0],
          index: 0,
        };
      }
      return state;
    }


    onCancel = (e) => {
      e.stopPropagation();
      this.props.onCancel && this.props.onCancel(e);
    }

    onOk = (e) => {
      e.stopPropagation();
      const { completeValue, value } = this.getValue();
      this.props.onOk && this.props.onOk(value, completeValue, e);
    }

    getValue = () => {
      const value = [];
      const completeValue = [];
      for (let key in this.state) {
        const gv = this.state[key] || {};
        const v = gv.value || {};
        completeValue.push(v);
        value.push(v.value);
      }
      return { completeValue, value };
    }

    renderPickerBody = () => {
      const { data, value } = this.props;
      const activeIndex = this.findActiveIndex(data, value);
      const el = data.map((item, index) => {
        return (
          <PickerGroup 
            gkey={index}
            key={index}
            data={item}
            onChange={this.handleChange}
            activeIndex={activeIndex[index]}
            />
        );
      });
      return el;
    }

    handleChange = (value, index, key) => {
      const state = {};
      const curValue = { value, index };
      state[`groupValue${key}`] = curValue;
      this.setState(state, () => {
        const { value: select } = this.getValue();
        this.props.onChange && this.props.onChange(value, index, key, select);
      });
    }

    findLabel(data, value) {
      const svalue = [];
      for (let i = 0; i < value.length; i += 1) {
        if (data[i] instanceof Array) {
          const obj = data[i].find(item => item.value === value[i]) || {};
          svalue.push(obj.label);
        }
      }
      return svalue;
    }

    findActiveIndex(data, value) {
      const svalue = [];
      for (let i = 0; i < value.length; i += 1) {
        if (data[i] instanceof Array) {
          const index = data[i].findIndex(item => item.value === value[i]);
          svalue.push(index);
        }
      }
      return svalue;
    }

    render() {
      const {
        data, show, extra, value,
        letfbtn, rightbtn, title,
        onOk, onCancel, onClick, onChange,
        children, className, ...others
      } = this.props;
      const cls = classNames({
        'mui-picker-up': show,
        'mui-picker-down': !show,
        [className]: className,
      });
      const svalue = value.length > 0 ? this.findLabel(data, value) : [extra];
      const extracls = classNames({
        'mui-picker-extra': true,
        'mui-picker-exrea-checked': value.length > 0,
      });
      return (
        <div>
          <div onClick={onClick} className="mui-picker-content">
            <div className="mui-picker-label">{children}</div>
            <div className={extracls}>
              {
                svalue.map((item,index) => (
                  <span key={index}>
                    {item}
                    {index !== svalue.length - 1 ? ',' : ''}
                  </span>
                ))
              }
            </div>
          </div>
          <Mask show={show} onClick={this.onCancel} />
          <div className={cls} {...others}>
            <div className="mui-picker-header">
              <div className="mui-left-btn" onClick={this.onCancel}>{letfbtn}</div>
              <div className="mui-picker-title">{title}</div>
              <div className="mui-right-btn" onClick={this.onOk}>{rightbtn}</div>
            </div>
            <div className='mui-picker-body'>
              {this.renderPickerBody()}
            </div>
          </div>
        </div>
      );
    }
}

Picker.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  show: PropTypes.bool,
  onOk: PropTypes.func,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  letfbtn: PropTypes.string,
  rightbtn: PropTypes.string,
  extra: PropTypes.string,
  value: PropTypes.array,
  // cascade: PropTypes.bool,
};

Picker.defaultProps = {
  data: [],
  value: [],
  title: '',
  show: false,
  letfbtn: 'Cancel',
  rightbtn: 'Ok',
  extra: '请选择',
  // cascade: false,
  onOk: () => {},
  // onCancel: () => {},
  onClick: () => {},
  onChange: () => {},
};

export default Picker;
