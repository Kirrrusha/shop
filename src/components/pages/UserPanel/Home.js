import React, {Component} from 'react';
import parseHtml from 'html-react-parser';
import Trending from '../../modules/Trending';
import Exclusive from '../../modules/Exclusive';

import '../../../assets/styles/Home.scss';

class Home extends Component {

    state = {
        trending: {
            slider: [
                {
                    id: 1,
                    title: 'Fishnet Chair',
                    description: 'Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black\n' +
                        ' or highly polished chrome.',
                    image: require('../../../assets/img/home/slider-img.png'),
                },
                {
                    id: 2,
                    title: 'Fishnet Chair 2',
                    description: 'Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black\n' +
                        ' or highly polished chrome.',
                    image: require('../../../assets/img/home/slider.png'),
                },
                {
                    id: 3,
                    title: 'Fishnet Chair 3',
                    description: 'Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black\n' +
                        ' or highly polished chrome.',
                    image: require('../../../assets/img/home/slider-img.png'),
                }
            ],
            sliderIndex: 0,
        },
        featuredNew: [
            {
                id: 1,
                alias: 'fishnet-chair-1',
                title: 'Fishnet Chair 1',
                description: 'Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black',
                image: require('../../../assets/img/home/product-2-sm.png'),
            },
            {
                id: 2,
                alias: 'fishnet-chair-2',
                title: 'Fishnet Chair 2',
                description: 'Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black',
                image: require('../../../assets/img/home/product-3-sm.png'),
            },
            {
                id: 3,
                alias: 'fishnet-chair-3',
                title: 'Fishnet Chair 3',
                description: 'Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black',
                image: require('../../../assets/img/home/product-4-sm.png'),
            },
            {
                id: 4,
                alias: 'fishnet-chair-4',
                title: 'Fishnet Chair 4',
                description: 'Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black',
                image: require('../../../assets/img/home/product-5-sm.png'),
            },

        ],
    };

    changeSlider = (sliderIndex) => {
        this.setState({trending: { ...this.state.trending, sliderIndex }});
    }

    render() {

        const { trending } = this.state;
        const slid = trending.slider[trending.sliderIndex];

        const images = trending.slider.map((item, index) => {
            return trending.sliderIndex === index
                ? <div className='item active' style={{backgroundImage: `url(${slid.image})`}} key={`img-${index}`}/>
                : <div className='item' key={`img-${index}`}/>;
        });
        const dots = trending.slider.map((item, index) => {
            return <div
                className={ trending.sliderIndex === index ? 'dot active' : 'dot' }
                onClick={() => this.changeSlider(index)}
                key={`dot-${index}`}
            />
        });

        const products = this.state.featuredNew.map((item, index) => {
           return <a className='product' key={`prod-${index}`}>
               <div className='img' style={{backgroundImage: `url(${item.image})`}}/>
               <div className='hover'>
                   <div className='btn'></div>
                   <div className='title'>{item.title}</div>
                   <div className='description'>{item.description}</div>
               </div>
           </a>
        });

        return (
            <>
                <div className='trending-slider'>
                    <div className='slider'>
                        <div className='items'>
                            {images}
                        </div>
                        <div className='container'>
                            <div className='slid-description'>
                                <div className='head'>trending</div>
                                <div className='title'>{ slid.title }</div>
                                <div className='description'>{ parseHtml(slid.description) }</div>
                                <button className='btn-order' type='button'>order us</button>
                            </div>
                            <div className='dots'>
                                {dots}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='featured-new'>
                    <div className='container'>
                        <div className='head'>
                            <div className='title'>
                                <a className='active'>Featured</a>
                                <a>New</a>
                            </div>
                            <div className='all'>
                                <a className='arrow'>explore all</a>
                            </div>
                        </div>
                        <div className='products'>
                            {products}
                        </div>
                    </div>
                </div>

                <Trending/>
                <Exclusive/>
            </>
        );
    }
}

export default Home;
