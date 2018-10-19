import React from 'react';
import './index.css';
import classNames from '../../utils/classnames';

const Blank = (props) => {
  const { size = 'md', children, className, ...others } = props;
  const cls = classNames({
    'mui-blank': size === 'md',
    'mui-blank-lg': size === 'lg',
    'mui-blank-sm': size === 'sm',
    [className]: className,
  });
  return (<div className={cls} {...others}>{children}</div>);
};

export default Blank;
