import React, { Component } from 'react'

import Logo from '../../styles/img/logo.png'
import '../../styles/css/Header.scss'
import '../..//styles/css/App.scss'
import Menu from './Menu'

export default class Header extends Component {

    render() {
        return (
            <div className='header_wrapper'>
                <a href='/'><img src ={Logo} alt='#' className='header_logo'></img></a>
                <Menu />
            </div>
        )
    }
}

