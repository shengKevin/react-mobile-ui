import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import { Cell, CellBody, CellHeader, CellFooter } from '../Cell';
import classNames from '../../utils/classnames';
import './styles/input.css';

class Input extends PureComponent {
    static timeoutid = null;
    static alerttimeoutid = null;
    state = {
      _value: this.props.value,
      _clear: false,
    };

    componentWillMount() {
      this.initDefaultValue();
    }

    componentWillUnmount() {
      if (this.timeoutid) {
        window.clearTimeout(this.timeoutid);
        this.timeoutid = null;
      }
      if (this.alerttimeoutid) {
        window.clearImmediate(this.alerttimeoutid);
        this.alerttimeoutid = null;
      }
    }

    initDefaultValue = () => {
      const { defaultValue, value } = this.props;
      const _value = defaultValue || value;
      this.setState({ _value });
    }

    handlerOnChange = (e) => {
      e.stopPropagation();
      const { onChange, maxLength, valuerules } = this.props;
      let value = e.target.value;
      if (maxLength) {
        value = value.slice(0, maxLength);
      }
      if (typeof valuerules === 'function') {
        value = value.replace(valuerules(), '');
          
      } else if (typeof valuerules === 'string') {
        switch(valuerules) {
          case 'number':
            value = value.replace(/\D/g, '');
            break;
          case 'string':
            value = value.replace(/[^A-Za-z]/g, ''); 
            break;
          default:
            break;
        }
      }
      this.setState({ _value: value, _clear: !!value });
      onChange instanceof Function && onChange(value, e);
    }

    onFocus = () => {
      if (this.timeoutid) {
        window.clearTimeout(this.timeoutid);
        this.timeoutid = null;
      }
      if (this.state._value) {
        this.setState({ _clear: true });
      }
      this.props.onFocus instanceof Function && this.props.onFocus();
    }

    onBlur = () => {
      this.timeoutid = setTimeout(() => {
        this.setState({ _clear: false });
      }, 200);
      this.props.onBlur && this.props.onBlur();
    }

    getValue = () => {
      return this.state._value;
    }

    setValue = (newVal = '') => {
      if (typeof newVal !== 'string') {
        throw Error('Input expect set string value ');
      }
      this.setState({ _value: newVal });
    }

    doValidate = () => {
      const _this = this;
      const { _value } = _this.state;
      const { rules } = _this.props;
      const len = rules.length;
      for (let i = 0; i < len; i += 1) {
        const { dovalidate, validate, message } = rules[i];
        if (dovalidate) {
          const pass = !!(dovalidate && dovalidate.call(_this, _value));
          if (!pass) {
            if (this.alerttimeoutid) {
              window.clearTimeout(this.alerttimeoutid);
              this.alerttimeoutid = null;
            }
            this.alerttimeoutid = setTimeout(() => {
              alert(message);
            }, 200);
            break;
          }
        } else if (validate) {
          if (!validate.test(_value)) {
            alert(message);
          }
        }
      }
    }

    clearContent = () => {
      this.setState({ _value: '', _clear: false });
    }

    render() {
      const { className, label, placeholder, type, clear, defaultValue, value, onChange, rules, valuerules,  ...others } = this.props;
      const { _value, _clear } = this.state;
      const cls = classNames({
        'mui-cell': false,
        [className]: className
      });
      const icls = classNames({
        'mui-input-clear': true,
        'mui-none': !_clear,
      });
      return (
        <Cell className={cls}>
          <CellHeader>
            <Label>{label}</Label>
          </CellHeader>
          <CellBody>
            <input className="mui-input"
              value={_value}
              placeholder={placeholder}
              onChange={this.handlerOnChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              type={type === 'password' ? type : 'text'}
              {...others}
            />
          </CellBody>
          {clear && (
            <CellFooter>
              <div className={icls} onClick={this.clearContent}>✗</div>
            </CellFooter>)}
        </Cell>
      );
    }
}

Input.propTypes = {
  defaultValue: PropTypes.string || PropTypes.number,
  value: PropTypes.string || PropTypes.number,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  clear: PropTypes.bool,
  rules: PropTypes.arrayOf(PropTypes.shape(
    {
      message: PropTypes.string,
      dovalidate: PropTypes.func,
    } || {
      message: PropTypes.string,
      validate: PropTypes.RegExp,
    }
  )),
  valuerules: PropTypes.func || PropTypes.string,
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  defaultValue: undefined,
  value: '',
  label: '标题',
  type: 'text',
  placeholder: '',
  clear: false,
  rules: [],
  valuerules: undefined,
  maxLength: Infinity,
};

Input.displayName = 'MuiInput';

export default Input;
