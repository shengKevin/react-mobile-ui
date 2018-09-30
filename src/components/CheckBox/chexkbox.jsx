import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import { Cell, CellBody } from '../Cell';
import './checkbox.css';

// const Checkbox = (props) => {

class Checkbox extends React.Component {

    onChange = (e) => {
      e.stopPropagation();
      const { checked } = e.target;
      this.props.onChange && this.props.onChange(checked, e);
    }
    
    render() {
      const { className, children, checked, name, value, onChange, ...others } = this.props;
      const cls = classNames({
        'mui-input-checkbox': true,
        [className]: className
      });
      if (!children && !value) return null;
      return (
        <Cell cellbefore>
          <input
            {...others}
            checked={checked}
            className={cls}
            id={name}
            name={name}
            type="checkbox"
            onChange={this.onChange}
          /> 
          <label htmlFor={name}>
            <CellBody>
              {value || children}
            </CellBody>
          </label>
        </Cell>
      );
    }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChenge: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  checked: false,
  // name: undefined,
  value: undefined,
};

Checkbox.displayName = 'mui-checkbox';

export default Checkbox;
