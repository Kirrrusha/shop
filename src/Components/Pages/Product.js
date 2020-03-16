import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parseHtml from 'html-react-parser';
import BlockProduct from '../../Blocks/Product/Product';

import '../../assets/css/Product.scss';

class Product extends Component {

    state = {
        product: {
            id: 1,
            alias: '',
            name: 'Fishnet Chair',
            description: '<p>The majesty of Mountains - Ugmonk style.</p>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore' +
                'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
                'lorem et dolore magna aliqua. Ut enim ad minim veniam, quis nt, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore' +
                'et dolore magna aliqua.</p><p>Ut enim ad minim laboris nisi</p>',
            price: 36.70,
            images:[
                {
                    medium: require('../../assets/img/product/big.png'),
                    small: require('../../assets/img/product/small1.png'),
                },
                {
                    medium: require('../../assets/img/product/big.png'),
                    small: require('../../assets/img/product/small2.png'),
                },
                {
                    medium: require('../../assets/img/product/big.png'),
                    small: require('../../assets/img/product/small3.png'),
                },
            ],
            offers: [
                {
                    name: 'hot deal'
                }
            ],
        },
        sliderIndex: 0,
    };

    changeSlider = (index) => {
        this.setState({sliderIndex: index});
    };

    render() {
        const { alias } = this.props.match.params;
        const current = '';

        const { product, sliderIndex } = this.state;
       
        return(
            <BlockProduct
                current={current}
                product={product}
                sliderIndex={sliderIndex}
                changeSlider={this.changeSlider}
            />
        );
    }
};



export default Product;