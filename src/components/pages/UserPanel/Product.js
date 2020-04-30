import React, {Component} from 'react';
import PropTypes from 'prop-types';
import parseHtml from 'html-react-parser';
import {getAllProducts, selectProductsByProductId} from '../../../redux/modules/products';
import {connect} from 'react-redux';
import {history} from '../../../redux/history';
import {addProductInOrder} from '../../../redux/modules/checkout';

class Product extends Component {

  state = {
    sliderIndex: 0
  };

  changeSlider = (index) => {
    this.setState({sliderIndex: index});
  };

  componentDidMount() {
    const {product, getAllProducts} = this.props;
    !product && getAllProducts();
  }

  render() {
    const {product, pending, isEmptyProducts, addProductInOrder} = this.props;
    const {sliderIndex} = this.state;
    if (pending === null || pending) {
      return <>Loading...</>;
    } else if (isEmptyProducts || !product) {
      history.push('/');
      return null;
    }
    return (
      <div className='product'>
        <div className='wrapper'>
          <div className='product-block'>
            <div className='product-card'>
              <div
                className="product-image"
                style={{backgroundImage: `url(${product.imagesPath[sliderIndex]})`}}
              />
              <div className='product-slider'>
                {product.imagesPath.map((card, index) =>
                  <div
                    className={`product-image product-image__min ${index === sliderIndex ? 'active' : 'pointer'}`}
                    onClick={() => this.changeSlider(index)}
                    key={`card-${index}`}
                    style={{backgroundImage: `url(${card})`}}
                  />)}
              </div>
            </div>
            <div className='product-about'>
              <h2>{product.name}</h2>
              <div className='product-price'>$<span>{product.price}</span>/sc</div>
              <button
                className='product-btn'
                onClick={() => {
                  addProductInOrder({
                    product: product.id,
                    name: product.name,
                    quantity: 1,
                    price: product.price
                  })
                }}>Order Us
              </button>
              <div className='product-description'>{product.description && parseHtml(product.description)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    imagesPath: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string
  }),
  getAllProducts: PropTypes.func.isRequired,
  addProductInOrder: PropTypes.func.isRequired,
  pending: PropTypes.bool,
  isEmptyProducts: PropTypes.bool.isRequired
};

const mapStateToProps = (state, {match: {params}}) => ({
  product: selectProductsByProductId(state, params.id),
  pending: state.products.pending.productsList,
  isEmptyProducts: !state.products.list.length
});

export default connect(mapStateToProps, {getAllProducts, addProductInOrder})(Product);
