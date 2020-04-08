import React, {Component} from 'react';
import Social_link from '../../assets/img/social-links.jpg';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class Footer extends Component {
  state = {
    info: [
      {
        name: 'Sales terms',
        link: 'sales-terms'
      },
      {
        name: 'Customer care',
        link: 'customer-care'
      },
      {
        name: 'Delivery',
        link: 'delivery'
      },
      {
        name: 'Architect accounts',
        link: 'architect-accounts'
      },
      {
        name: 'Careers',
        link: 'careers'
      },
      {
        name: 'Exchanges & returns',
        link: 'exchanges-returns'
      },  
    ]
  }

  render() {
    return (
      <footer>
        <div className='wrapper'>
          <div className='footer-blocks'>
            <div className='footer-contact'>
              <h2>Contact Us</h2>
              <p>132A Bridge Road Richmond VIC Australia.</p>
              <p>Talk to us on 1300 132<br/> <a href='/'>info@interior.com</a></p>
            </div>


            <div className='footer-info'>
              <h2>Useful Information</h2>
              <ul className='footer-info-links'>
              {this.state.info.map((item, index) => {
                  return <li className='footer-info-links-item' key={index}>
                    <Link to={`/${item.link}`}>
                          {item.name}
                    </Link>
                  </li>;
                })} 
              </ul>
            </div>


            <div className='footer-subscribe'>
              <h2>Let’s Stay in Touch!</h2>
              <p>Suscribe to know about our latest news, products and special offers just for suscribers</p>
              <div className='footer-input'>
                <input type="mail" placeholder='your email address'/>
                <button type="submit" className="btn"/>
              </div>
            </div>
          </div>


          <div className='footer-copyright'>
            <p>© Copyright - INTERIOR 2016. All Rights Reserved.</p>
            <a href='/'><img src={Social_link} alt='#'/></a>
            <p>Terms & Conditions / Privacy policy & Cookies</p>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;

Footer.propTypes = {
  info: PropTypes.array,
}
