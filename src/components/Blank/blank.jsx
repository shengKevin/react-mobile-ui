import React from 'react';
import './index.css';

const Blank = (props) => {
  return (<div className="mui-blank" {...props}>{props.children}</div>);
};

export default Blank;
