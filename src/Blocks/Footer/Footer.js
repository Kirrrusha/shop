import React, { Component } from 'react'

// import PropTypes from 'prop-types';
import '../../styles/css/Footer.scss'
import '../../styles/css/App.scss'
import Social_link from '../../styles/img/social-links.jpg'

class Footer extends Component {
    render() {
        const info = [
            'Sales terms',
            'Customer care',
            'Delivery',
            'Architect accounts',
            'Careers',
            'Exchanges & returns'
        ]
        return (
            <div className='footer'>
                <div className='footer_wrapper'>
                    <div className='footer_contact'>
                        <h2>Contact Us</h2>
                        <p>132A Bridge Road Richmond VIC Australia.</p>
                        <p>Talk to us on 1300 132 <a href='/'>info@interior.com</a></p>
                    </div>

                    <div className='footer_info'>
                        <h2>Useful Information</h2>
                        <ul className='footer_list'>
                            {info.map( (item, index) => {
                                return <li key={index} className='info_items'>
                                      <Link label={item} />
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className='footer_subscribe'>
                        <h2>Let’s Stay in Touch!</h2>
                        <p>Suscribe to know about our latest news, products and special offers just for suscribers</p>
                        <input type="mail" placeholder='your email address'></input>
                        <button type="submit" className="contacts-button"></button>
                    </div>
                </div>

                <div className='footer_copyright'>
                    <div>© Copyright - INTERIOR 2016. All Rights Reserved.</div>
                    <a href='/'><img src={Social_link} alt='#'></img></a>
                    <div>Terms & Conditions  /  Privacy policy & Cookies</div>
                </div>  
            </div>
        )
    }
}

class Link extends Component {
    render() {
      
        return <div><a href='/'>{this.props.label}</a></div>
    }
 }

 Footer.defaultProps = {
    label: ''    
};

export default Footer;
