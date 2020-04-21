import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import '../../../assets/styles/RegistrationForm.scss';


class RegistrationForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            nav: [
                {
                    name:  'Enter',
                    link:  'architect-accounts'
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
            ],       
            firstName: {
                value:'',
                messageError:'',
                isCorrect: false,
            },
            lastName:{
                value:'',
                messageError:'',
                isCorrect: false,
            },
            email: {
                value:'',
                isCorrect: false,
                messageError:'',
            },
            phone: {
                value:'',
                isCorrect: false,
                messageError:'',
            },
            password:{
                value:'',
                messageError:'',
                isCorrect: false,
            },
            confirmPassword:{
                value:'',
                messageError:'',
                isCorrect: false,
            }, 
        buttonEnabled: false, 
        }
    }  
    onChangeFirstName= (event) => { 
        let firstName={...this.state.firstName};
        let firstNameValue = event.target.value;

      if(firstNameValue.length > 20){
            firstName= {                
                messageError:'Your name must contain maximum 20 characters',
                isCorrect: false,
            }
        } else{
            firstName= {
                isCorrect: true,
            }
        }
        firstName.value = firstNameValue;        
        this.setState({firstName})  
    };
    onChangeLastName= (event) => {             
        let lastName={...this.state.lastName};
        let lastNameValue = event.target.value;  
        
        if (lastNameValue === '') {           
            lastName= {                
                messageError:'Enter your surname',
                isCorrect: false,
            }
        }else if (lastNameValue.length > 20) {
            lastName= {                
                messageError:'Your surname must contain maximum 20 characters',
                isCorrect: false,
            }
        }
        else{
            lastName= {
                isCorrect: true,
            }
        }
        lastName.value = lastNameValue;
       this.setState({lastName})  
    };
    onChangeEmail= (event) => {
        let email={...this.state.email} ;
        let emailValue = event.target.value;
        
        if (!emailValue.includes('@')) {
            email= {
                messageError:'Invalid email',
                isCorrect: false,
            }
        }else{
            email= {               
                isCorrect: true,
            }
        }

        email.value = emailValue;
       this.setState({email})
    };  
    onChangePhone= (event) => {  
        let phone = {...this.state.phone};
        let phoneValue = event.target.value;         

        if(isNaN(phoneValue)) {
            phone={                
                messageError:'Not a number',
                isCorrect: false,
            }
         } else {
            phone={
                isCorrect: true,
            }            
        }
        phone.value=phoneValue;         
        this.setState({phone});             
    };
    onChangePassword= (event) => {             
        let password = {...this.state.password};
        let passwordValue = event.target.value;         

        if (password.length === 0) {
            password={
                messageError: 'Enter password',
                isCorrect: false,
            }            
        }else {
            password={
                isCorrect: true,
            }
        }
        password.value=passwordValue;         
        this.setState({password}); 
    };
    onChangeConfirmPassword= (event) => {             
        let confirmPassword = {...this.state.confirmPassword};
        let confirmPassworddValue = event.target.value; 
        
        if (this.state.password.value !== confirmPassworddValue) {
            confirmPassword={
                messageError: 'Passwords do not matched',
                isCorrect: false,
            }            
        }else {
            confirmPassword={
                isCorrect: true,
            }
        }
        confirmPassword.value=confirmPassworddValue; 
               
       this.setState({confirmPassword}); 
    };
    validate = () => {
        let result = true;

        // for (const field of this.state.validation ) {
        //     if (!field.isCorrect) {
        //         result = false
        //     }            
        // }
        if (!this.state.firstName.isCorrect) {
            result = false
        }
        if (!this.state.lastName.isCorrect) {
            result = false
        }
        if (!this.state.phone.isCorrect) {
            result = false
        }
        if (!this.state.password.isCorrect) {
            result = false
        }
        if (!this.state.confirmPassword.isCorrect) {
            result = false
        }
        if (!this.state.email.isCorrect) {
            result = false
        }  
        return result;         
    }  
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {  
            console.log('submit')          
          //this.setState({buttonEnabled: !this.state.buttonEnabled}) 
        } else {         
            console.log('not submit') 
        }
     };   
    render() {        
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
                            value={this.state.firstName.value}
                            onChange={(event) => this.onChangeFirstName(event)}
                          />
                          {this.state.firstName.isCorrect
                            ? null
                            : <div className='reg-errors'>
                                {this.state.firstName.messageError}
                            </div>                       
                        }
                          
                    </div>

                    <div className='reg-input'>
                        <label>Last name</label>
                        <input 
                            type='text'
                            placeholder='Enter your last name'
                            value={this.state.lastName.value}
                            onChange={this.onChangeLastName} 
                         />
                         {this.state.lastName.isCorrect
                            ? null
                            : <div className='reg-errors'>
                                {this.state.lastName.messageError}
                            </div>                       
                        }
                         
                    </div>
                    
                    <div className='reg-input'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='text'                         
                            placeholder='Enter your email'                         
                            value={this.state.email.value}
                            onChange={(event) => this.onChangeEmail(event)}                         
                            />
                            {this.state.email.isCorrect
                                ? null
                                : <div className='reg-errors'>
                                    {this.state.email.messageError}
                                </div>
                            }      
                    </div>

                    <div className='reg-input'>
                        <label>Phone</label>
                        <input
                            type='text'
                            placeholder='Enter your phone number'
                            value={this.state.phone.value}
                            onChange={this.onChangePhone}
                        />
                         {this.state.phone.isCorrect
                             ? null
                             : <div className='reg-errors'>
                                {this.state.phone.messageError}
                             </div>
                        }                   

                    </div>

                    <h3>Password</h3>
                    <div className='reg-input'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            value={this.state.password.value}
                            onChange={this.onChangePassword}
                        />
                         {this.state.password.isCorrect
                            ? null
                            : <div className='reg-errors'>
                                {this.state.password.messageError}
                            </div>                       
                        }
                    </div>

                    <div className='reg-input'>
                        <label htmlFor='password'>Confirm password</label>
                        <input
                            type='password'
                            placeholder='Confirm your password'
                            value={this.state.confirmPassword.value}
                            onChange={this.onChangeConfirmPassword}
                           />
                             {this.state.confirmPassword.isCorrect
                                ? null
                                : <div className='reg-errors'>
                                    {this.state.confirmPassword.messageError}
                                </div>                       
                            }
                    </div>
                    <button
                        //disabled={!this.state.buttonEnabled}
                        //onClick={() => this.onSubmit()} 
                     >
                         Create profile
                     </button>
                </form>

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

// const mapStateToProps = (state) => {
//     return {
//         contact: state.contact
//     };
// };


export default RegistrationForm;

RegistrationForm.propTypes = {
   nav: PropTypes.array,
}
  
