import React from 'react';

// local import here;
import Header from '../layout/header';
import ContactCTA from '../layout/contactCTA';
import Footer from '../layout/footer';

import QuoteForm from '../../Container/logix/RequestForm';

function quote() {
    return(
        <React.Fragment>
            <Header title="Let's Talk"/>

            <div className='contact__container'>
                <div className='contact__container--address'>
                    <p className='heading-tertiary u-mar-bot-med'>our office</p>
                    <h1 className='heading-secondary u-mar-bot-med'>
                        Mumbai Central
                    </h1>
                    <p className='para--grey'>+91-9372927506</p>
                    <p className='para--grey'>info@101logix.com</p>
                    <p className='para--grey'>271- Bellasis Rd: Mumbai Central</p>
                    <p className='para--grey'>Mumbai 400 008 India</p>
                    <p className='heading-tertiary u-mar-top-small'>View on map</p>
                </div>
                <div className='contact__container--form'>
                <QuoteForm/>
                </div> 
            </div>
            
            <ContactCTA/>  
            <Footer/>
        </React.Fragment>
    )
}

export default quote;