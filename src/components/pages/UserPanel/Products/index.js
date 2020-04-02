import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../../../common/ProductItem';
import '../../../../assets/styles/Products.scss';
import Tabs from './Tabs';
import Tab from './Tab';
import {connect} from 'react-redux';
import {getCategories} from '../../../../redux/modules/categories';
import {getProductsByCategory} from '../../../../redux/modules/products'


class Products extends Component {

  state = {  
    selectedTab: null
  };

  componentDidMount() {
    this.props.getCategories();    
  }

  componentDidUpdate(prevProps, prevState) {
    const {selectedTab} = this.state;
    const {selectedTab: prevSelectedTab} = prevState;
    const {categories, getProductsByCategory} = this.props;
  
    if(categories.length) {
      if(selectedTab !== prevSelectedTab  && selectedTab) {
        const selectedCategory = categories.filter((category) => category.name === selectedTab)
       
        if(selectedCategory.length) {
          getProductsByCategory(selectedCategory[0].id)
        } 
      }  else if(!selectedTab) {
        getProductsByCategory(categories[0].id)        
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
      return (
        <Tabs
          selectedTab={this.state.selectedTab}
          onChangeTab={selectedTab => this.onChangeTab(selectedTab)} 
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
  products: state.products.list,
});

export default connect(mapStateToProps, {getCategories, getProductsByCategory})(Products);

Products.propTypes = {
  getCategories: PropTypes.func,  
  getProductsByCategory:PropTypes.func,
  products: PropTypes.array,  
  categories: PropTypes.array,  
} 




