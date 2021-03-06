import React, {Component} from 'react';

class Trending extends Component {

  state = {
    trending: [
      {
        id: 1,
        slug: 'url-prod-1',
        name: 'name 1',
        shortDescription: 'text about product 1',
        image: require('../../assets/img/trending/product1.png')
      },
      {
        id: 2,
        slug: 'url-prod-2',
        name: 'name 2',
        shortDescription: 'text about product 2',
        image: require('../../assets/img/trending/product2.png')
      },
      {
        id: 3,
        slug: 'url-prod-3',
        name: 'name 3',
        shortDescription: 'text about product 3',
        image: require('../../assets/img/trending/product3.png')
      },
      {
        id: 4,
        slug: 'url-prod-4',
        name: 'name 4',
        shortDescription: 'text about product 4',
        image: require('../../assets/img/trending/product4.png')
      },
      {
        id: 5,
        slug: 'url-prod-5',
        name: 'name 5',
        shortDescription: 'text about product 5',
        image: require('../../assets/img/trending/product1.png')
      },
      {
        id: 6,
        slug: 'url-prod-6',
        shortDescription: 'text about product 6',
        image: require('../../assets/img/trending/product2.png')
      }
    ]
  };

  render() {
    const {trending} = this.state;
    const htmlProd = trending.map((prod, index) => {
        return (
          <a className='product' key={index} href={`/product/${prod.slug}`}>
            <img className='product-img' src={prod.image} alt='product'/>
            <div className='hover'>
              <div className='hover-img'/>
              <h6>{prod.name}</h6>
              <span className='description'>{prod.shortDescription}</span>
            </div>
          </a>
        );
      }
    );

    return (
      <div className="trending">
        <div className="wrap">
          <div className="trending-head">
            <h2>Trending Products</h2>
            <a href="/">EXPLORE ALL</a>
          </div>
          <div className="block">
            {htmlProd}
          </div>
        </div>
      </div>
    );
  }
}

export default Trending;
