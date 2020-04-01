import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../../../common/ProductItem';
import '../../../../assets/styles/Products.scss';
import Tabs from './Tabs';
import Tab from './Tab';
import {connect} from 'react-redux';
import {getCategories, onChangeTab, } from '../../../../redux/modules/categories';
import {getProductsByCategory} from '../../../../redux/modules/products'


class Products extends Component {
  // state = {  
  //   // products: [
  //   //   {
  //   //     title: 'exclusive 1',
  //   //     name: 'product name 1',
  //   //     link: 'url-prod-1',
  //   //     description: 'product description 1',
  //   //     img: require('../../../../assets/img/promo/product-11.png')
  //   //   },
  //   //   {
  //   //     title: 'exclusive 2',
  //   //     name: 'product name 2',
  //   //     link: 'url-prod-2',
  //   //     description: 'product description 2',
  //   //     img: require('../../../../assets/img/promo/product-21.png')
  //   //   },
  //   //   {
  //   //     title: 'exclusive 3',
  //   //     name: 'product name 3',
  //   //     link: 'url-prod-3',
  //   //     description: 'product description 3',
  //   //     img: require('../../../../assets/img/promo/product-31.png')
  //   //   },
  //   //   {
  //   //     title: 'exclusive 4',
  //   //     name: 'product name 4',
  //   //     link: 'url-prod-4',
  //   //     description: 'product description 4',
  //   //     img: require('../../../../assets/img/promo/product-41.png')
  //   //   },
  //   //   {
  //   //     title: 'exclusive 4',
  //   //     name: 'product name 4',
  //   //     link: 'url-prod-4',
  //   //     description: 'product description 4',
  //   //     img: require('../../../../assets/img/promo/product-6.png')
  //   //   },
  //   //   {
  //   //     title: 'exclusive 4',
  //   //     name: 'product name 4',
  //   //     link: 'url-prod-4',
  //   //     description: 'product description 4',
  //   //     img: require('../../../../assets/img/promo/product-5.png')
  //   //   }
  //   // ],    
  // };

  componentDidMount() {
    this.props.getCategories();
    this.props.getProductsByCategory();
  }

    render() {
      const htmlProducts = this.props.products.map((prod, index) => {
        return (
          <>
            <ProductItem
              className='product'
              key={`product-${index}`}
              name={prod.name}
              title={prod.title}
              href={`/product/${prod.link}`}
              img={<img src={prod.img} alt='product'/>}
              description={prod.description}
            />
          </>
        );
      });
      return (
        <Tabs
          selectedTab={this.props.selectedTab}
          onChangeTab={selectedTab => this.props.onChangeTab(selectedTab)} 
          className="tabs"
        >
          {this.props.categories.map((content, index) => {
            return <Tab
              key={index}
              title={content.title}
              name={content.name}
            >
              <div className='tabs-content'>
                {htmlProducts}
              </div>
            </Tab>;
          })}
        </Tabs>
      );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.list,
  selectedTab: state.categories.selectedTab,
  products: state.products.list,
});

export default connect(mapStateToProps, {getCategories, onChangeTab, getProductsByCategory})(Products);

Products.propTypes = {
  getCategories: PropTypes.func, 
  onChangeTab: PropTypes.func,
  getProductsByCategory:PropTypes.func,
  products: PropTypes.array,
  selectedTab: PropTypes.string, 
  categories: PropTypes.array,  
} 




