import React from 'react';
import { Button } from '../../../build/lib/Button';
import { Space } from '../../../build/lib/Blank';
import { Icon } from '../../../build/lib/Icon';
import { Toptips } from '../../../build/lib/Toptips';


export default class ToptipsDemo extends React.PureComponent {

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
        <Space size="lg" />
        <Space size="lg" />
        <Space size="lg" />
        <Space size="lg" />
        <Space size="lg" />
        <Space size="lg" />
        <Space size="lg" />
        <Button type="default" onClick={this.handleIconClick}>primary toptips</Button>
        <Space />
        <Toptips show={showIcon} text="Success!!!" type="primary" />
        <Button type="default" onClick={this.handleshowAnyClick}>warn toptips</Button>
        <Toptips show={showAny} type="warn">
          <p><Icon type="icon-close-circle-fill" />  This is a dangerous</p>
        </Toptips>
        <Space />
        <Button onClick={this.handleClick} type="default">my toptips</Button>
        <Space />
        <Toptips style={{background: '#1aad19'}} show={show} text="This is toptips!!!" />
      </div>
    );
  }
}
