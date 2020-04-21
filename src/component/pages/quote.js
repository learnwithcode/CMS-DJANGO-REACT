import React from 'react';

// local import here;
import Header from '../layout/header';
import ContactCTA from '../layout/contactCTA';
import Footer from '../layout/footer';

import QuoteForm from '../../Container/logix/RequestForm';

function quote() {
    return(
        <React.Fragment>
            <Header title='Request Quote'/>
            <QuoteForm/>
            <ContactCTA/>  
            <Footer/>
        </React.Fragment>
    )
}

export default quote;