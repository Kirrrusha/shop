import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../../common/ProductItem';
import '../../../assets/styles/Products.scss';
import {connect} from 'react-redux';
import {getAllCategories} from '../../../redux/modules/categories';
import { getProductsByCategory } from '../../../redux/modules/products';

class Products extends Component {
      state = {       
        activeTab: 0,
    }
    componentDidMount() {
        this.props.getAllCategories();        
      }
    componentDidUpdate(prevProps, prevState) {
         const {categories, getProductsByCategory} = this.props;
         const {categories: prevCategories} = prevProps;

         if(!prevCategories.length && categories !== prevCategories) {               
            getProductsByCategory(categories[0].id);

         } else if (categories.length && this.state.activeTab !== prevState.activeTab) {
            getProductsByCategory(categories[this.state.activeTab].id);
        }
    }
    ChangeTab = (event) => { 
        this.setState({activeTab: parseInt(event.target.dataset.id)})
      }  
    render() {    
    const htmlProducts  = this.props.products.map( (prod, index) => {        
        return (           
                <ProductItem                    
                    name = {prod.name} 
                    key = {`product-${index}`}                    
                    href = {`/product/${prod.link}`}
                    img = { < img src={prod.img} alt={prod.title} /> }
                    description = {prod.description}                    
                />
        );        
    })  
        return ( 
            <>       
                <div className='tabs'>                    
                    {this.props.categories.map( (item, index) => {                        
                        return <div
                            data-id={index}
                            key={`tabs-${index}`}
                            id={item.id}                           
                            className={(this.state.activeTab === index) ? 'tabs-item activeTab' : 'tabs-item '}
                            onClick={this.ChangeTab}       
                            >                                
                            {item.name}                            
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

 