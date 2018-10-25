import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import classNames from '../../utils/classnames';
import './index.less';

class Toast extends React.Component {
  // static id = null;
  // state = {
  //   _show: this.props.show,
  // };

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.show) {
  //     const { duration, onClose } = this.props;
  //     this.setState({_show: true});
  //     if (this.id) {
  //       window.clearTimeout(this.id);
  //       this.id = null;
  //     }
  //     this.id = setTimeout(() => {
  //       this.setState({_show: false, () => {onClose()}});
  //     }, duration * 1000);
  //   }
  // }

  // componentWillUnmount() {
  //   if (this.id) {
  //     window.clearTimeout(this.id);
  //     this.id = null;
  //   }
  // }

  render() {
    // const { _show } = this.state;
    const { className, children, show, text, size, icon, ...others } = this.props;
    const showCls = classNames({
      'mui-toast-show': show,
      'mui-toast-hidden': !show,
      [className]: className,
    });
    const cls = classNames({
      'mu-toast': true,
      [className]: className,
    });
    return (
      <div className={showCls}>
        <div className={cls} {...others}>
          {icon && <Icon type={icon} size={size} />}
          {text && <p>{text}</p>}
          {children}
        </div>
      </div>
    );
  }
}

Toast.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.any,
  // duration: PropTypes.number,
  // onClose: PropTypes.func,
};

Toast.defaultProps = {
  icon: '',
  show: false,
  text: '',
  size: 'md',
  // duration: 3,
};

export default Toast;
