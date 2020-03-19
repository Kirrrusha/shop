import React, { Component } from 'react';

import ProductItem from '../../common/ProductItem'
import '../../../assets/styles/Products.scss'

class Products extends Component {
    constructor(props) {
        super(props)

    this.state = {
        categories:[ 
            {
                title: 'all',
                id: 1
            }, 
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
                img: require('../../../assets/img/promo/product-11.png'),
            },
            {
                title: 'exclusive 2',
                name: 'product name 2',
                link: 'url-prod-2',
                description: 'product description 2',
                img: require('../../../assets/img/promo/product-21.png'),
            },
            {
                title: 'exclusive 3',
                name: 'product name 3',
                link: 'url-prod-3',
                description: 'product description 3',
                img: require('../../../assets/img/promo/product-31.png'),
            },
            {
                title: 'exclusive 4',
                name: 'product name 4',
                link: 'url-prod-4',
                description: 'product description 4',
                img: require('../../../assets/img/promo/product-41.png'),
            },
            {
              title: 'exclusive 4',
              name: 'product name 4',
              link: 'url-prod-4',
              description: 'product description 4',
              img: require('../../../assets/img/promo/product-6.png'),
          },
          {
            title: 'exclusive 4',
            name: 'product name 4',
            link: 'url-prod-4',
            description: 'product description 4',
            img: require('../../../assets/img/promo/product-5.png'),
        },
        ]            
    }
  }
    render() {
      const htmlProducts  = this.state.products.map( (prod, index) => {
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
        )
    })
        return(
            <div className="tabs">
                <h1>Products</h1>
                <Tabs 
                    selectedTab={this.state.selectedTab}
                    onChangeTab={selectedTab => this.setState({ selectedTab })}
                >
                  {this.state.categories.map( (content, index) => {
                    return <Tab
                              title={content.title}
                              name={`tab + ${index}`}
                            >
                      <div classname='tabs-content'>
                        {htmlProducts[index]}
                      </div>
                    </Tab>
                  })}  
                </Tabs>
            </div>
        );
    }
}

export default Products;

function Tabs({ children, selectedTab, onChangeTab }) {
    let tabProps = []
    const content = React.Children.map(children, (child) => {
      if (child.type === Tab) {
        const { title, name } = child.props
        tabProps.push({ title, name })
        if (selectedTab ? (selectedTab !== child.props.name) : (tabProps.length !== 1)) {
          return null
        }
      }
      return child
    })
  
    const finalSelectedTab = selectedTab || 
          (tabProps.length > 0 && tabProps[0].name)
  
    return (
      <div className="tabs">
        <Tablist
          selectedTab={finalSelectedTab}
          onChangeTab={onChangeTab}
          tabs={tabProps}
        />
        <div className="tabs-content">
          {content}
        </div>
      </div>
    )
  }
  
  function Tablist({ tabs, selectedTab, onChangeTab }) {
    const linkClass = selected => {
      const c = 'tabs-tablist-link'
      return selected ? `${c} ${c}-selected` : c
    }
    
    return (      
        <ul className="tabs-tablist">
          {tabs.map(({ name, title }) => 
            <li aria-selected={name === selectedTab}  key={name}>
              <a
                className={linkClass(name === selectedTab)}
                onClick={() => onChangeTab(name)}
               >
                {title}
               </a>
            </li>
          )}
        </ul>      
      )
    }
  
  function Tab({ name, children }) {
    return (
      <div id={`tab-${name}`} className="tabs-tab">
        {children}
      </div>
    )
  }