## Accordion

手风琴折叠效果

## code

```js
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion } from 'react-mobile-ui';

class AccordionDemo extends React.PureComponent {

  accordionChange = (value) => {
    console.log(value);
  }

  render() {
    return (
      <div>
        <Accordion defaultActiveKeys={['0']} onChange=    {this.accordionChange}>
          <Accordion.Panel header="title 1">
            <Cell>content 1</Cell>
            <Cell>content 2</Cell>
            <Cell>content 3</Cell>
          </Accordion.Panel>
          <Accordion.Panel header="title 2">
            <Cell>content 1</Cell>
            <Cell>content 2</Cell>
            <Cell>content 3</Cell>
          </Accordion.Panel>
          <Accordion.Panel header={<span>title 3</span>}>
            <Cell>content 1</Cell>
            <Cell>content 2</Cell>
            <Cell>content 3</Cell>
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}
ReactDOM.render((
    <AccordionDemo/>
), document.getElementById('container'));

```

## API

### Accordion

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| defaultActiveKeys    | 默认打开的面板  |   array | [] |
| accordion    | 是否手风琴模式(只能打开一个面板，打开时其他面盘自动关闭) | boolean | false |

### Panel
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| header    | title |   string / element | '' |
