import React, { Component } from 'react';
import './Featured.scss';
import '../../styles/App.scss';

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgArray: [
          require('../../img/Featured/product1.png'),
          require('../../img/Featured/product2.png'),
          require('../../img/Featured/product3.png'),
          require('../../img/Featured/product4.png'),
            ]
        };
    }
   
render () {
    let imgArray = this.state.imgArray;
    const images = imgArray.map((url, index) => {
        return (
            <img className='item' src={url} key={index} alt='product' />
    )}
    )

    return (
        <div className='items_wrapper'>
            {images}
        </div>
    );
}
}

export default Featured;