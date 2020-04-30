import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BtnImg from '../../assets/img/promo/btn-hover.png';

export default class ProductItem extends Component {
    render() {
        return (
            <a className='product-block' href={this.props.href}>
                <div className='product-item'>
                        <img src={this.props.img} alt={this.props.title} className='product-item-img' />
                </div>

                <div className='product-info'>
                    <h2> {this.props.title} </h2>
                    <h3> {this.props.name} </h3>
                    <p className='description'> {this.props.description} </p>
                    <h3>{this.props.price} </h3>
                    <img className = 'btn' src={BtnImg}  alt='button'/>
                </div>
            </a>
        )
    }
}

ProductItem.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string, 
    href: PropTypes.string,
    price: PropTypes.string,    
}
  
