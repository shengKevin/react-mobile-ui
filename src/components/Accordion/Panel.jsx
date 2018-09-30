import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Cell, CellBody, CellFooter, CellHeader } from '../Cell';
import { Icon } from '../Icon';
import './index.less';
import classNames from '../../utils/classnames';

class Panel extends PureComponent {
  state = {

  };

  handlerClick = (e) => {
    e.stopPropagation();
    const { id, onChange } = this.props;
    onChange && onChange(id, e);
  }

  render() {
    const { children, className, header, activeKeys, id, ...others } = this.props;
    const isOpen = !!activeKeys.find(item => item === id);
    const content = isOpen ? children : null;
    const cls = classNames({
      'mui-accrodion-icon': true,
      'mui-accrodion-icon-down': isOpen,
      [className]: className,
    });
    return (
      <div className="mui-accrodion-panel" key={id} {...others}>
        <Cell cellbefore onClick={this.handlerClick}>
          <CellHeader style={{ flexBasis: '60%' }}>{header}</CellHeader>
          <CellBody />
          <CellFooter className={cls}><Icon type="icon-up" /></CellFooter>
        </Cell>
        <CSSTransition
          classNames="mui-panel-wrapp"
          in={isOpen}
          timeout={{ enter: 500, exit: 0, appear: 500}}
        >
          <div>{content}</div>
        </CSSTransition>
      </div>
    );
  }
}

Panel.propTypes = {
  header: PropTypes.string || PropTypes.element,
  id: PropTypes.string,
  activeKeys: PropTypes.array,
};

Panel.defaultProps = {
  header: '',
  id: '0',
  activeKeys: [],
};

Panel.displayName = 'mui-panel';

export default Panel;
