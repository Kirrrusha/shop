import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import parseHtml from 'html-react-parser';

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
                    medium: require('../../../assets/img/product/big.png'),
                    small: require('../../../assets/img/product/small1.png'),
                },
                {
                    medium: require('../../../assets/img/product/big.png'),
                    small: require('../../../assets/img/product/small2.png'),
                },
                {
                    medium: require('../../../assets/img/product/big.png'),
                    small: require('../../../assets/img/product/small3.png'),
                },
            ],
            offers: [
                {
                    name: 'hot deal'
                }
            ],
        },
        sliderIndex: 0,
        current: '',
    };

    changeSlider = (index) => {
        this.setState({sliderIndex: index});
    };

    render() {

        // const { current, product } = this.props;
        //const { alias } = this.props.match.params;
        const { current, product, sliderIndex } = this.state;

        const aboutProduct = (
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
                <div className='product-head'>
                    <div className='container without-after'>
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
                            <div className='block-card-slider'>
                                {card}
                            </div>
                        </div>
                        <div className='block-about'>
                            {aboutProduct}
                        </div >
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    current: PropTypes.string,
    product: PropTypes.object,
    sliderIndex: PropTypes.number,
    changeSlider: PropTypes.func,
    alias: PropTypes.string,
};

Product.defaultProps = {
    current: '',
    product: {},
    sliderIndex: 0,
    changeSlider: () => {},
    alias: '',
}

export default Product;
