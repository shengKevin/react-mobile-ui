import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './index.less';

class Steps extends React.PureComponent {

  renderChildren = () => {
    const { children, current, type, direction } = this.props;
    const len = React.Children.count(children);
    const element = React.Children.map(children, (child, index) => {
      if (child.type && child.type.displayName === 'mui-step') {
        const childProps = {
          type,
          direction,
          showIcon: child.props.showIcon,
          lastStep: (len - 1) === index,
          index,
          status: child.props.status,
        };
        if (!child.props.status) {
          if (index === current) {
            childProps.status = 'process';
          } else if (index < current) {
            childProps.status = 'finish'; 
          } else {
            childProps.status = 'wait'; 
          }
        }
        return React.cloneElement(child, childProps);
      }
      return null;
    });
    return element;
  }

  render() {
    const { children, className, current, type, direction, ...others } = this.props;
    const cls = classNames({
      'mui-steps': true,
      [`mui-steps-${direction}`]: true, 
      [className]: className,
    });
    return (
      <div className={cls} {...others}>
        {this.renderChildren()}
      </div>
    );
  }
}

Steps.propTypes = {
  current: PropTypes.number,
  type: PropTypes.string,
  direction: PropTypes.string,
};

Steps.defaultProps = {
  current: 0,
  type: 'default',
  direction: 'horizontal', // horizontal or vertical
};

export default Steps;
