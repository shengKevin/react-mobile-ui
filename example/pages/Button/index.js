import React from 'react';
import { Button } from '../../../build/lib/Button';

export default class ButtonDemo extends React.PureComponent {

  render() {
    return (
      <div>
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
      </div>
    );
  }
}
