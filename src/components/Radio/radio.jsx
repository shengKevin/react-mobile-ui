import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Cell, CellBody, CellFooter } from '../Cell';
import classnames from '../../utils/classnames';
import './radio.less';

class Radio extends PureComponent {

    onChange = (e) => {
      e.stopPropagation();
      const { value } = e.target;
      this.props.onChange && this.props.onChange(value, e);
    }

    render() {
      const { children, className, name, id, value, checked, disabled, onChange, ...others } = this.props;
      const cls = classnames({
        [className]: className,
        'mui-container-label': true,
        'mui-radip-disabled': disabled,
      });
      return (
        <label htmlFor={id} className={cls}>
          <Cell>
            <CellBody>
              { children }
            </CellBody>
            <CellFooter>
              <input 
                {...others}
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={this.onChange}
                checked={checked}
                disabled={disabled}
              />
              <label htmlFor={id} className="mui-input-label" />
            </CellFooter>
          </Cell>
        </label>
      );
    }
}

Radio.propTypes = {
  value: (PropTypes.string || PropTypes.number).isRequired,
  name: (PropTypes.string || PropTypes.number).isRequired,
  onChenge: PropTypes.func,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  // checked: PropTypes.bool,
};

Radio.defaultProps = {
  // value: '',
  // name: undefined,
  id: undefined,
  // checked: false,
  disabled: false,
};

export default Radio;
