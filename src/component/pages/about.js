import React from 'react';

// local import here;
import Button from '../ui/button';

import Header from '../layout/header';
import AboutLayout from '../layout/aboutLayout';
import Testimonial from '../layout/testimonial';
import ContactCTA from '../layout/contactCTA';
import Footer from '../layout/footer';

function about() {
    return(
        <React.Fragment>
            <Header title='About Us' 
            para='101logix is a permier IT solutions company pan India. We specialize in building eCommerce stores through Web Portals and Mobile Applications. Digital Marketing and Social Media Integration of the Web Portals is our forte..'
            img={require('../../static/images/about.png')}>
            <Button color='btn--white' to={'/quote/'}>Let's talk</Button>
            </Header>

            <AboutLayout/>
            
            <Testimonial/>
            
            <ContactCTA/>  
            <Footer/>
        </React.Fragment>
    )
}

export default about;