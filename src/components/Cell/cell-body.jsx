import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
// import './cell.css';

const CellBody = (props) => {
  const { className, children, primary, ...others} = props;
  const cls = classNames({
    'myui-cell-body': true,
    'myui-body-primary': primary,
    [className]: className,
  });

  return (
    <div className={cls} {...others}>{children}</div>
  );
};

CellBody.defaultProps = {
  primary: false,
};

CellBody.propTypes = {
  primary: PropTypes.bool
};

export default CellBody;
