import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {every, values} from 'lodash';

import { nav } from '../../../constant/nav';

import '../../../assets/styles/RegistrationForm.scss';


class RegistrationForm extends Component {   
    state = {
      formData : {
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      },
      formValidation : {
        name: {isValid: true, errorMessage: null},
        surname: {isValid: true, errorMessage: null},
        email: {isValid: true, errorMessage: null},
        phone: {isValid: true, errorMessage: null},
        password: {isValid: true, errorMessage: null},
        confirmPassword: {isValid: true, errorMessage: null},                
    }, 
      buttonEnabled: false, 
    }
    onChangeName = (event) => {
        const {value} = event.target;
        const nextFormValidation = this.validateName(value);
        const nextState = {
          ...this.state,
          formData: {...this.state.formData, name: value},
          formValidation: nextFormValidation
        };
        this.setState({
          ...nextState,
          buttonEnabled: this.isValidForm(nextState)
        });
      };

      validateName = name => {
        let isValid = true;
        let errorMessage = null;
    
        if (name.length === 0) {
          isValid = false;
          errorMessage = 'Enter your name';
        } else if (name.length > 20) {
          isValid = false;
          errorMessage = 'Your name must contain maximum 20 characters';
        }
        return {
          ...this.state.formValidation,
          name: {isValid, errorMessage}
        };
      };

      onChangeSurname = (event) => {
        const {value} = event.target;
        const nextFormValidation = this.validateSurname(value);
        const nextState = {
          ...this.state,
          formData: {...this.state.formData, surname: value},
          formValidation: nextFormValidation
        };
        this.setState({
          ...nextState,
          buttonEnabled: this.isValidForm(nextState)
        });
      };

      validateSurname = surname => {
        let isValid = true;
        let errorMessage = null;
    
        if (surname.length === 0) {
          isValid = false;
          errorMessage = 'Enter your surname';
        } else if (surname.length > 20) {
          isValid = false;
          errorMessage = 'Your name must contain maximum 20 characters';
        }
        return {
          ...this.state.formValidation,
          surname: {isValid, errorMessage}
        };
      };
      onChangeEmail = (event) => {
        const {value} = event.target;
        const nextFormValidation = this.validateEmail(value);
        const nextState = {
          ...this.state,
          formData: {...this.state.formData, email: value},
          formValidation: nextFormValidation
        };
        this.setState({
          ...nextState,
          buttonEnabled: this.isValidForm(nextState)
        });
      };

      validateEmail = email => {
        let isValid = true;
        let errorMessage = null;
    
        if (!email.includes('@')) {
          isValid = false;
          errorMessage = 'Enter correct email';
        }
        return {
          ...this.state.formValidation,
          email: {isValid, errorMessage}
        };
      };

      onChangePhone = (event) => {
        const {value} = event.target;
        const nextFormValidation = this.validatePhone(value);
        const nextState = {
          ...this.state,
          formData: {...this.state.formData, phone: value},
          formValidation: nextFormValidation
        };
        this.setState({
          ...nextState,
          buttonEnabled: this.isValidForm(nextState)
        });
      };

      validatePhone = phone => {
        let isValid = true;
        let errorMessage = null;
    
        if (isNaN(phone)) {
          isValid = false;
          errorMessage = 'Not a number';
        }
        return {
          ...this.state.formValidation,
          phone: {isValid, errorMessage}
        };
      };
      onChangePassword = (event) => {
        const {value} = event.target;
        const nextFormValidation = this.validatePassword(value);
        const nextState = {
          ...this.state,
          formData: {...this.state.formData, password: value},
          formValidation: nextFormValidation
        };
        this.setState({
          ...nextState,
          buttonEnabled: this.isValidForm(nextState)
        });
      };

      validatePassword = password => {
        let isValid = true;
        let errorMessage = null;
    
        if (password.length === 0) {
          isValid = false;
          errorMessage = 'Enter password';
        }
        return {
          ...this.state.formValidation,
          password: {isValid, errorMessage}
        };
      };

      onChangeConfirmPassword = (event) => {
        const {value} = event.target;
        const nextFormValidation = this.validateConfirmPassword(value);
        const nextState = {
          ...this.state,
          formData: {...this.state.formData, confirmPassword: value},
          formValidation: nextFormValidation
        };
        this.setState({
          ...nextState,
          buttonEnabled: this.isValidForm(nextState)
        });
      };

      validateConfirmPassword = confirmPassword => {
        let isValid = true;
        let errorMessage = null;
        
    
        if (confirmPassword.length === 0) {         
          isValid = false;
          errorMessage = 'Confirm password';
        } else if (this.state.formData.password !== confirmPassword) {           
          isValid = false;
          errorMessage = 'Passwords do not matched';
        }        
    return {
                ...this.state.formValidation,
          confirmPassword: {isValid, errorMessage}
        };
      };
      isValidForm = nextState => {
        const {formValidation, formData} = nextState;
    
        const isValid = every(values(formValidation), {isValid: true}); 
        const isRequiredFilled = every([formData.name], (value) => (!!value));     
        return isValid && isRequiredFilled;
      };
    onSubmit = (event) => {
      event.preventDefault();     
        console.log('submit')     
     };   
    render() {        
      const {formData: {name, surname, email, phone, password,confirmPassword}, formValidation, buttonEnabled} = this.state;
        return(
            <div className='reg-container'>
                <form  onSubmit={(event) => this.handleSubmit(event)} className='reg-block'>
                    <h2>Registration</h2>
                    <p>If you already have username, go to the
                         <Link  className= 'reg-link' to={'/architect-accounts'}> account page</Link> 
                    </p>
                    <h3>Personal information</h3>                   

                    <div className='reg-input'>
                        <label>First name</label>
                        <input 
                            type='text'
                            placeholder='Enter your first name'
                            value={name}
                            name='name'
                            required
                            onChange={this.onChangeName}
                          />
                       {!formValidation.name.isValid && <div className='reg-errors'>{formValidation.name.errorMessage}</div>}                          
                    </div>

                    <div className='reg-input'>
                        <label>Last name</label>
                        <input 
                            type='text'
                            placeholder='Enter your last name'
                            value={surname}
                            name='surname'
                            onChange={this.onChangeSurname} 
                         />
                      {!formValidation.surname.isValid && <div className='reg-errors'>{formValidation.surname.errorMessage}</div>} 
                    </div>
                    
                    <div className='reg-input'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='text'                         
                            placeholder='Enter your email'                         
                            value={email}
                            name='email'
                            required
                            onChange={this.onChangeEmail}                         
                            />
                           {!formValidation.email.isValid && <div className='reg-errors'>{formValidation.email.errorMessage}</div>}     
                    </div>

                    <div className='reg-input'>
                        <label>Phone</label>
                        <input
                            type='text'
                            placeholder='Enter your phone number'
                            value={phone}
                            name='phone'
                            onChange={this.onChangePhone}
                        />
                       {!formValidation.phone.isValid && <div className='reg-errors'>{formValidation.phone.errorMessage}</div>}                  
                    </div>

                    <h3>Password</h3>
                    <div className='reg-input'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            name='password'
                            required
                            onChange={this.onChangePassword}
                        />
                       {!formValidation.password.isValid && <div className='reg-errors'>{formValidation.password.errorMessage}</div>}  
                    </div>

                    <div className='reg-input'>
                        <label htmlFor='password'>Confirm password</label>
                        <input
                            type='password'
                            placeholder='Confirm your password'
                            value={confirmPassword}
                            name='confirmPassword'
                            required
                            onChange={this.onChangeConfirmPassword}
                           />
                            {!formValidation.confirmPassword.isValid && <div className='reg-errors'>{formValidation.confirmPassword.errorMessage}</div>}  
                    </div>
                    <button
                        disabled={!buttonEnabled}
                        onClick={this.onSubmit} 
                     >
                         Create profile
                     </button>
                </form>

                <div className='reg-nav'>
                    {nav.map( (item, index) => {                         
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
  
