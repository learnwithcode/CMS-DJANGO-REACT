import React from 'react';

// local import here;
import Header from '../layout/header';
import AboutLayout from '../layout/aboutLayout';
import Testimonial from '../layout/testimonial';
import ContactCTA from '../layout/contactCTA';
import Footer from '../layout/footer';

function about() {
    return(
        <React.Fragment>
            <Header title='About Us' para='101logix is a permier IT solutions company pan India.'/>

            <AboutLayout/>
            
            <Testimonial/>
            
            <ContactCTA/>  
            <Footer/>
        </React.Fragment>
    )
}

export default about;