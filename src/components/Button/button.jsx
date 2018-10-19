import React, { PureComponent } from 'react';
import PropType from 'prop-types';
import classNames from '../../utils/classnames';
import './styles/index.less';

/**
 *  Button 
 */

export default class Button extends PureComponent {
  static PropType = {
    disabled: PropType.bool,
    type: PropType.string,
    size: PropType.string,
    inline: PropType.string,
  };

  static defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal',
    inline: false,
  };

  render() {
    const { className, component, disabled, inline, type, size, children, ...others } = this.props;
    const Component = component || 'button';
    const btnclass = classNames({
      'mui-btn' : true,
      'mui-btn-primary': type === 'primary',
      'mui-btn-default': type === 'default',
      'mui-btn-warning': type === 'warning',
      'mui-btn-ghost': type === 'ghost',
      'mui-btn-small': size === 'small',
      'mui-btn-disabled': disabled,
      'mui-btn-inline': inline,
      [className]: className,
    });
    return (
      <Component disabled={disabled} className={btnclass} {...others}>{children}</Component>
    );
  }
}
