import React from 'react';

// local import here;
import Header from '../layout/header';
import ContactCTA from '../layout/contactCTA';
import Footer from '../layout/footer';

import ContactForm from '../../Container/logix/ContactForm';

function contact() {
    return(
        <React.Fragment>
            <Header/>
            <ContactForm/>
            <ContactCTA/>  
            <Footer/>
        </React.Fragment>
    )
}

export default contact;