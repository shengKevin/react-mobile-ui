import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

export default class FormItem extends Component {

  static propTypes = {
    childern: PropTypes.any,
  };

  static defaultProps = {
  };

  render() {
    return <div>{this.props.childern}</div>;
  }
}
