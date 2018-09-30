import React from 'react';
import './index.css';

const Space = (props) => (
  <div className="mui-space" {...props}>{props.children}</div>
);

export default Space;
