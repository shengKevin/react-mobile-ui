import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './index.less';

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    const { page, initialPage, direction, tabBarPosition } = props;
    this.state = {
      _page: page || initialPage,
      _tabBarPosition: tabBarPosition || direction === 'vertical' ? 'right' : 'bottom',
    };
  }

  handleTabClick = (item, index) => {
    const { onTabClick, onChange } = this.props;
    this.setState({
      _page: index
    }, () => {
      onTabClick(item, index);
      onChange(item, index);
    });
  }

  render() {
    const { _page, _tabBarPosition } = this.state;
    const { tabs, tabBarPosition, direction, children, className, initialPage, page, animated, onTabClick, onChange, ...others } = this.props;
    if (!tabs.length) return null;
    const tabWidth = `${100 / tabs.length}%`;
    const tabHeight = `${100 / tabs.length}%`;
    const isVertival = direction === 'vertical';
    const lineStyles = {
      width: !isVertival ? tabWidth : 'auto',
      height: isVertival ? tabHeight : 'auto',
      left: !isVertival ? `${100 * _page / tabs.length}%` : 'none',
      top: isVertival ? `${100 * _page / tabs.length}%` : 'none',
      [`${_tabBarPosition}`]: 0,
      transition: `${animated ? isVertival ? 'top' : 'left' : 'none'} .3s` 
    };
    const cls = classNames({
      'mui-tabs': true,
      'mui-tabs-top': !isVertival,
      'mui-tabs-left': isVertival,
      [className]: className,
    });
    const wcls = classNames({
      'mui-tabs-bar-wrap': true,
      [`mui-tabs-bar-wrap-${direction}`]: true,
      [className]: className,
    });
    const contentStyles = { 
      transform: isVertival
        ? `translate3d(0px, -${_page * 100}%, 1px)`   
        : `translate3d(-${_page * 100}%, 0px, 1px)`,
    };
    const contentcls = classNames({
      'mui-tabs-content-wrap': true,
      'mui-tabs-content-wrap-vertical': isVertival,
      'mui-tabs-content-wrap-animation': animated,
    });
    return (
      <div className={cls} {...others}>
        <div className={wcls}>
          {
            tabs.map((item, index) => {
              const tabCls = classNames({
                'mui-tabs-default-tab': true,
                [`mui-tabs-default-tab-${direction}`]: true,
                'mui-tabs-bar-tab-active': _page === index,
              });
              const itemStyle = !isVertival ? {width: tabWidth} : {height: tabHeight};
              return (
                <div
                  style={itemStyle}
                  key={index}
                  className={tabCls}
                  onClick={(e) => { this.handleTabClick(item, index); }}
                >
                  {item.title}</div>
              );
            })
          }
          <div style={lineStyles} className="mui-tabs-tab-line" />
        </div>
        <div className={contentcls} style={contentStyles}>
          {
            React.Children.map(children, (child, i) => {
              const pcls = classNames({
                [`mui-tabs-pane-wrap-${direction}`]: true,
                [`mui-tabs-pane-wrap-active-${direction}`]: _page === i,
                [`mui-tabs-pane-wrap-inactive-${direction}`]: _page !== i,
              });
              return <div className={pcls}>{child}</div>;
            })
          }
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array,
  direction: PropTypes.string,
  initialPage: PropTypes.number,
  page: PropTypes.number,
  animated: PropTypes.bool,
  // swipeable: PropTypes.bool,
  onChange: PropTypes.func,
  onTabClick: PropTypes.func,
  tabBarPosition: PropTypes.string,
};

Tabs.defaultProps = {
  tabs: [],
  direction: 'horizontal',
  animated: true,
  // swipeable: true,
  // tabBarPosition: '',
  page: undefined,
  initialPage: 0,
  onChange: () => {},
  onTabClick: () => {},
};

export default Tabs;
