import React, { Component } from 'react'
import '../../styles/css/Header.scss'
import Search from '../../styles/svg/search.svg'
import PropTypes from 'prop-types';


export default class Menu extends Component {

    render() {
        const menu=[
            'home',
            'products',
            'history',
            'showroom',
            'contact'
        ]
        return (
            <ul className='header_menu'>
                { menu.map( (item, index) => {
                    return <li key={index} className='menu_items'>{item}</li>
                })} 
                <img src ={Search} alt='#' className='header_search'></img> 
                          
            </ul>
        )
    }
}

Menu.propTypes = {
    menu: PropTypes.array

  };
