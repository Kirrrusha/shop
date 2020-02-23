# Slider

React component to show items in slider


## Example

```javascript
import React from 'react';
import Slider from './Components/Slider/Slider'

export default function App() {
  const style = {
    backgroundColor: '#F0F0F0'
  }
  return (
    <div className="App">
     <h2>Template</h2>
     <Slider
        showDots={true}
        dotsPosition="right"
        overflow={true}
        style={style}
        visibleCount={2}
     >
        <img src={testImg} alt="Woooops... :("/>
        <h2>Template1</h2>
        <div className="test"><span>TEST</span></div>
     </Slider>
    </div>
  );
}
```

## Props

| Prop         | Type    | Acceptable values          | Description                                             |
|--------------|---------|----------------------------|---------------------------------------------------------|
| style        | Object  |                            | Additional style for slider element                     |
| showDots     | bool    |                            | Determinate to show slider dots or not                  |
| dotsPosition | string  | 'left' 'center' 'right'    | Position of the Slider dots                             |
| infinite     | bool    |                            | Determinate should slider has infinite scrolling or not |
| visibleCount | numeric | 0 < val <= children.length | count of items to show in one time                      |
