import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../../common/ProductItem';
import '../../../assets/styles/Products.scss';
import {connect} from 'react-redux';


import {getAllCategories} from '../../../redux/modules/categories';
import { getProductsByCategory } from '../../../redux/modules/products';

class Products extends Component {
      state = {
        // categories:[            
        //     {
        //         title: 'home',
        //         id: 2,
        //     },
        //     {
        //         title: 'office',
        //         id: 3,
        //     },
        //     {
        //         title: 'furniture',
        //         id: 4,
        //     },
        //     {
        //         title: 'modern',
        //         id: 5,
        //     },
        //     {
        //         title: 'classic',
        //         id: 6,
        //     },
        //  ],

        // products: [
        //     {
        //         title: 'exclusive 1',
        //         name: 'product name 1',
        //         link: 'url-prod-1',
        //         description: 'product description 1',
        //         img: require('../../../assets/img/promo/product-11.png'),
        //     },
        //     {
        //         title: 'exclusive 2',
        //         name: 'product name 2',
        //         link: 'url-prod-2',
        //         description: 'product description 2',
        //         img: require('../../../assets/img/promo/product-31.png'),
        //     },
        //     {
        //         title: 'exclusive 3',
        //         name: 'product name 3',
        //         link: 'url-prod-3',
        //         description: 'product description 3',
        //         img: require('../../../assets/img/promo/product-31.png'),
        //     },
        //     {
        //         title: 'exclusive 4',
        //         name: 'product name 4',
        //         link: 'url-prod-4',
        //         description: 'product description 4',
        //         img: require('../../../assets/img/promo/product-41.png'),
        //     },
        //     {
        //       title: 'exclusive 4',
        //       name: 'product name 4',
        //       link: 'url-prod-4',
        //       description: 'product description 4',
        //       img: require('../../../assets/img/promo/product-6.png'),
        //     },
        //     {
        //       title: 'exclusive 4',
        //       name: 'product name 4',
        //       link: 'url-prod-4',
        //       description: 'product description 4',
        //       img: require('../../../assets/img/promo/product-5.png'),
        //   },
        // ],
        activeTab: 0        
    }

    componentDidMount() {
        this.props.getAllCategories();
      }

      componentDidUpdate(prevProps) {
         const {categories, getProductsByCategory} = this.props;
         const {categories: prevCategories} = prevProps;

         if(!prevCategories.length && categories !== prevCategories) {
            getProductsByCategory(categories[0].id);
         }
      }

    ChangeTab = (event) => {            
        this.setState({activeTab: parseInt(event.target.dataset.id)})
      }
  
    render() {
    const {products} = this.props;
    const htmlProducts  = products.map( (prod, index) => {
        return (
            <>
                <ProductItem
                    className = 'product'
                    key = {`product-${index}`}
                    name = {prod.name}
                    title = {prod.title}
                    href = {`/product/${prod.link}`}
                    img = { <img src={prod.img} alt='product' /> }
                    description = {prod.description}
                />
            </>
        );
    })

    console.log('categories', this.props.categories);
        return ( 
            <>       
                <div className='tabs'>
                    {this.props.categories.map( (item, index) => {     
                        return <div
                            title={item.title}
                            name={item.name}
                            data-id={index}
                            key={`tabs-${index}`}
                            className={(this.state.activeTab === index) ? 'tabs-item activeTab' : 'tabs-item '}
                            onClick={this.ChangeTab}       
                            >
                            {item.title}
                        </div>
                    })}
                </div> 
                
                <div>
                    {htmlProducts}
                </div>
            </>
        ); 
    }
}
const mapStateToProps = state => ({
    categories: state.categories.list,
    products: state.products.list,
})

export default connect(mapStateToProps, {getAllCategories, getProductsByCategory})(Products);

Products.propTypes = {
    getAllCategories: PropTypes.func,
    getProductsByCategory:PropTypes.func,
    categories: PropTypes.array, 
    products: PropTypes.array,
}

 