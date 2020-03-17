import React, {Component} from 'react';

import Logo from '../../../assets/img/logo.png';
import Menu from './Menu';


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
          </div>
        </div>
      </header>
    )
  }
}


