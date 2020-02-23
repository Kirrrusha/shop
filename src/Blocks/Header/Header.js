import React, { Component } from 'react'
import Logo from '../../img/Header/logo.png'
import Search from '../../img/Header/search.svg'
import './Header.scss'
import '../../styles/App.scss'

import Menu from './Menu'

export default class Header extends Component {

    render() {
        return (
            <div className='header_wrapper'>
                <a href='/'><img src ={Logo} alt='#' className='header_logo'></img></a>
                <Menu />
                <img src ={Search} alt='#' className='header_search'></img>
            </div>
        )
    }
}
