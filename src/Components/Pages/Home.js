import React, { Component } from 'react';
import Exclusive from '../../Blocks/Exclusive/Exclusive';
import PromoProducts from '../../Blocks/PromoProducts/PromoProducts';

class Home extends Component {

    render() {

        return(
            <div>
                <h1>Home</h1>
                <Exclusive />
                <PromoProducts />
            </div>
        );
    }
}

export default Home;