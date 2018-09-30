import React from 'react';
import PropTypes from 'prop-types';
import './flex.css';

const FlexItem = (props) => {
  const { component: Component, children, ...others } = props;
  return (
    <Component className="mui-flex-item" {...others}>{children}</Component>
  );
};

FlexItem.propTypes = {
  component: PropTypes.node
};

FlexItem.defaultProps = {
  component: 'div'
};

export default FlexItem;
