import React, { Component } from 'react';

import ProductItem from '../../../common/ProductItem';
import '../../../../assets/styles/Products.scss';
import Tabs from './Tabs';
import Tab from './Tab';

class Products extends Component {
      state = {
        categories:[            
            {
                title: 'home',
                id: 2,
            },
            {
                title: 'office',
                id: 3,
            },
            {
                title: 'furniture',
                id: 4,
            },
            {
                title: 'modern',
                id: 5,
            },
            {
                title: 'classic',
                id: 6,
            },
         ],

        products: [
            {
                title: 'exclusive 1',
                name: 'product name 1',
                link: 'url-prod-1',
                description: 'product description 1',
                img: require('../../../../assets/img/promo/product-11.png'),
            },
            {
                title: 'exclusive 2',
                name: 'product name 2',
                link: 'url-prod-2',
                description: 'product description 2',
                img: require('../../../../assets/img/promo/product-21.png'),
            },
            {
                title: 'exclusive 3',
                name: 'product name 3',
                link: 'url-prod-3',
                description: 'product description 3',
                img: require('../../../../assets/img/promo/product-31.png'),
            },
            {
                title: 'exclusive 4',
                name: 'product name 4',
                link: 'url-prod-4',
                description: 'product description 4',
                img: require('../../../../assets/img/promo/product-41.png'),
            },
            {
              title: 'exclusive 4',
              name: 'product name 4',
              link: 'url-prod-4',
              description: 'product description 4',
              img: require('../../../../assets/img/promo/product-6.png'),
            },
            {
              title: 'exclusive 4',
              name: 'product name 4',
              link: 'url-prod-4',
              description: 'product description 4',
              img: require('../../../../assets/img/promo/product-5.png'),
          },
        ]            
    }
  
    render() {
      const {categories, products} = this.state;
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
        return(                         
          <Tabs 
              selectedTab={this.state.selectedTab}
              onChangeTab={selectedTab => this.setState({ selectedTab })}
              className="tabs"
          >              
            {categories.map( (content, index) => {
              return <Tab
                        title={content.title}
                        name={`tab + ${index}`}
                      >
                <div className='tabs-content'>
                  {htmlProducts[index]}
                </div>
              </Tab>
            })}  
          </Tabs>           
        );
    }
}

export default Products;




