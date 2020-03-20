import React, {Component} from 'react';
import OpenMenu from '../../../assets/svg/burger-menu.svg';
import Menu from './Menu';
import PropTypes from 'prop-types';
import DelMenu from '../../../assets/svg/delete.svg';

export default class BurgerMenu extends Component {

  state = {
    isActive: false
  };

  menuToggle = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    let toggleClass = (this.state.isActive) ? 'br-drawer active' : 'br-drawer';

    return (
      <div className='br-menu'>
        <div className='br-icon'>
          <img
            src={OpenMenu}
            className='burger-img'
            alt='#'
            onClick={() => this.menuToggle()}
          />
        </div>

        <div className={toggleClass}>
          <img
            src={DelMenu}
            className='delete-img'
            alt='#'
            onClick={() => this.menuToggle()}
          />

          <div className='br-items'>
            <Menu/>
          </div>

        </div>
      </div>
    );
  }
}

BurgerMenu.propTypes = {
  isActive: PropTypes.boolean,  
}
