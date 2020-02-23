import React, { Component } from 'react'
import './Header.scss'

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
            </ul>
        )
    }
}
