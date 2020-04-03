import React, { Component } from 'react';
import '../../../assets/styles/Contact.scss'

class Contact extends Component {
    state = {
        contacts: [
            {
                image: require('../../../assets/img/contacts.png'),
                name: 'California',  
                phone: '+1 342-885-8759',
                email: 'info@interior.com',
                address: '12 W 1st St, 90001 Los Angeles, California',
            },
            {
                image: require('../../../assets/img/contacts.png'),
                name: 'Chicago',  
                phone: '+1 312-225-3121',
                email: 'info@interior.com',
                address: 'V948+W6, Chicago, Illinois',
            },
            {
                image: require('../../../assets/img/contacts.png'),
                name: 'Siattle',  
                phone: '+1 206-623-0752',
                email: 'info@interior.com',
                address: '508 Maynard Ave S, Siattle, Washington',
            },
        ]
    }

    render() {
        const {contacts} = this.state;
        const htmlContacts = contacts.map((contact, index) => {
            return (
            <div className='contacts-item' key={`contact-${index}`}>
                <img src={contact.image} alt='contact city' />
                <h2>{contact.name}</h2>
                <h3>Phone: </h3>
                <p>{contact.phone}</p>
                <h3>Email: </h3>
                <p>{contact.email}</p>
                <h3>Address: </h3>
                <p> <span >{contact.address}</span></p>
            </div>
            );
        });

        return(
            <div className='contacts-container'>
                <div className='contacts-block'>
                    {htmlContacts}
                </div>
            </div>
        );
    }
}

export default Contact;