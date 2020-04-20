import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../../../common/ProductItem';
import '../../../../assets/styles/Products.scss';
import Tabs from './Tabs';
import Tab from './Tab';
import {connect} from 'react-redux';
import {getAllCategories} from '../../../../redux/modules/categories';
import {getAllProducts, getProductsByCategory} from '../../../../redux/modules/products';


class Products extends Component {
  state = {
    selectedTab: null
  };

  componentDidMount() {
    this.props.getAllCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    const {selectedTab} = this.state;
    const {selectedTab: prevSelectedTab} = prevState;
    const {categories} = this.props;

    if(categories.length) {
      if(selectedTab && selectedTab !== prevSelectedTab) {
        const selectedCategory = categories.filter((category) => category.name === selectedTab)

        if(selectedCategory.length) {
          // getProductsByCategory(selectedCategory[0].id)
        }
      }  else if(!selectedTab) {
        // getProductsByCategory(categories[0].id)
      }
    }
  }

  onChangeTab = selectedTab => {
    this.setState({selectedTab})
  }

    render() {
      const {products} = this.props;
      const htmlProducts = products.map((prod, index) => {
        return (
            <ProductItem
              className='product'
              key={`product-${index}`}
              name={prod.name}
              title={prod.title}
              href={`/product/${prod.link}`}
              img={<img src={prod.img} alt='product'/>}
              description={prod.description}
            />
        );
      });
      console.log('categories', this.props.categories);
      return (
        <Tabs
          selectedTab={this.state.selectedTab}
          onChangeTab={selectedTab => this.onChangeTab(selectedTab)}
          className="tabs"
        >
          {this.props.categories.map((content, index) => {
            return <Tab
              key={index}
              title={content.name}
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
  // products: state.products.list,
});

export default connect(mapStateToProps, {getAllCategories, getAllProducts})(Products);

Products.propTypes = {
  getAllCategories: PropTypes.func,
  getProductsByCategory:PropTypes.func,
  products: PropTypes.array,
  categories: PropTypes.array,
}




