import React from 'react';
import { Button } from '../../../build/lib/Button';
import { Blank, Space } from '../../../build/lib/Blank';

export default class BlankDemo extends React.PureComponent {

  render() {
    return (
      <div>
        <Blank>
          <Space />
          <Button>primary</Button>
          <Space />
          <Button disabled>primary disabled</Button>
          <Space />
          <Button type="default">default</Button>
          <Space />
          <Button type="default" disabled>default disabled</Button>
          <Space />
          <Button type="warning">warning</Button>
          <Space />
          <Button type="warning" disabled>warning disabled</Button>
          <Space />
          <Button type="ghost">ghost</Button>
          <Space />
          <Button type="ghost" disabled>ghost disabled</Button>
          <Space />
          <Button size="small" inline>inline</Button> &nbsp;
          <Button type="ghost" size="small" inline>small</Button> &nbsp;
          <Button style={{color: '#108ee9', border: '1px #108ee9 solid'}} type="ghost" size="small" inline>add style</Button>
        </Blank>
      </div>
    );
  }
}
