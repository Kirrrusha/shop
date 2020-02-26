import React, { Component } from 'react'

import Logo from '../../assets/img/logo.png'
import '../../assets/css/Header.scss'
import '../../assets/css/App.scss'
import Menu from './Menu'

export default class Header extends Component {

    render() {
        return (
            <div className='wrapper'>
                <div className='header_wrapper'>
                    <a href='/'><img src ={Logo} alt='#' className='header_logo'></img></a>
                    <Menu />
                </div>
            </div>
        )
    }
}

