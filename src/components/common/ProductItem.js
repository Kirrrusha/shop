import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BtnImg from '../../assets/img/promo/btn-hover.png';

export default class ProductItem extends Component {
    render() {
        return (
            <div className='product-block'>
                <div className='product-item'>
                        {this.props.img}
                </div>

                <div className='product-info'>
                    <h2> {this.props.title} </h2>
                    <h3> {this.props.name} </h3>
                    <p className='description'> {this.props.description} </p>
                    <img className = 'btn' src={BtnImg}  alt='button'/>
                </div>
            </div>
        )
    }
}

ProductItem.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.element,
    

}
  
