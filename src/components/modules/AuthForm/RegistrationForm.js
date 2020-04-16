import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import '../../../assets/styles/RegistrationForm.scss';

class RegistrationForm extends Component {
    state = {
        nav: [
            {
                name:  'Enter',
                link:  'enter'
              },
              {
                name:  'Registration',
                link: 'registration'
              },
              {
                name: 'Bookmarks',
                link: 'bookmarks'
              },
              {
                name: 'Forgot password',
                link: 'forgot password'
              },
              {
                name: 'History',
                link: 'history'
              } 
        ]
    }

    render() {
        return(
            <div className='reg-container'>
                <div className='reg-block'>
                    <h2>Registration</h2>
                    <p>If you already have username, go to the
                         <Link to={'/architect-accounts'}> account page</Link> 
                         </p>
                    <h3>Personal information</h3>

                    <div className='reg-input'>
                        <label>First name</label>
                        <input type='text' placeholder='Enter your first name' />
                    </div>

                    <div className='reg-input'>
                        <label>Last name</label>
                        <input type='text' placeholder='Enter your last name' />
                    </div>
                    
                    <div className='reg-input'>
                        <label>Email</label>
                        <input type='text' placeholder='Enter your email' />
                    </div>

                    <div className='reg-input'>
                        <label>Phone</label>
                        <input type='text' placeholder='Enter your phone number' />
                    </div>

                    <h3>Password</h3>
                    <div className='reg-input'>
                        <label>Password</label>
                        <input type='text' placeholder='Enter password' />
                    </div>

                    <div className='reg-input'>
                        <label>Confirm your password</label>
                        <input type='text' placeholder='Confirm your password' />
                    </div>
                    <button>Create profile</button>
                </div>

                <div className='reg-nav'>
                    {this.state.nav.map( (item, index) => {                         
                    return <li className='reg-nav-links' key={index}>
                        <Link to={`/${item.link}`}>
                            {item.name}
                        </Link>
                    </li>;

                    })}                                     
                </div>
            </div>           
        );
    }
}

export default RegistrationForm;

RegistrationForm.propTypes = {
    nav: PropTypes.array,
  }
  
