import React from 'react';
import { Steps, Step } from '../../../build/lib/Steps';
import { Space } from '../../../build/lib/Blank';
import { Icon } from '../../../build/lib/Icon';

export default class StepsDemo extends React.PureComponent {

  render() {
    return (
      <div>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={1}>
          <Step key={0} title='步骤一' />
          <Step key={1} title='步骤二' />
          <Step key={2} title='步骤二' />
        </Steps>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={2}>
          <Step key={0} title='步骤一' description="只是一个描述..." />
          <Step key={1} title='步骤二' description="也是一个描述..." />
          <Step key={2} title='步骤二' description="又是一个描述..." />
        </Steps>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={1}>
          <Step key={0} title='步骤一' />
          <Step key={1} title='出错啦!' status="error" />
          <Step key={2} title='步骤二' />
        </Steps>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={0}>
          <Step showIcon icon="icon-message-fill" key={0} title='自己' />
          <Step showIcon icon="icon-alipay-circle-fill" key={1} title='定义' />
          <Step showIcon icon={<Icon size="md" type="icon-taobao-circle-fill" />} key={2} title='element' />
        </Steps>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={1}>
          <Step key={0} title='步骤一' />
          <Step showIcon icon={<Icon size='md' type="icon-check-circle" style={{color: 'FF5A10'}} />} key={1} title='步骤二' />
          <Step key={2} title='步骤二' />
        </Steps>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={1} direction="vertical">
          <Step key={0} title='步骤一' />
          <Step key={1} title='步骤二' />
          <Step key={2} title='步骤二' />
        </Steps>
        <Space size="lg" />
        <Space size="lg" />
        <Steps current={2} direction="vertical">
          <Step key={0} title='步骤一' description="只是一个描述..." />
          <Step key={1} title='步骤二' description="也是一个描述..." />
          <Step key={2} title='步骤三' description="又是一个描述..." />
          <Step key={3} title='步骤4四' description="还是一个描述..." />
          <Step key={4} title='步骤午' description="就是一个描述..." />
        </Steps>
      </div>
    );
  }
}
