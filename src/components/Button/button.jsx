import React, { PureComponent } from 'react';
import PropType from 'prop-types';
import classNames from '../../utils/classnames';
import './styles/index.css';

/**
 *  Button 
 */

export default class Button extends PureComponent {
  static PropType = {
    disabled: PropType.bool,
    type: PropType.string,
    size: PropType.string,
  };

  static defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal',
  };

  render() {
    const { className, component, type, size, children, ...others } = this.props;
    const Component = component || 'button';
    const btnclass = classNames({
      'mui-btn' : true,
      'mui-btn-primary': type === 'primary',
      'mui-btn-default': type === 'default',
      'mui-btn-warning': type === 'warning',
      'mui-btn-small': size === 'small',
      'mui-btn-disabled': this.props.disabled,
      [className]: className,
    });
    return (
      <Component className={btnclass} {...others}>{children}</Component>
    );
  }
}
