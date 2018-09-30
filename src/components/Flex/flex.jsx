import React from 'react';
import './flex.css';

const Flex = (props) => {
  return <div className="mui-flex" {...props}>{props.children}</div>;
};

export default Flex;
