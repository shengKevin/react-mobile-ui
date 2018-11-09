import React from 'react';
import { Swiper } from '../../../src/components/Swiper';
import { Space } from '../../../build/lib/Blank';

export default class SwiperDemo extends React.PureComponent {

  render() {
    return (
      <div>
        <Space size="lg" />
        <Space size="lg" />
        <Swiper>
          {/* <img src='https://zos.alipayobjects.com/rmsportal/1.png' alt="" /> */}
        </Swiper>
      </div>
    );
  }
}
