import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './cell.css';

/**
 * Cell consist of `CellBody`, `CellHeader` and `CellFooter` for flexible reason
 *
 */
const Cell = (props) => {
  const { className, children, href, component, cellafter = true, cellbefore = false, ...others } = props;
  const DefaultComponent = href ? 'a' : 'div';
  const CellComponent = component || DefaultComponent;
    
  const cls = classNames({
    'mui-cell': true,
    'mui-cell-before': cellbefore,
    'mui-cell-after': cellafter,
    [className]: className
  });

  return (
    <CellComponent
      className={cls}
      href={href}
      {...others}
    >
      { children }
    </CellComponent>
  );
};

Cell.defaultProps = {
  cellbefore: false,
  cellafter: true,
};

Cell.propTypes = {
  link: PropTypes.bool,
  component: PropTypes.func,
  cellbefore: PropTypes.bool,
  cellafter: PropTypes.bool,
};

Cell.displayName = 'Cell';

export default Cell;
