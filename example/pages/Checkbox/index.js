import React from 'react';
import { Cell } from '../../../build/lib/Cell';
import { CheckboxGroup, Checkbox } from '../../../build/lib/CheckBox';

export default class CheckboxDemo extends React.PureComponent {
  state = {
    checkedName: ['checkbox1', 'checkbox2'],
    onecheckbox: false,
  };

  onCheckboxChange = (value, e) => {
    e.stopPropagation();
    console.log(value);
    this.setState({ checkedName: [...value] });
  }

  onOneCheckboxChange = (value, e) => {
    e.stopPropagation();
    console.log(value);
    this.setState({ onecheckbox: value });
  }

  render() {
    const { checkedName, onecheckbox } = this.state;
    return (
      <div>
        <Cell>CheckboxGroup</Cell>
        <CheckboxGroup onChange={this.onCheckboxChange} checkedName={checkedName}>
          <CheckboxGroup.item name="checkbox1">option1</CheckboxGroup.item>
          <CheckboxGroup.item name="checkbox2">option2</CheckboxGroup.item>
          <Checkbox name="checkbox3" value="option3" />
          <Checkbox disabled name="checkbox4" value="option4" />
        </CheckboxGroup>
        <Cell>One checkbox</Cell>
        <Checkbox name="checkbox5" value="one checkbox" checked={onecheckbox} onChange={this.onOneCheckboxChange} />
        <Cell>Disabled checkd</Cell>
        <Checkbox name="checkbox6" checked disabled>option6</Checkbox>
      </div>
    );
  }
}
