import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/Product.scss';
import AboutBtn from '../../assets/img/product/btn.png'
import BigCard from '../../assets/img/product/big.png'

class Product extends Component {

    state = {
        product: {
            id: 1,
            alias: '',
            name: 'Fishnet Chair',
            description: 'The majesty of Mountains - Ugmonk style.\n ' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n' +
                'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
                'lorem et dolore magna aliqua. Ut enim ad minim veniam, quis nt, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n' +
                'et dolore magna aliqua. Ut enim ad minim laboris nisi',
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
        }
    };

    render() {
        const { alias } = this.props.match.params;
        const current = false;     
        const { product } = this.state;
        
       
        const aboutproduct = (
            <div>                            
                <h2>{product.name}</h2>                            
                <div className='block-about-offer'>{product.offers.map( (elem, index)=>{ 
                    return <div>{elem.name}</div>
                })}</div>
                <div className='block-about-price'>$<span>{product.price}</span>/sc</div>  
                <img className='block-about-btn' src={AboutBtn} alt='button' />
                <p className='block-about-description'>{product.description}</p>  
            </div>
        ) 
        
        const card = product.images.map( (card, index) =>{
            return  <img                       
                        src={card.small}
                        alt='card'
                        key={`card-${index}`}
                    />
        })
        

        return(
            <div className='products'>
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
                        <div className='block-card'>
                            <img src={BigCard} alt='card' />
                            {card}                      
                        </div>
                        <div  className='block-about'>
                            {aboutproduct}
                        </div >                        
                    </div>
                </div>
            </div>
        );
    }
};

export default Product;