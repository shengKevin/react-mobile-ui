import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './index.less';

class Toptips extends React.PureComponent {
  render() {
    const { show, type, className, text, children, ...others } = this.props;
    const cls = classNames({
      'mui-toptips': true,
      [`mui-toptips-${type}`]: true,
      'mui-toptips-show': show,
      'mui-toptips-hidden': !show,
      [className]: className
    });
    const content = text || children;
    return (
      <div className={cls} {...others}>
        {content}
      </div>
    );
  }
}

Toptips.propTypes = {
  show: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
};

Toptips.defaultProps = {
  show: false,
  type: 'primary',
  text: '',
};

export default Toptips;
