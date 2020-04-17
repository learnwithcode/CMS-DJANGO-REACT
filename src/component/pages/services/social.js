import React from 'react';

// local import here;
import Header from '../../layout/header';
import ContactCTA from '../../layout/contactCTA';
import Footer from '../../layout/footer';

function social() {
    return(
        <React.Fragment>
            <Header/>
            
            <ContactCTA/>  
            <Footer/>
        </React.Fragment>
    )
}

export default social;