import React, { Component } from 'react'

import '../../assets/css/BurgerMenu.scss'
import OpenMenu from '../../assets/svg/burger-menu.svg'
import Menu from './Menu'
import DelMenu from '../../assets/svg/delete.svg'

export default class BurgerMenu extends Component {

    state = {
        isActive: false
    }

    menuToggle = () => { 
        console.log('click')        
        this.setState({
           isActive : !this.state.isActive
         })
    }
    
    render() { 
        let toggleClass = (this.state.isActive) ? 'br-drawer active': 'br-drawer';
        
        return (
            <div className='br-menu'>                
                <div className='br-icon'>
                    <img
                        src={OpenMenu}
                        className='burger-img'
                        alt='#'
                        onClick={ () => this.menuToggle()}                                           
                    />
                </div>

                <div className={toggleClass}>
                        <img
                            src={DelMenu}
                            className='delete-img'
                            alt='#'
                            onClick={ () => this.menuToggle()} 
                        />
                    
                    <div className='br-items'>
                        <Menu  />
                    </div>
                
                </div>
            </div>
        )
    }
}
