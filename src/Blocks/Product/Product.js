import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import parseHtml from 'html-react-parser';

import '../../assets/css/Product.scss';

class Product extends Component {

    render() {

        const { current, product, sliderIndex, changeSlider } = this.props;

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
                onClick={() => changeSlider(index)}
                alt='card'
                key={`card-${index}`}
            />
        })

        return(
            <div className='product'>
                <div className='head'>
                    <div className='container'>
                        <Link className={ current === '' ? 'active' : '' } to={`/`}>all</Link>
                        <Link className={ current === 'home' ? 'active' : '' } to={`/`}>home</Link>
                        <Link className={ current === 'office' ? 'active' : '' } to={`/`}>office</Link>
                        <Link className={ current === 'furniture' ? 'active' : '' } to={`/`}>furniture</Link>
                        <Link className={ current === 'modern' ? 'active' : '' } to={`/`}>modern</Link>
                        <Link className={ current === 'classic' ? 'active' : '' } to={`/`}>classic</Link>
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

Product.propTypes = {
    current: PropTypes.string,
    product: PropTypes.object,
    sliderIndex: PropTypes.number,
    changeSlider: PropTypes.func,
}

Product.defaultProps = {
    current: '',
    product: {},
    sliderIndex: 0,
    changeSlider: () => {},
}

export default Product;