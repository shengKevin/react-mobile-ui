import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from '../../../src/utils/classnames';
import Item from './item.jsx';
import SubMenu from './subMenu.jsx';
// import './index.less';
import './index.css';

class Menu extends React.PureComponent {

  state = {
    selectedKeys: this.props.selectedKeys,
    openKeys: this.props.openKeys,
  };

  handleOpenKeysData = (arr, key, accordion) => {
    const newArr = [];
    const cur = arr.findIndex(item => key === item);
    // accordion === true 只能打开一个下拉菜单
    if (accordion) {
      if (cur === -1) {
        newArr.push(key);
      }
    } else if (cur > -1) {
      newArr.splice(cur, 1);
    } else {
      newArr.push(key);
    }
    return newArr;
  }

  handleClick = (key, e) => {
    const { onClick } = this.props;
    e.stopPropagation();
    this.setState({
      selectedKeys: [key],
    }, () => {
      onClick && onClick(key, e);
    });
    
  }

  handleOpenKeys = (key) => {
    const { openKeys } = this.state;
    const { accordion } = this.props;
    this.setState({
      openKeys: this.handleOpenKeysData(openKeys, key, accordion),
    });
  }

  renderChildren = () => {
    const me = this;
    const { children, defaultKeys } = me.props;
    const { selectedKeys } = this.state;
    const len = React.Children.count(children);
    if (!len) return false;
    const el = React.Children.map(children, (child, index) => {
      if (!!child.type && (child.type.displayName === 'mui-submenu' || child.type.displayName === 'mui-menu-item')) {
        return React.cloneElement(child, {
          id: `${index}`,
          subkey: child.key,
          itemkey: child.key,
          selectedKeys,
          defaultKeys,
          onClick: child.type.displayName === 'mui-submenu'
            ? me.handleClick.bind(me)
            : me.handleClick.bind(me, child.key),
          onChange: me.handleOpenKeys,
        });
      }
      return null;
    });
    return el;
  }

  render() {
    const { children, className, selectedKeys,
      defaultKeys, openKeys, onClick, accordion,
      ...others } = this.props;
    const cls = classNames({
      'mui-menu': true,
      className: [className],
    });
    return (
      <div>
        <ul className={cls} {...others}>
          {this.renderChildren()}
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  selectedKeys: PropTypes.array,
  defaultKeys: PropTypes.array,
  openKeys: PropTypes.array,
  accordion: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

Menu.defaultProps = {
  selectedKeys: [],
  defaultKeys: [],
  openKeys: [],
  accordion: true,
  onClick: () => {},
  onChange: () => {},
};

Menu.Item = Item;
Menu.SubMenu = SubMenu;

export default Menu;
