import React, { Component } from 'react'

import BtnImg from '../../../assets/img/promo/btn-hover.png'

class ProductItem extends Component {
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

export default  ProductItem;
