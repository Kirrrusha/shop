import React, { Component } from 'react'

import '../../../assets/styles/Mobile.scss'
import AppStoreBtn from '../../../assets/img/app-store.png'
import GooglePlayBtn from '../../../assets/img/google-play.png'


export default class Mobile extends Component {
     render() {
        return (
        <div className='mobile-container'>
            <div className='wrapper'>
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
