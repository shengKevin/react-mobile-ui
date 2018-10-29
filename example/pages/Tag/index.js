import React from 'react';
import { Tag } from '../../../src/components/Tag';
import { Flex, FlexItem } from '../../../build/lib/Flex';
import { Space } from '../../../build/lib/Blank';

export default class TagDemo extends React.PureComponent {

  render() {
    return (
      <div>
        <Space size="lg" />
        <Space size="lg" />
        <Flex>
          <FlexItem>
            <Tag>normal</Tag>
          </FlexItem>
          <FlexItem>
            <Tag type="primary">primary</Tag>
          </FlexItem>
          <Space size="lg" />
          <Space size="lg" />
          <FlexItem>
            <Tag type="default">default</Tag>
          </FlexItem>
          <FlexItem>
            <Tag type="warn">warn</Tag>
          </FlexItem>
        </Flex>
        <Space size="lg" />
        <Space size="lg" />
        <Flex>
          <FlexItem>
            <Tag small>small basic</Tag>
          </FlexItem>
          <FlexItem>
            <Tag small type="primary">small primary</Tag>
          </FlexItem>
          <FlexItem>
            <Tag small type="default">small default</Tag>
          </FlexItem>
        </Flex>
        <Space size="lg" />
        <Space size="lg" />
        <Flex>
          <FlexItem>
            <Tag selected>selected basic</Tag>
          </FlexItem>
          <FlexItem>
            <Tag selected type="default">selected default</Tag>
          </FlexItem>
        </Flex>
        <Space size="lg" />
        <Space size="lg" />
        <Tag selected type="default" disabled>selected default</Tag>
      </div>
    );
  }
}
