import React, { Component } from 'react';

import '../../assets/styles/Error404.scss'
export default class Error404 extends Component {
    render() {
        return (
            <div className='error404'>
              <h3>404 page not found</h3>
              <p>We are sorry but the page you are looking for does not exist.</p>
            </div>
        )
    }
}