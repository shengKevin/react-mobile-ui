import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './index.less';

class Icon extends React.PureComponent {

  render() {
    const { type, className, size, ...others } = this.props;
    const cls = classNames({
      'icon': true,
      'mui-icon-lg': size === 'lg',
      'mui-icon-md': size === 'md',
      'mui-icon-sm': size === 'sm',
      'mui-icon-xs': size === 'xs',
      'mui-icon-xxs': size === 'xxs',
      [className]: className,
    });
    return (
      <svg className={cls} aria-hidden="true" {...others}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}

Icon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  type: '',
  size: 'xxs',
};

export default Icon;
