import React from 'react';
import { PropTypes } from 'prop-types';
import { Icon } from '../../../src/components/Icon';
import Item from './item.jsx';
import './index.less';

class SubMenu extends React.PureComponent {

  handleOpen = () => {
    const { subkey, onChange } = this.props;
    !!onChange && onChange(subkey);
  }

  renderChildren = () => {
    const { children, defaultKeys, selectedKeys } = this.props;
    const me = this;
    const len = React.Children.count(children);
    if (!len) return false;
    const el = React.Children.map(children, (child, index) => {
      if (!!child.type && (child.type.displayName === 'mui-menu-item')) {
        return React.cloneElement(child, {
          defaultKeys,
          selectedKeys,
          id: `${index}`,
          itemkey: child.key,
          // onClick: me.handleClick.bind(me),
          onClick: me.props.onClick.bind(me, child.key),
        });
      }
      return null;
    });
    return el;
  }

  render() {
    const { id, title } = this.props;
    return (
      <li key={id}>
        <div className="mui-submenu-title" onClick={this.handleOpen}>
          <span className="mui-sbmenu-text">{title}</span>
          {/* <span className="mui-sbmenu-icon"><Icon type="icon-up" /></span> */}
        </div>
        <ul className="mui-submenu-item">{this.renderChildren()}</ul>
      </li>
    );
  }
}

SubMenu.propTypes = {
  selectedKeys: PropTypes.array,
  defaultKeys: PropTypes.array,
  title: PropTypes.any,
  id: PropTypes.string,
  subkey: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.any,
};

SubMenu.defaultProps = {
  selectedKeys: [],
  defaultKeys: [],
  title: '',
  id: '',
  subkey: '',
  onChange: () => {},
};

SubMenu.Item = Item;
SubMenu.displayName = 'mui-submenu';

export default SubMenu;
