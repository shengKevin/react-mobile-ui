import React from 'react';
// import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './cell.css';

const CellFooter = (props) => {
  const { className, children, ...others } = props;
  const cls = classNames({
    'mui-cell-footer': true,
    [className]: className    
  });
  return (<div className={cls} {...others}>{children}</div>);     
};

// CellFooter.propTypes = {

// };

// CellFooter.defaltProps = {

// };

export default CellFooter;
