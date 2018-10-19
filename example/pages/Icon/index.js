import React from 'react';
import { Icon } from '../../../build/lib/Icon';

export default class IconDemo extends React.PureComponent {

  render() {
    return (
      <div>
        <Icon type="icon-audio-fill" />
        <Icon type="icon-meh" />
        <Icon type="icon-earth" />
        <Icon type="icon-time-circle" />
        <Icon type="icon-user" />
        <Icon type="icon-like" />
      </div>
    );
  }
}
