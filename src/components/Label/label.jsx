import React from 'react';
import classNames from '../../utils/classnames';
import './index.css';

const Label = (props) => {
  const { className, ...others } = props;
  const cls = classNames({
    'mui-label': true,
    [className]: className,
  });
  return <label className={cls} {...others} />;
};

export default Label;
