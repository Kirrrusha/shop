# Slider

React component to show item in square card with info showing on hover


## Example

```javascript
import React from 'react';
import Card from './Components/Card/Card'

export default function App() {
    
    const card = {
        id: 0,
        imageUrl: 'https://i.pinimg.com/564x/6f/5a/b1/6f5ab1b470beeeeaf285bb451c63ac8f.jpg',
        title: 'Flower Embroidery Hoop Art',
        price: '$389',
        oldPrice: '$699'
    }
  return (
    <div className="App">
     <h2>Template</h2>
     <Card {...card}>
    </div>
  );
}
```

## Props

| Prop         | Type    | Acceptable values          | Description                                             |
|--------------|---------|----------------------------|---------------------------------------------------------|
| id           | string  |                            | ID of provided product                                  |
| imageUrl     | string  |                            | Image url for provided product                          |
| title        | string  |                            | Card title                                              |
| price        | string  |                            | Current price of provided product                       |
| visibleCount | string  |                            | Old price of provided product in case of sales          |
