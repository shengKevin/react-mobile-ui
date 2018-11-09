import React from 'react';
import { Tabs } from '../../../src/components/Tabs';
import { Space } from '../../../build/lib/Blank';
import { Title } from '../../../build/lib/Title';


export default class TabsDemo extends React.PureComponent {

  handleTab = (page) => {
    console.log(page);
  }

  render() {
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
    const vtabs = [
      { title: '1 Tab' },
      { title: '2 Tab' },
      { title: '3 Tab' },
    ];
    return (
      <div>
        <Space size="lg" />
        <Space size="lg" />
        <Title>Tabs</Title>
        <Tabs tabs={tabs} onTabClick={this.handleTab}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of first tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
        </Tabs>
        <Title>vertival Tabs</Title>
        <Tabs style={{height: 250}} tabs={vtabs} onTabClick={this.handleTab} direction="vertical">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of first tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
        </Tabs>
        <Title>no animate Tabs</Title>
        <Tabs tabs={tabs} onTabClick={this.handleTab} animated={false} initialPage={1}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of first tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
        </Tabs>
      </div>
    );
  }
}
