import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

class Icon extends React.PureComponent {

  render() {
    const { type, className, ...others } = this.props;
    const cls = classNames({
      'icon': true,
      [className]: className,
    });
    return (
      <svg className={cls} aria-hidden="true" {...others}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}

Icon.propTypes = {
  type: PropTypes.string,
};

Icon.defaultProps = {
  type: ''
};

export default Icon;
