import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../../common/ProductItem';
import '../../../assets/styles/Products.scss';
import {connect} from 'react-redux';
import {getAllCategories} from '../../../redux/modules/categories';
import {getAllProducts, selectProductsByCategoryId} from '../../../redux/modules/products';

class Products extends Component {
      state = {       
        activeTab: null,
    }
    componentDidMount() {
        this.props.getAllCategories(); 
        this.props.getAllProducts();
      }  
    ChangeTab = (event) => {    
        this.setState({activeTab: event.target.dataset.id})
      }     
    render() { 
    const {categories, products} = this.props;
    let {activeTab}  = this.state;
    

    if(!activeTab && typeof categories.length !== 'undefined' && categories.length) {       
        activeTab = categories[0].id; 
    }

    const htmlProducts  = activeTab && selectProductsByCategoryId(products, activeTab).map( (prod, index) => { 
        console.log('prod', prod)       
        return (           
                <ProductItem                    
                    name = {prod.name} 
                    key = {`product-${index}`}                    
                    href = {`/product/${prod.productId}`}
                    img = { typeof prod.imagesPath[0] !== 'undefined' ? prod.imagesPath[0] : ''}                    
                    description = {prod.description}                    
                />
        );        
    })    
        return ( 
            <>       
                <div className='tabs'>                                       
                    {categories.map( (item, index) => {                                             
                        return <div
                            data-id={item.id}
                            key={`tabs-${index}`}                                                     
                            className={(activeTab === item.id) ? 'tabs-item activeTab' : 'tabs-item '}
                            onClick={this.ChangeTab}       
                            >                                                            
                            {item.name}                            
                        </div>
                    })}                    
                </div> 
                
                <div className='products'>                   
                    {htmlProducts}
                </div>
            </>
        ); 
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.list,
    products: state.products.list,        
})

export default connect(mapStateToProps, {getAllCategories, getAllProducts})(Products);


Products.propTypes = {
    getAllCategories: PropTypes.func.isRequired,
    getAllProducts: PropTypes.func.isRequired,
    categories: PropTypes.array, 
    products: PropTypes.array,
}
 