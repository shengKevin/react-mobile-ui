import React from 'react';
import { Space } from '../../../build/lib/Blank';
import { Button } from '../../../build/lib/Button';
import { Modal } from '../../../build/lib/Modal';

export default class ModalDemo extends React.PureComponent {

  state = {
    modalVisible: false,
    show: false,
  };

  onCloseModal = () => {
    this.setState({ modalVisible: false, show: false });
  }

  render() {
    const { modalVisible, show } = this.state;
    return (
      <div>
        <Button onClick={() => this.setState({modalVisible: true})}>alert modale</Button>
        <Modal
          visible={modalVisible}
          title="Title"
          actions={
            [
              { 
                label: 'Ok', 
                onClick: () => { this.onCloseModal(); },
              },
              { 
                label: 'Cancel', 
                onClick: () => { this.onCloseModal(); },
              }
            ]}
          onClose={() => this.setState({modalVisible: false})}
          onClosemask
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
            scoll content...<br />
          </div>
        </Modal>
        <Space />
        <Button onClick={() => this.setState({show: true})}>alert modale1</Button>
        <Modal
          visible={show}
          title="Title"
          actions={
            [
              { 
                label: 'Ok', 
                onClick: () => { this.onCloseModal(); },
              },
              // { 
              //   label: 'Cancel', 
              //   onClick: () => { this.onCloseModal(); },
              // }
            ]}
          onClose={() => this.setState({show: false})}
          onClosemask
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
            scoll content1...<br />
            scoll content1...<br />
            scoll content1...<br />
            scoll content1...<br />
            scoll content1...<br />
            scoll content1...<br />
          </div>
        </Modal>
      </div>
    );
  }
}
