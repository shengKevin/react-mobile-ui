import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './index.css';

const Mask = (props) => {
  const { show, ...others } = props;
  const cls = classNames({
    'mui-mask': show,
    'mui-mask-hidden': !show,
  });
  return <div className={cls} {...others} />;
};

Mask.defaultProps = {
  show: true,
};

Mask.propTypes = {
  show: PropTypes.bool,
};

Mask.displayName = 'mui-mask';

export default Mask;
