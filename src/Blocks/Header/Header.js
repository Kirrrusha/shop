import React, {Component} from 'react';

import Logo from '../../assets/img/logo.png';
import '../../assets/css/Header.scss';
import '../../assets/css/App.scss';
import Menu from './Menu';
import BurgerMenu from './BurgerMenu'

export default class Header extends Component {

  render() {
    return (
      <header>
        <div className='wrapper'>
          <div className='header-blocks'>
            <a href='/'>
              <img className='header-logo' src={Logo} alt='#' />
            </a>
            
            <Menu />
            <BurgerMenu />
          </div>
        </div>
      </header>
    );
  }
}
