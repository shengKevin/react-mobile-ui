import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel.jsx';
import './index.less';

class Accordion extends PureComponent {
  constructor(props) {
    super(props);
    const { activeKeys, defaultActiveKeys } = props;

    this.state = {
      activeKeys: defaultActiveKeys.length > 0 ? defaultActiveKeys : activeKeys,
    };
  }

  handlerActivekeys = (arr, key) => {
    const newArr = [...arr];
    const cur = arr.findIndex(item => key === item);
    if (cur > -1) {
      newArr.splice(cur, 1);
    } else {
      newArr.push(key);
    }
    return newArr;
  }

  handlerAccordionActivekeys = (arr, key) => {
    const newArr = [];
    const cur = arr.findIndex(item => key === item);
    if (cur === -1) {
      newArr.push(key);
    }
    return newArr;
  }

  onChange = (key, e) => {
    const { onChange, accordion } = this.props;
    const { activeKeys } = this.state;
    this.setState({
      activeKeys: accordion ? this.handlerAccordionActivekeys(activeKeys, key) : this.handlerActivekeys(activeKeys, key),
    }, () => {
      onChange && onChange(this.state.activeKeys, e);
    });
  }

  renderChild = () => {
    const me = this;
    const { children } = me.props;
    const { activeKeys } = me.state;
    const len = React.Children.count(children);
    if (!len) return false;
    const el = React.Children.map(children, (child, index) => {
      if (!!child.type && child.type.displayName === 'mui-panel') {
        return React.cloneElement(child, {
          id: `${index}`,
          activeKeys,
          onChange: me.onChange.bind(me),
        });
      }
      return null;
    });
    return el;
  }

  render() {
    const { children, accordion, activeKeys, defaultActiveKeys, ...others } = this.props;
    return (
      <div {...others}>
        {this.renderChild()}
      </div>
    );
  }
}

Accordion.propTypes = {
  activeKeys: PropTypes.array,
  defaultActiveKeys: PropTypes.array,
  onChange: PropTypes.func,
  accordion: PropTypes.bool,
};

Accordion.defaultProps = {
  activeKeys: [],
  defaultActiveKeys: '',
  onChange: () => {},
  accordion: false,
};

Accordion.displayName = 'mui-accordion';

Accordion.Panel = Panel;

export default Accordion;
