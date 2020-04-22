import React from 'react';

// local import here;
import Button from '../../button';

import Header from '../../layout/header';
import ContactCTA from '../../layout/contactCTA';
import Footer from '../../layout/footer';

class Services extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Header title='From creation to maintenance' 
                        para='Our digital solutions are future-proof and designed to meet your growth objectives.
                                 We develop flexible, market-aligned bespoke software applications and offer a range of support and maintenance services.'
                                 img={require('../../../static/images/service_banner.png')}/>

            <section  className='service-layout u-mar-top-lar'>
                    <div className='service-layout__container--list'>
                        <h1 className='heading-secondary u-mar-bot-lar u-center'>Services we offer</h1>
                        {/* <div className='service-layout__container--list-box'> */}
                            <h3 className='title-bold-grey u-mar-bot-small'>Ecommerce Store</h3>
                            <h3 className='title-bold-grey u-mar-bot-small'>Social Media Marketing</h3>
                            <h3 className='title-bold-grey u-mar-bot-small'>Mobile App Development</h3>
                            <h3 className='title-bold-grey u-mar-bot-small'>Software Development</h3>
                        {/* </div> */}
                        
                    </div>
            
                    <div className='service-layout__container--box'>

                        <div className='service-layout__box'>
                            <div className='service-layout__box-container--right'>
                                <img src={require('../../../static/images/ser1.png')} alt='Logo' className='service-layout__box--1'/>
                            </div>    
                            <div className='service-layout__box-container--left'>
                                <h3 className='title-text u-mar-bot-small'>Ecommerce stores</h3> 
                                <h3 className='title-text-grey u-mar-bot-small'>each member of the 101logix team is technically excellent</h3>
                                <div className='service-layout__box-container--left-services u-mar-bot-small'>
                                    <h3 className='heading-tertiary u-mar-right-small'>one</h3>   
                                    <h3 className='heading-tertiary u-mar-right-small'>two</h3>  
                                    <h3 className='heading-tertiary u-mar-right-small'>three</h3>  
                                </div>
                                <Button color='btn--blue' to={'/services/detail/'}>Read More</Button>  
                            </div>
                        </div>


                        <div className='service-layout__box'>
                        <div className='service-layout__box-container--right'>
                                <img src={require('../../../static/images/ser2.png')} alt='Logo' className='service-layout__box--2'/>
                        </div> 
                            <div className='service-layout__box-container--left'>
                                <h3 className='title-text u-mar-bot-small'>Social Media Marketing</h3> 
                                <h3 className='title-text-grey u-mar-bot-small'>each member of the 101logix team is technically excellent</h3>
                                <div className='service-layout__box-container--left-services u-mar-bot-small'>
                                    <h3 className='heading-tertiary u-mar-right-small'>one</h3>   
                                    <h3 className='heading-tertiary u-mar-right-small'>two</h3>  
                                </div>
                                <Button color='btn--blue' to={'/services/detail/'}>Read More</Button> 
                            </div> 
                        </div>


                        <div className='service-layout__box'>
                        <div className='service-layout__box-container--right'>
                                <img src={require('../../../static/images/ser3.png')} alt='Logo' className='service-layout__box--3'/>
                        </div>
                            <div className='service-layout__box-container--left'>
                                <h3 className='title-text u-mar-bot-small'>Mobile app development</h3> 
                                <h3 className='title-text-grey u-mar-bot-small'>each member of the 101logix team is technically excellent</h3>
                                <div className='service-layout__box-container--left-services u-mar-bot-small'>
                                    <h3 className='heading-tertiary u-mar-right-small'>one</h3>   
                                </div>
                                <Button color='btn--blue' to={'/services/detail/'}>Read More</Button>    
                            </div>
                        </div>

                        <div className='service-layout__box'>
                            <div className='service-layout__box-container--right'>
                                <img src={require('../../../static/images/ser1.png')} alt='Logo' className='service-layout__box--1'/>
                            </div>    
                            <div className='service-layout__box-container--left'>
                                <h3 className='title-text u-mar-bot-small'>Software Development</h3> 
                                <h3 className='title-text-grey u-mar-bot-small'>each member of the 101logix team is technically excellent</h3>
                                <div className='service-layout__box-container--left-services u-mar-bot-small'>
                                    <h3 className='heading-tertiary u-mar-right-small'>one</h3>   
                                    <h3 className='heading-tertiary u-mar-right-small'>two</h3>  
                                </div>
                                <Button color='btn--blue' to={'/services/detail/'}>Read More</Button>  
                            </div>
                        </div>

                    </div>

            </section>
                <ContactCTA/>  
                <Footer/>
            </React.Fragment>
        )
    }

}

export default Services;