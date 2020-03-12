import React, { Component } from 'react'

import '../../assets/css/PromoProducts.scss';
import ProductItem from './ProductItem'

class PromoProducts extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            products: [
                {
                    title: 'exclusive 1',
                    name: 'product name 1',                
                    link: 'url-prod-1',
                    description: 'product description 1',
                    img: require('../../assets/img/promo/product-11.png'),
                },
                {                          
                    title: 'exclusive 2',      
                    name: 'product name 2',
                    link: 'url-prod-2',
                    description: 'product description 2',
                    img: require('../../assets/img/promo/product-21.png'),
                },
                {   
                    title: 'exclusive 3',      
                    name: 'product name 3',
                    link: 'url-prod-3',
                    description: 'product description 3',
                    img: require('../../assets/img/promo/product-31.png'),
                },
                {                          
                    title: 'exclusive 4',      
                    name: 'product name 4',
                    link: 'url-prod-4',
                    description: 'product description 4',
                    img: require('../../assets/img/promo/product-41.png'),
                },
                {                          
                    title: 'exclusive 5',      
                    name: 'product name 5',
                    link: 'url-prod-5',
                    description: 'product description 5',
                    img: require('../../assets/img/promo/product-11.png'),
                },
                {                          
                    title: 'exclusive 6',      
                    name: 'product name 6',
                    link: 'url-prod-6',
                    description: 'product description 6',
                    img: require('../../assets/img/promo/product-21.png'),
                },
                {                          
                    title: 'exclusive 7',      
                    name: 'product name 7',
                    link: 'url-prod-7',
                    description: 'product description 7',
                    img: require('../../assets/img/promo/product-5.png'),
                },
                {                          
                    title: 'exclusive 8',      
                    name: 'product name 8',
                    link: 'url-prod-8',
                    description: 'product description 8',
                    img: require('../../assets/img/promo/product-31.png'),
                },
                {                          
                    title: 'exclusive 9',      
                    name: 'product name 9',
                    link: 'url-prod-9',
                    description: 'product description 9',
                    img: require('../../assets/img/promo/product-41.png'),
                },            
            ]
        }
    }    
   
    render() {
         const htmlProducts  = this.state.products.map( (prod, index) => {
            return (
                <>                                    
                    <ProductItem
                        className = 'product'
                        key = {index}
                        name = {prod.name}
                        title = {prod.title}
                        href = {`/product/${prod.link}`}
                        img = { <img src={prod.img} alt='product' /> }
                        description = {prod.description}                    
                    />                    
                </> 
            ) 
        })
        return (
          
            <div className='promo'>
                <div className='promo-head'>
                    <h1>Trending Products</h1>
                    <a href='/'>explore all</a>
                </div>
                <div className='promo-block'>
                    { htmlProducts }
                </div>
            </div>        
          );
    }
}

export default  PromoProducts;

