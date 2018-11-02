import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './index.less';
import { Icon } from '../Icon';

class Step extends React.PureComponent {
  // , process, finish, error
  renderIcon = () => {
    const { icon, showIcon, status, index } = this.props;
    if (showIcon && icon) {
      return typeof icon === 'string' ? <Icon type={icon} size="md" /> : icon; 
    }
    switch(status) {
      case 'finish':
        return <Icon style={{color: '#FF5A10'}} type="icon-check-circle" size='md' />;
      case 'process':
        return <span className="mui-steps-icon">{index + 1}</span>;
      case 'wait':
        return <span className="mui-steps-icon" />;
      case 'error':
        return <Icon style={{color: '#f4333c'}} type="icon-close-circle" size='md' />;
      default:
        return null;
    }
  }


  render() {
    const { children, direction, className, lastStep, status, type, title, description, icon, showIcon, ...others } = this.props;
    const IconElement = this.renderIcon();
    const cls = classNames({
      'mui-steps-item': true,
      [className]: className,
    });
    const hasborder = !showIcon && status && status !== 'finish' && status !== 'error';
    const icls = classNames({
      'mui-steps-item-icon': true,
      'mui-icon-border': hasborder,
      'mui-icon-border-finish': hasborder && status === 'process',
      [className]: className,
    });
    const tcls = classNames({
      'mui-steps-item-tail': !lastStep && status !== 'finish' && direction !== 'vertical',
      // 'mui-steps-item-tail-finish': status === 'finish',
      [`mui-steps-item-tail-${direction}`]: !lastStep,
      [`mui-steps-item-tail-${direction}-finish`]: status === 'finish',
    });
    const ccls = classNames({
      'mui-steps-item-content': true,
      [`mui-steps-item-content-${direction}`]: true,
    });
    return (
      <div className={cls} {...others}>
        <div className={tcls} />
        <div className={icls}>
          {IconElement}
        </div>
        <div className={ccls}>
          {title && <div className="mui-steps-item-title">{title}</div>}
          {description && <div className="mui-steps-item-description">{description}</div>}
        </div>
      </div>
    );
  }
}

Step.propTypes = {
  // wait, process, finish, error
  status: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  showIcon: PropTypes.bool,
  type: PropTypes.string,
  direction: PropTypes.string,
  lastStep: PropTypes.bool,
};

Step.defaultProps = {
  status: '',
  title: '',
  description: '',
  icon: '',
  showIcon: false,
  type: 'default',
  direction: 'horizontal',
  lastStep: false,
};

Step.displayName = 'mui-step';

export default Step;
