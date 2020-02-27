import React, {Component} from 'react';
import '../../assets/css/Header.scss';
import Search from '../../assets/svg/search.svg';
import PropTypes from 'prop-types';


export default class Menu extends Component {

  render() {
    const menu = [
      'home',
      'products',
      'history',
      'showroom',
      'contact'
    ];
    return (
      <div className="header-links">
        <div className='header-menu'>
          {menu.map((item, index) => {
            return <div key={index} className='menu-items'>{item}</div>;
          })}
        </div>
        <div className="header-search">
          <img className='header-search' src={Search} alt='#' />
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.array

};
