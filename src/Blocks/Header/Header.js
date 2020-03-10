import React, {Component} from 'react';

import Logo from '../../assets/img/logo.png';
import '../../assets/css/Header.scss';
import '../../assets/css/App.scss';
import Menu from './Menu';
import BurgerMenu from './BurgerMenu'


export default class Header extends Component {

//   checkIfModalShow = () => {
//     let localDate =  localStorage.getItem('xusha')
//     let compareDate = Date.now() - (1000*3600*24) // minus 24h
//     let result = true;    
  
//   if (typeof localDate === 'string') {
//     localDate = parseInt(localDate)
//       if (localDate > compareDate) {
//         result = false; 
//     } 
//   }
//    return result;
//  }

  render() {
    // let modal = '';   
    // if (this.checkIfModalShow()) {			
    //     modal = <Modal />;
    // }   

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
    )
  }
}
