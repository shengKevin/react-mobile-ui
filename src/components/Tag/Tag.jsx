import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './index.less';

class Tag extends React.PureComponent {
  state = {
    type: this.props.type,
  }

  handleClick = () => {
    const { type } = this.state;
    const { type: pType } = this.props;
    const selectedType = pType === 'normal' ? 'primary' : pType;
    const { selected, onClick } = this.props;
    if (selected) {
      this.setState({ 
        type: (type === 'normal') ? selectedType : 'normal'
      });
    }
    onClick && onClick((type === 'normal'));
  }

  render() {
    const { type } = this.state;
    const { className, selected, small, disabled, children, ...others } = this.props;
    const cls = classNames({
      'mui-tag': true,
      [`mui-tag-${type}`]: type,
      'mui-tag-disabled': disabled,
      'mui-tag-sm': small,
      [className]: className,
    });
    return (
      <div className={cls} onClick={this.handleClick} {...others}>
        {children}
      </div>
    );
  }
}

Tag.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Tag.defaultProps = {
  selected: false,
  disabled: false,
  small: false,
  type: 'normal',
};

export default Tag;
