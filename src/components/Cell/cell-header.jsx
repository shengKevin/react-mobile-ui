import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Cell from './cell.jsx';
import './cell.css';


const CellHeader = (props) => {
  const { className, children, primary, ...others } = props;
  const cls = classNames({
    'myui-cell-header': true,
    'myui-cell-primary': primary,
    [className]: className,
  });

  return (
    <div className={cls} {...others}>{children}</div>
  );
};

CellHeader.propTypes = {
  primary: PropTypes.string,
};

Cell.defaultProps = {
  primary: 'false',
};

export default CellHeader;
