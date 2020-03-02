import React from 'react'
import PropTypes from 'prop-types'
import './RelatedProducts.scss'
import Card from '../../Components/Card/Card'
import Slider from '../../Components/Slider/Slider'

/**
 * Block of relater products
 *
 * @author [Mikhail Golovai](https://github.com/Mikhail-Golovai)
 */
export default function RelatedProducts({relatedIds = []}) {

    function loadProducts(ids) {
        //TODO: add redux to load products and remove samples
        return ids.map(id => ({ 
            id,
            imageUrl: 'https://i.pinimg.com/564x/6f/5a/b1/6f5ab1b470beeeeaf285bb451c63ac8f.jpg',
            title: 'Flower Embroidery Hoop Art',
            price: '$389',
            oldPrice: '$699'
        }))
    }

    const products = loadProducts(relatedIds).map(product => (<div key={product.id} className="product" ><Card {...product}/></div>))
    return (
        <div className="relatedProductsWrapper">
            <div className="blockHeader">
                <h1>Related Products</h1>
                <a href="">EXPLORE ALL</a>{/*TODO: add Link */}
            </div>
            <div className="relatedProducts">
                {products.length < 4 ?
                    products :
                    (<Slider 
                        visibleCount={3}
                        showDots={false}
                     >
                            {products}
                    </Slider>)
                }
            </div>
        </div>
    )
}

RelatedProducts.propTypes = {
    /**
     * IDs of related products to show
     */
    relatedIds: PropTypes.arrayOf(PropTypes.string).isRequired
}