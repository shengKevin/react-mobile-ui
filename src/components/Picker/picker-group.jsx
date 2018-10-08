import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './picker-group.css';

class PickerGroup extends React.Component {
  state = {
    touching: false,
    ogY: 0,
    translate: -this.props.activeIndex * this.props.itemheight,
    touchId: undefined,
  };

  componentWillReceiveProps(nextProps) {
    const { activeIndex, data, itemheight } = this.props;
    const { activeIndex: nextactive, data: nextdata } = nextProps;
    if (activeIndex !== nextactive) {
      this.setState({
        translate: -nextactive * itemheight,
      });
    }
    if (data.length > nextProps.data.length) {
      const { translate } = this.state;
      if (Math.abs(translate / itemheight) > nextProps.data.length) {
        const offset = Math.abs(Math.abs(translate / itemheight) - (nextdata.length - 1)) * itemheight;
        this.setState({ translate: translate + offset }, () => this.updateSelected());
      }
    }
  }

  renderPickerGroupBody = () => {
    const { data } = this.props;
    const el = data.map((item, index) => {
      const { label, ...others } = item;
      return (<div key={index} className='mui-prikergroup-item' {...others}>{label}</div>);
    });
    return el;
  }

  handleTouchStart = (e) => {
    const { translate, touching } = this.state;
    if (touching || this.props.data.length <= 1) return;
    const targetTouches = e.targetTouches[0] || {};
    const { pageY, identifier } = targetTouches;
    this.setState({
      touching: true,
      touchId: identifier,
      ogY: translate === 0 ? pageY : pageY - translate,
    });
  }

  handleTouchMove = (e) => {
    const { ogY, touching, touchId } = this.state;
    if (!touching || this.props.data.length <= 1) return;
    if (e.targetTouches[0].identifier !== touchId) return;
    // e.preventDefault();
    const pageY = e.targetTouches[0].pageY;
    const diffY = pageY - ogY;

    this.setState({
      translate: diffY,
    });
    
  }

  hanldeTouchEnd = () => {
    let { translate: lastTranslate, touching } = this.state;
    // identifiertop, identifierbottom, itemHeight 可设置，暂时用defaultProps
    const { itemheight, data } = this.props;
    if (!touching || data.length <= 1) return;
    const itemContent = itemheight * data.length;
    let itemOffset = lastTranslate % itemheight;
    const otherOffset = lastTranslate - itemOffset;
    if (lastTranslate > 0) {
      // down
      lastTranslate = 0;
    } else if (Math.abs(lastTranslate) > itemContent - itemheight) {
      // up
      lastTranslate = itemheight - itemContent;
      // else {
      // if (Math.abs(lastTranslate) > itemContent - itemheight) {
      //   lastTranslate = itemheight - itemContent;
      // } else {
      //   if (Math.abs(itemOffset) > itemheight / 2 + 1) {
      //     lastTranslate = otherOffset - itemheight;
      //   } else {
      //     lastTranslate = otherOffset;
      //   }
      // }
      // }
    } else if (Math.abs(itemOffset) > itemheight / 2 + 1) {
      lastTranslate = otherOffset - itemheight;
    } else {
      lastTranslate = otherOffset;
    }
    this.setState({
      touching: false,
      touchId: undefined,
      ogY: 0,
      translate: lastTranslate,
    }, () => this.updateSelected());
  }

  updateSelected() {
    const { translate } = this.state;
    const { itemheight, data, gkey } = this.props;
    const index = Math.abs(translate / itemheight);
    this.handleChange(data[index], index, gkey);
  }

  handleChange(value, index, gkey) {
    this.props.onChange && this.props.onChange(value, index, gkey);
  }

  render() {
    const { data, className, activeIndex, ...others } = this.props;
    const cls = classNames({
      'mui-pickergroup-wrapp': true,
      [className]: className,
    });
    const styles = {
      'transform': `translate(0, ${this.state.translate}px)`,
      'transition': 'transform .3s',
    };
    return (
      <div 
        className={cls}
        {...others}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.hanldeTouchEnd}
      >
        <div className="mui-pickergrounp-col">
          <div className="mui-pickergroup-mask" />
          <div className="mui-pickergroup-indicator" />
          <div
            style={styles}    
            className="mui-pickergroup-content"
          >
            {this.renderPickerGroupBody()}
          </div>
        </div>
      </div>
    );
  }
}

PickerGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string || PropTypes.number,
    value: PropTypes.string || PropTypes.number,
    children: PropTypes.array,
  })),
  itemheight: PropTypes.number,
  identifiertop: PropTypes.number,
  identifierbottom: PropTypes.number,
  // groupkey 当前是第几个group
  gkey: PropTypes.number.isRequired, 
  activeIndex: PropTypes.number,
  // cascade: PropTypes.bool,
  onChange: PropTypes.func,
}

PickerGroup.defaultProps = {
  data: [],
  itemheight: 34,
  identifiertop: 102,
  identifierbottom: 102,
  // gkey: 0,
  // cascade: false,
  activeIndex: 0,
  onChange: () => {},
};

PickerGroup.displayName = 'mui-picker-group';

export default PickerGroup;
