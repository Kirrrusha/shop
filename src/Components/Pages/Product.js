import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parseHtml from 'html-react-parser';

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
        const current = false;

        const { product, sliderIndex } = this.state;
       
        const aboutproduct = (
            <div>                            
                <h2>{product.name}</h2>                            
                <div className='block-about-offer'>{product.offers.map( (elem, index)=>{ 
                    return <div key={index}>{elem.name}</div>
                })}</div>
                <div className='block-about-price'>$<span>{product.price}</span>/sc</div>  
                <button className='block-about-btn'>Order Us</button>
                <div className='block-about-description'>{parseHtml(product.description)}</div>
            </div>
        ) 
        
        const card = product.images.map( (card, index) =>{
            return  <img
                        className={`${index === sliderIndex ? 'active' : 'pointer'}`}
                        src={card.small}
                        onClick={() => this.changeSlider(index)}
                        alt='card'
                        key={`card-${index}`}
                    />
        })

        return(
            <div className='product'>
                <div className='head'>
                    <div className='container'>
                        <Link className={'active'} to={`/`}>all</Link>
                        <Link className={ current ? 'active' : '' } to={`/`}>home</Link>
                        <Link className={ current ? 'active' : '' } to={`/`}>office</Link>
                        <Link className={ current ? 'active' : '' } to={`/`}>furniture</Link>
                        <Link className={ current ? 'active' : '' } to={`/`}>modern</Link>
                        <Link className={ current ? 'active' : '' } to={`/`}>classic</Link>
                    </div>
                </div>
                <div className='container'>
                    <div className='block'>
                        <div className='block-card'>
                            <img src={product.images[sliderIndex].medium} alt='card' />
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