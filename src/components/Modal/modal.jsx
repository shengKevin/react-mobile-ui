import React from 'react';
import PropTypes from 'prop-types';
import { Mask } from '../Mask';
import classNames from '../../utils/classnames';
import './index.css';

class Modal extends React.Component {

    handleCloseMask = (e) => {
      e.stopPropagation();
      const { onClose, onClosemask} = this.props;
      if (onClose && onClosemask) {
        onClose();
      }
    }

    renderActions = () => {
      return this.props.actions.map((action, index) => {
        const {label, className, ...others} = action;
        const cls = classNames({
          'mui-modal-action-cell': true,
          'mui-modal-action-cell-before': index !== 0,
          [className]: className
        });
        return (
          <div key={index} {...others} className={cls}>{label}</div>
        );
      });
    }

    render() {
      const { className, visible, onClosemask, children, title, actions, ...others } = this.props;
      const cls = classNames({
        'mui-modal-content': true,
        [className]: className,
      });
      return (
        <div className={visible ? '' : 'mui-modal-none'} {...others}>
          <Mask show={visible} />
          <div className="mui-modal-wrapp" onClick={this.handleCloseMask}>
            <div className={cls}>
              {title && <div className="mui-modal-title">{title}</div>}                         
              {children}
              {actions.length > 0 && (
                <div className="mui-modal-actions">
                  {this.renderActions()}
                </div>)}
            </div>
          </div>
        </div> 
      );
    }
}

Modal.propTypes = {
  visible: PropTypes.bool,
  onClosemask: PropTypes.bool,
  title: PropTypes.string,
  actions: PropTypes.array,
  className: PropTypes.string,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  visible: false,
  onClosemask: true,
  title: '',
  actions: [],
  onClose: () => {},
};

Modal.displayName = 'mui-modal';

export default Modal;
