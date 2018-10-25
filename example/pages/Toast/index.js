import React from 'react';
import { Button } from '../../../build/lib/Button';
import { Space } from '../../../build/lib/Blank';
import { Icon } from '../../../src/components/Icon';
import { Toast } from '../../../src/components/Toast';


export default class ToastDemo extends React.PureComponent {

  state = {
    show: false,
    showIcon: false,
    showAny: false,
  };

  handleClick = () => {
    this.setState({ show: true });
    setTimeout(() => {
      this.setState({ show: false });      
    }, 3000);
  }

  handleIconClick = () => {
    this.setState({ showIcon: true });
    setTimeout(() => {
      this.setState({ showIcon: false });      
    }, 3000);
  }

  handleshowAnyClick = () => {
    this.setState({ showAny: true });
    setTimeout(() => {
      this.setState({ showAny: false });      
    }, 3000);
  }

  render() {
    const { show, showIcon, showAny } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>Toast</Button>
        <Space />
        <Toast show={show} text="this is toast!!!" />
        <Button onClick={this.handleIconClick}>icon Toast</Button>
        <Space />
        <Toast show={showIcon} icon="icon-check" size="lg" text="Success!!!" />
        <Button onClick={this.handleshowAnyClick}>children Toast</Button>
        <Toast show={showAny}>
          <div>
            <p><Icon type="icon-close-circle-fill" /></p>
            <p>content ...</p>
            <p>content ...</p>
          </div>
        </Toast>
      </div>
    );
  }
}
