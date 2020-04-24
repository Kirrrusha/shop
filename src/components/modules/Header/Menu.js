import React, {Component} from 'react';
import '../../../assets/styles/Header.scss';
import Search from '../../../assets/svg/search.svg';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default class Menu extends Component {

  render() {
    const menu = [
      'home',
      'products',
      'history',
      'showroom',
      'contact',
      'cart',
    ];
    return (
      <div className="header-links">
        <div className='header-menu'>
          {menu.map((item, index) =>
            <Link to={`/${item === 'home' ? '' : item}`} key={index} className='menu-items'>{item}</Link>
          )}
        </div>
        <div className="header-search">
          <img className='header-search' src={Search} alt='#'/>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.string,
}



