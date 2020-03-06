import React, { Component } from 'react'

import '../../assets/css/Modal.scss'
import AppStoreBtn from '../../assets/img/app-store.png'
import GooglePlayBtn from '../../assets/img/google-play.png'
import DelMenu from '../../assets/svg/delete.svg'

export default class Modal extends Component {
    state = {
        showModal: false,
    }
    
    saveStorage = () => {
        localStorage.setItem('xusha', Date.now()) 
    }

    onChangeModalState  = () => {
        this.setState({showModal: !this.state.showModal});        
        this.saveStorage()
    }

    render() {
        let toggleClass = (this.state.showModal) ? 'mobile delete': 'mobile';
        return (
            <div className={toggleClass}>
                <div className='mobile-container'>
                    <img
                        src={DelMenu}
                        className='delete-img'
                        alt='#'
                        onClick={() => this.onChangeModalState()} 
                    />

                    <div className='mobile-text'>
                        <p>mobile app</p>
                        <h1>find. follow. favorite. </h1>
                        <h2>Save your favorites and share your style.</h2>
                    </div>

                     <div className='mobile-btns'>
                        <a href='/'><img src={AppStoreBtn} alt='#' /></a>
                        <a href='/'><img src={GooglePlayBtn} alt='#' /></a>
                    </div> 
                   
                </div>
            </div>
        )
    }
}
