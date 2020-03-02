import React, { Component } from 'react';
import './Exclusive.scss';
import '../../styles/App.scss';

class Exclusive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exclusive: [
                {
                    id: 1,
                    slug: 'url-prod-1',
                    name: 'name 1',
                    image: require('../../img/exclusive/product1.png'),
                },
                {
                    id: 2,
                    slug: 'url-prod-2',
                    name: 'name 2',
                    image: require('../../img/exclusive/product2.png'),
                },
                {
                    id: 3,
                    slug: 'url-prod-3',
                    name: 'name 3',
                    image: require('../../img/exclusive/product3.png'),
                },
                {
                    id: 4,
                    slug: 'url-prod-4',
                    name: 'name 4',
                    image: require('../../img/exclusive/product4.png'),
                },
                {
                    id: 1,
                    slug: 'url-prod-5',
                    name: 'name 5',
                    image: require('../../img/exclusive/product1.png'),
                },
                {
                    id: 2,
                    slug: 'url-prod-6',
                    name: 'name 6',
                    image: require('../../img/exclusive/product2.png'),
                },
            ]
        };
    }

    render () {
        const { exclusive } = this.state;
        const htmlProd = exclusive.map((prod, index) => {
            return (
                <a className='product' href={`/product/${prod.slug}`}>
                    <img src={prod.image} key={index} alt='product' />
                </a>
            )}
        )

        return (
            <div className="exclusive">
                <div className="container">
                    <div className="head">
                        <h1>Exclusive Products</h1>
                        <a href="">EXPLORE ALL</a>
                    </div>
                    <div className="block">
                        {htmlProd}
                    </div>
                </div>
            </div>
        );
    }
}

export default Exclusive;