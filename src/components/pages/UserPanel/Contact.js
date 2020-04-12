import React, { Component } from 'react';
import '../../../assets/styles/Contact.scss';
import { contacts } from '../../../constant/contacts';

class Contact extends Component {
      render() {        
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