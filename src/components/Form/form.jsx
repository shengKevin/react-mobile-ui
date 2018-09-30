import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './index.css'

/**
 *  wrapper for form
 */

class Form extends Component {

  static propTypes = {

  };

  static defaultProps = {

  };

  submit = () => {
      
  }

  render() {
    const { children, className, onSubmitm, ...others } = this.props;
    const cls = classNames({
      'mui-form': true,
      [classNames]: className,
    });

    return (
      <div className={cls} onSubmit={this.submit} {...others}>
        {children}
      </div>
    );
  }
}

export default Form;
