import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from '../../utils/classnames';
import './index.less';

class Swiper extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      containerWidth: 0,
      containerHeight: 0,
      currentIndex: this.props.currentIndex,
      // touch
      touching: false,
      og: 0,
      ogTranslate: 0,
      touchId: undefined,
      translate: 0,
      animating: false,
    };
  }

  componentDidMount() {
    const $container = ReactDOM.findDOMNode(this.refs.container);
    const { direction, children, defaultIndex } = this.props;
    this.setState({
      wrapperWidth: direction === 'horizontal' ? $container.offsetWidth * children.length : $container.offsetWidth,
      wrapperHeight: direction === 'vertical' ? $container.offsetHeight * children.length : $container.offsetHeight,
      containerWidth: $container.offsetWidth,
      containerHeight: $container.offsetHeight,
      translate: defaultIndex <= children.length
        ? direction === 'horizontal' ? $container.offsetWidth * - defaultIndex : $container.offsetHeight * -defaultIndex 
        : 0,
    });
  //console.log($container.offsetWidth, $container.offsetHeight)
  }

  handleTouchStart(e){
    if (this.state.touching || this.props.children.length <= 1) return;

    let og = 0;

    if (this.props.direction === 'horizontal'){
      og = e.targetTouches[0].pageX - this.state.translate;
    } else {
      og = e.targetTouches[0].pageY - this.state.translate;
    }

    this.setState({
      touching: true,
      ogTranslate: this.state.translate,
      touchId: e.targetTouches[0].identifier,
      og: og,
      animating: false
    });
  }

  handleTouchMove(e){
    if (!this.state.touching || this.props.children.length <= 1) return;
    if (e.targetTouches[0].identifier !== this.state.touchId) return;

    //  prevent move background
    e.preventDefault();

    let diff = this.state.translate;

    if (this.props.direction === 'horizontal'){
      const pageX = e.targetTouches[0].pageX;
      diff = pageX - this.state.og;

    } else {
      //  vertical
      const pageY = e.targetTouches[0].pageY;
      diff = pageY - this.state.og;
    }

    this.setState({
      translate: diff
    });
  }

  handleTouchEnd(e){
    if (!this.state.touching || this.props.children.length <= 1) return;

    let translate = this.state.translate;
    let max = this.props.direction === 'horizontal' ? this.state.wrapperWidth - this.state.containerWidth : this.state.wrapperHeight - this.state.containerHeight;
    let currentIndex = this.state.currentIndex;
    let ogIndex = currentIndex;

    if (translate > 0){
      // start
      translate = 0;
    } else if (translate < -max){
      // end
      translate = -max;
    } else {
      // default case
      let diff = Math.abs(translate - this.state.ogTranslate);
      let isNext = (translate - this.state.ogTranslate) < 0 ? true : false;
      // console.log(translate - this.state.ogTranslate, diff, isNext)

      if (diff >= this.props.threshold){

        if (isNext){
          // next slide
          translate = this.state.ogTranslate - ( this.props.direction === 'horizontal' ? this.state.containerWidth : this.state.containerHeight );
          currentIndex += 1;
        } else {
          // prev slide
          translate = this.state.ogTranslate + ( this.props.direction === 'horizontal' ? this.state.containerWidth : this.state.containerHeight );
          currentIndex -= 1;
        }

      } else {
        // revert back
        translate = this.state.ogTranslate;
      }
    }

    this.setState({
      touching: false,
      og: 0,
      touchId: undefined,
      ogTranslate: 0,
      animating: true,
      translate,
      currentIndex
    }, ()=> setTimeout(()=>this.setState({animating: false}), this.props.speed ));

    if (this.props.onChange) this.props.onChange(ogIndex, currentIndex);
}

  renderPagination = () => {
    return this.props.children.map((child, index) => {
      const cls = classNames({
        'mui-swiper-pagination': true,
        active: index === this.state.currentIndex,
      });
      return (
        <span className={cls} key={index} />
      );
    });
  }

  render() {

    const { className, style, children, height, width, defaultIndex, 
      direction, speed, indicators, ...others
    } = this.props;
    const { wrapperWidth, wrapperHeight, animating, translate, containerWidth, containerHeight } = this.state;
    const cls = classNames({
      'mui-swiper-container': true,
      [`mui-swiper-${direction}`]: true,
      [className]: className,
    });

    const containerStyle = {
      height: height ? `${height}px` : '100%',
      width: width ? `${width}px` : '100%',
    };

    const wrapperStyle = {
      width: wrapperWidth,
      height: wrapperHeight,
      transtion: animating ? `transform .${speed / 100}s` : 'none',
      transform: `translate(${direction === 'horizontal' ? translate : 0}px, ${direction === 'vertical' ? translate : 0}px)`,
    };

    return (
      <div
        className={cls}
        style={{...style, ...containerStyle}}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        ref={(c) => { this.container = c; }}
        {...others}
      >
        <div className="mui-swiper-wrapper" style={wrapperStyle}>
          {
            children.map((child, index) => {
              return React.cloneElement(child, {
                className: classNames('mui-swiper-item', child.className),
                key: index,
                style: Object.assign({}, child.props.style, {
                  display: direction === 'horizontal' ? 'inline-block' : 'block',
                  verticalAlign: direction === 'horizontal' ? 'top' : 'bottom',
                  width: containerWidth,
                  height: containerHeight,
                })
              });
            })
          }
        </div>
        {
          indicators 
            ? <div>{ this.renderPagination() }</div>
            : null
        }
      </div>
    );
  }
}

Swiper.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  threshold: PropTypes.number,
  speed: PropTypes.number,
  defaultIndex: PropTypes.number,
  direction: PropTypes.oneOf([['vertical', 'horizontal']]),
  indicators: PropTypes.bool,
  onChange: PropTypes.func,
};

Swiper.defaultProps = {
  height: null,
  width: null,
  defaultIndex: 0,
  threshold: 50,
  speed: 300,
  indicators: true,
};

export default Swiper;
