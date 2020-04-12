import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../../../assets/styles/AuthForm.scss';

class AuthForm extends Component {

    render() {
        return(
            <div className='auth-container'>
                <div className='auth-blocks'>
                    <div className='auth-sing-up'>
                        <h2>Sigh up</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.When an unknown printer took a galley of type and scrambled it to make a type  specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        </p>
                        <Link to={'/registration'}>
                            <button>Continue</button>
                        </Link>
                    </div>

                    <div className='auth-sign-in'>
                        <h2>Sign in</h2>

                        <div className='auth-input'>
                            <label>Email</label>
                            <input type='text' placeholder='Please enter your email address' />
                        </div>
                        
                        <div>
                            <label>Password</label>
                            <input type="password" placeholder='Please enter your password' />
                        </div>

                        <div className='auth-forgot'><a name="forgotPassword" href="/">Forgot password </a></div>
                        <button>Log in</button>
                    </div>

                </div>        
            </div>
        );
    }
}

export default AuthForm;
