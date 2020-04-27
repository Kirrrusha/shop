import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../../common/ProductItem';
import '../../../assets/styles/Products.scss';
import {connect} from 'react-redux';
import {getAllCategories} from '../../../redux/modules/categories';
import {getAllProducts, selectProductsByCategoryId} from '../../../redux/modules/products';

class Products extends Component {
      state = {       
        activeTab: 0,
    }
    componentDidMount() {
        this.props.getAllCategories(); 
        this.props.getAllProducts();
      }  
    ChangeTab = (event) => { 
        this.setState({activeTab: parseInt(event.target.dataset.id)})
      }     
    render() { 
    const {categories, products} = this.props;
    const {activeTab}  = this.state;    

    const htmlProducts  = products.map( (prod, index) => {        
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
                    {categories.map( (item, index) => {                        
                        return <div
                            data-id={index}
                            key={`tabs-${index}`}
                            id={item.id}                           
                            className={(activeTab === index) ? 'tabs-item activeTab' : 'tabs-item '}
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


const mapStateToProps = (state, {match: {params}}) => ({
    categories: state.categories.list,
    products: state.products.list,
    //products: selectProductsByCategoryId(state, params.id),    
})

export default connect(mapStateToProps, {getAllCategories, getAllProducts})(Products);


Products.propTypes = {
    getAllCategories: PropTypes.func.isRequired,
    getAllProducts: PropTypes.func.isRequired,
    categories: PropTypes.array, 
    products: PropTypes.array,
}
 