import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/Product.scss';

class Product extends Component {

    state = {
        product: {
            id: 1,
            alias: '',
            name: 'Fishnet Chair',
            description: 'The majesty of Mountains - Ugmonk style.\n' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n' +
                ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n' +
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.\n' +
                ' sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
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
                    small: require('../../assets/img/product/small1.png'),
                },
            ],
            offers: [
                {
                    name: 'hot deal'
                }
            ],
        }
    };

    render() {

        const { alias } = this.props.match.params;
        const current = false;
        console.log('alias ', alias);

        return(
            <div className='product'>
                <div className='head'>
                    <div className='container'>
                        <Link className={'active'} to={``}>all</Link>
                        <Link className={ current ? 'active' : '' } to={``}>home</Link>
                        <Link className={ current ? 'active' : '' }>office</Link>
                        <Link className={ current ? 'active' : '' }>furniture</Link>
                        <Link className={ current ? 'active' : '' }>modern</Link>
                        <Link className={ current ? 'active' : '' }>classic</Link>
                    </div>
                </div>
                <div className='container'>
                    <div className='block'>
                        <div className='images'>
                            <img src='' />
                        </div>
                        <div className='about'>2</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Product;