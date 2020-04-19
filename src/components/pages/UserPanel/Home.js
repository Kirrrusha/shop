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
                }
            ],
            sliderIndex: 0,
        },
    };

    render() {

        const { trending } = this.state;
        const slid = trending.slider[trending.sliderIndex];

        return (
            <>
                <div className='trending-slider'>
                    <div className='slider'>
                        <div className='items'>
                            <div className='item'></div>
                            <div
                                className='item active'
                                style={{backgroundImage: `url(${slid.image})`}}></div>
                        </div>

                        <div className='container'>
                            <div className='slid-description'>
                                <div className='head'>trending</div>
                                <div className='title'>{ slid.title }</div>
                                <div className='description'>{ parseHtml(slid.description) }</div>
                                <button className='btn-order' type='button'>order us</button>
                            </div>
                            <div className='dots'>
                                <div className='dot'></div>
                                <div className='dot'></div>
                            </div>
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
