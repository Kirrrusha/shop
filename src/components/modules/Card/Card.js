import React from 'react'
import PropTypes from 'prop-types'
import '../../../assets/styles/Card.scss'

/**
 * Simple card component
 *
 * @author [Mikhail Golovai](https://github.com/Mikhail-Golovai)
 */
export default function Card(props) {
    const {
        id,
        imageUrl,
        title,
        price,
        oldPrice
    } = props //TODO: add default image

    const style = {
        background: `url("${imageUrl}")`,
        backgroundColor: 'black',
        backgroundSize: 'cover'
    }

    function handleAddToCardClick(){
        console.log('id :', id); //TODO: add effect: adding to cart
    }

    function handleViewClick(){
        console.log('id :', id); //TODO: add effect: redirect to product
    }

    return (
        <div className="container" style={style}>
            <div className="overlay">
                <div className = "items"></div>
                <div className = "items head">
                    <p>{title}</p>
                    <hr/>
                </div>
                <div className = "items price">
                    {oldPrice ? (<p className="old">{oldPrice}</p>) : null}
                    <p className="new">{price}</p>
                </div>
                <div className="items buttons">
                    <div className="view">
                        <button onClick={handleViewClick}>
                            <img className="fa fa-view" alt=""/>
                            <span>VIEW</span>
                        </button>
                    </div>
                    <div className="cart">
                    <button onClick={handleAddToCardClick}>
                        <img className="fa fa-shopping-cart" alt=""/>
                        <span>ADD TO CART</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    /**
     * ID of provided product
     */
    id: PropTypes.string.isRequired,
    /**
     * Image url for provided product
     */
    imageUrl: PropTypes.string,
    /**
     * Card title
     */
    title: PropTypes.string.isRequired,
    /**
     * Current price of provided product
     */
    price: PropTypes.string.isRequired,
    /**
     * Old price of provided product in case of sales
     */
    oldPrice: PropTypes.string
}
