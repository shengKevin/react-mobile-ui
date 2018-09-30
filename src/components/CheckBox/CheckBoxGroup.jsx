import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './chexkbox.jsx';

class CheckboxGroup extends React.Component {

    onChange = (checked, e) => {
      e.stopPropagation();
      const { name } = e.target;
      const { checkedName } = this.props;
      let checkedArr = Array.isArray(checkedName) ? checkedName : [checkedName];
      if (checked) {
        checkedArr.push(name);
      } else {
        checkedArr = checkedArr.filter(item => item !== name);
      }
      this.props.onChange(checkedArr, e);
    }

    processChild() {
      const me = this;
      const { children, checkedName } = me.props;
      const length = React.Children.count(children);
      if (!length) return false;
      const elements = React.Children.map(children, (child, index) => {
        if (!!child.type && child.type.displayName === 'mui-checkbox') {
          return React.cloneElement(child, {
            key: index,
            onChange: me.onChange.bind(this),
            checked: (Array.isArray(checkedName) ? checkedName : [checkedName]).indexOf(child.props.name) !== -1,
          });
        }
        return null;
      });
      return elements;
    }

    render() {
      const me = this;
      return <div>{me.processChild()}</div>
    }
}

CheckboxGroup.defaultProps = {
  // onChange: () => {},
  // disabled: false,
  // className: "",
  checkedName: [],
};
  
CheckboxGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  // className: PropTypes.string,
  checkedName: PropTypes.array || PropTypes.string,
};

CheckboxGroup.item = Checkbox;

CheckboxGroup.displayName = 'mui-checkboxgroup';

export default CheckboxGroup;
