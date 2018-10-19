import React from 'react';
import { Button } from '../../../build/lib/Button';
import { ActionSheet } from '../../../build/lib/Actionsheet';

export default class ActionSheetDemo extends React.PureComponent {

  state = {
    show: false,
    menus: [
      {
        label: 'Option 1',
        onClick: () => this.setState({show: false})
      }, 
      {
        label: 'Option 2',
        onClick: () => this.setState({show: false})
      }],
    actions: [
      {
        label: 'Cancel',
        onClick: () => this.hide()
      }
    ],
    title: 'this is actionsheet title',
  };

  hide(){
    this.setState({
      show: false,
    });
  }

  render() {
    const { show, title, menus, actions } = this.state;
    return (
      <div>
        <Button type="default" onClick={() => { this.setState({show: true}); }}>ActionSheet</Button>
        <ActionSheet
          title={title}
          menus={menus}
          actions={actions}
          show={show}
          onClose={() => { this.setState({show: false}); }}
          // onCloseMask={false}
        />
      </div>
    );
  }
}
