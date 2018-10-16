import React from 'react';
import classNames from '../../utils/classnames';
import './index.less';

const Switch = (props) => {
  const { className, ...others } = props;
  const cls = classNames({
    'mui-switch': true,
    [className]: className
  });

  return (
    <div>
      <input className={cls} type="checkbox" {...others} />
    </div>
  );
};

export default Switch;
