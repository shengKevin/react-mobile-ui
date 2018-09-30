import React from 'react';
import PropTypes from 'prop-types';
import { Mask } from '../Mask';
// import { WeCell, WeCellBody } from '../Cell';
import classNames from '../../utils/classnames';
import './index.css';

class ActionSheete extends React.Component {

    handleMaskClick = (e) => {
      const { onClose, onCloseMask } = this.props;
      if (onClose && onCloseMask) {
        onClose(e);
      }
    }

    renderMenuItem = () => {
      return this.props.menus.map((menu, index) => {
        const { label, className, ...others } = menu;
        const cls = classNames({
          'mui-actionsheet-menu-cell': true,
          [className]: className,
        });
        return (
          <div key={index} {...others} className={cls}>{label}</div>
        );
      });
    }

    renderActions = () => {
      return this.props.actions.map((action, index) => {
        const {label, className, ...others} = action;
        const cls = classNames({
          'mui-actionsheet-action-cell': true,
          [className]: className
        });

        return (
          <div key={index} {...others} className={cls}>{label}</div>
        );
      });
    }

    render() {
      const { show, onClose, title, menus, actions, className, onCloseMask, ...others } = this.props;
      const cls = classNames({
        'mui-actionsheet': true,
        'mui-actionsheet-toggle': show,
        [className]: className,
      });
      return (
        <div>
          <Mask show={show} onClick={this.handleMaskClick} />
          <div className={cls} {...others}>
            {title && (
              <div className="mui-actionsheet-title">
                {title}
              </div>)}
            <div className="mui-actionsheet-menus">
              {this.renderMenuItem()}
            </div>
            {actions && (
              <div className="mui-actionsheet-actions">
                {this.renderActions()}
              </div>)}
          </div>
        </div>
      );
    }
}

ActionSheete.defaultProps = {
  show: false,
  onClose: () => {},
  menus: [],
  actions: [], 
  title: '', 
  onCloseMask: true,
};

ActionSheete.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  menus: PropTypes.array,
  actions: PropTypes.array,
  onClose: PropTypes.func,
  onCloseMask: PropTypes.bool,
};


ActionSheete.displayName = 'mui-actionsheet';

export default ActionSheete;
