import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from '../../../src/utils/classnames';
// import './index.less';
import './index.css';

class Item extends React.PureComponent {

  render() {
    const { children, className, subkey, itemkey, selectedKeys, defaultKeys, ...others } = this.props;
    const cls = classNames({
      'mui-menu-item': true,
      'mui-menu-item-selected': selectedKeys.find(item => item === itemkey),
      className: [className],
    });
    return (
      <li className={cls} {...others}>{children}</li>
    );
  }
}

Item.propTypes = {
  subkey: PropTypes.string,
  itemkey: PropTypes.string,
  selectedKeys: PropTypes.array,
};

Item.defaultProps = {
  subkey: '',
  itemkey: '',
  selectedKeys: [],
};

Item.displayName = 'mui-menu-item';

export default Item;
