import React, {Component} from 'react';
import '../../../assets/styles/Header.scss';
import Search from '../../../assets/svg/search.svg';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


const Menu = () => {

  const checkout = useSelector(state => state.checkout.list);
  const menu = [
    'home',
    'products',
    'history',
    'showroom',
    'contact',
    'cart'
  ];
  return (
    <div className="header-links">
      <div className='header-menu'>
        {menu.map((item, index) =>
          <Link to={`/${item === 'home' ? '' : item}`} key={index} className='menu-items'>
            {item}
            {item === 'cart' && !!checkout.length && <div className="menu-quantity">{checkout.length}</div>}
          </Link>
        )}
      </div>
      <div className="header-search">
        <img className='header-search' src={Search} alt='#'/>
      </div>
    </div>
  );
};

Menu.propTypes = {
  menu: PropTypes.string
};

export default Menu;



