import React from 'react';
import PropTypes from 'prop-types';
import { Mask } from '../Mask';
import PickerGroup from './picker-group.jsx';
import classNames from '../../utils/classnames';
import './index.less';

class CascadePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.initState();
  }

    initState = () => {
      const { level, value, data } = this.props;
      const state = {};
      const groupkeys = [];
      for (let i = 0; i < level; i += 1) {
        if (i === 0) {
          state[`group${i}`] = data;
        } else {
          const len = groupkeys.length;
          const { children = [] } = state[`group${i - 1}`][groupkeys[len - 1]];
          state[`group${i}`] = children;
        }     
        const key = state[`group${i}`].findIndex(({ value: itemValue }) => itemValue === value[i]);
        key === -1 ? groupkeys.push(0) : groupkeys.push(key);
      }
      return { ...state, ...{ groupkeys }};
    }

    findGroup = (data, index, nextIndex = 0) => {
      for (let i = 0; i < data.length; i += 1) {
        const { children = [], ...others} = data[i];
        const group = [];
        group.push(others);
        if (index !== nextIndex) {
          if (children.length) {
            this.findGroup(children, index, nextIndex += 1);
          }
        }
      }
    }

    onCancel = (e) => {
      e.stopPropagation();
      this.props.onCancel && this.props.onCancel(e);
    }

    onOk = (e) => {
      e.stopPropagation();
      const completeValue = [];
      const value = [];
      const { groupkeys } = this.state;
      const { level } = this.props;
      for (let i = 0; i < level; i += 1) {
        const index = groupkeys[i] || 0;
        const val = this.state[`group${i}`][index] || {};
        value.push(val.value);
        completeValue.push(val);
      }
      this.props.onOk && this.props.onOk(value, completeValue, e);
    }

    levelMap = (level) => {
      const newArr = [];
      for (let i = 0; i < level; i += 1) {
        newArr.push(i);
      }
      return newArr;
    }

    renderPickerBody = () => {
      const { level } = this.props;
      const { groupkeys } = this.state;
      const el = this.levelMap(level).map((item, index) => {
        return (
          <PickerGroup
            gkey={index}
            key={index}
            data={this.state[`group${item}`]}
            onChange={this.handleChange}
            activeIndex={groupkeys[index]}
            />
        );
      });
      return el;
    }

    updateState = (value, index, gkey) => {
      const { groupkeys } = this.state;
      const newState = {};
      const len = groupkeys.length;
      const arr = [];
      for (let i = gkey + 1; i < len; i += 1) {
        if (i === gkey + 1) {
          newState[`group${i}`] = value.children;
        } else {
          const newGroup = newState[`group${i - 1}`][0] || {};
          newState[`group${i}`] = newGroup.children;
        }
        arr.push(0);
      }
      groupkeys.splice(gkey, len - gkey, index);
      return {...newState, ...{ groupkeys: [...groupkeys, ...arr] }};
    }

    handleChange = (value, index, gkey) => {
      if (this.state.groupkeys[gkey] !== index) {
        const updateState = this.updateState(value, index, gkey);
        this.setState({ ...this.state, ...updateState });
      }
    }

    findLabel(value) {
      const svalue = [];
      for (let i = 0; i < value.length; i += 1) {
        const group = this.state[`group${i}`] || [];
        const obj = group.find(item => item.value === value[i]) || {};
        svalue.push(obj.label);
      }
      return svalue;
    }

    render() {
      const { 
        data, show, extra, value, cascade,
        letfbtn, rightbtn, title,
        onOk, onCancel, onClick,
        children, className, ...others
      } = this.props;
      const cls = classNames({
        'mui-picker-up': show,
        'mui-picker-down': !show,
        [className]: className,
      });
      const svalue = value.length > 0 ? this.findLabel(value) : [extra];
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
                svalue.map((item, index) => (
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

CascadePicker.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  show: PropTypes.bool,
  onOk: PropTypes.func,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  letfbtn: PropTypes.string,
  rightbtn: PropTypes.string,
  extra: PropTypes.string,
  value: PropTypes.array,
  level: PropTypes.number,
  onCancel: PropTypes.func,
};

CascadePicker.defaultProps = {
  data: [],
  value: [],
  title: '',
  show: false,
  letfbtn: 'Cancel',
  rightbtn: 'Ok',
  extra: '请选择',
  level: 1,
  onOk: () => {},
  onCancel: () => {},
  onClick: () => {},
};

CascadePicker.displayName = 'mui-cascade-picker';

export default CascadePicker;
