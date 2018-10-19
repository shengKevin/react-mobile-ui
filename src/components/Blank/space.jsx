import React from 'react';
import './index.css';
import classNames from '../../utils/classnames';

const Space = (props) => {
  const { children, className, size = 'md', ...others } = props;
  const cls = classNames({
    'mui-space': size === 'md',
    'mui-space-lg': size === 'lg',
    'mui-space-sm': size === 'sm',
    [className]: className,
  });
  return (<div className={cls} {...others}>{children}</div>);
};

export default Space;
