import React from 'react';

// local import here;
import Header from '../../layout/header';
import ContactCTA from '../../layout/contactCTA';
import Footer from '../../layout/footer';

class ServiceDetail extends React.Component {
    render() {
        return(
            <React.Fragment>
                    <Header title='Digital & Social Media Marketing' 
                    para='Our digital solutions are future-proof and designed to meet your growth objectives.
                    We develop flexible, market-aligned bespoke software applications and offer a range of support and maintenance services.'
                    img={require('../../../static/images/service_banner.png')}/>

                    <section  className='service-detail u-mar-top-lar'>

                        <div className='service-detail__container u-mar-top-lar'>
                            <div className='service-detail__container--left'>
                                <h3 className='heading-tertiary u-mar-bot-small'>Digital & social Media Markeing</h3>    
                                <h2 className='heading-secondary u-mar-bot-med'>Digital Marketing & Social Media Integration that focuses On Digital Landscape Solutions</h2>
                                <p className='para--grey u-mar-bot-lar'>Managing multiple marketing channels is always a challenge in the digital marketing world.
                                                                        We partner with our clients to create a digital command centre that can help respond to their 
                                                                        on-demand needs, offer a single customer view as well as help simplify the complexity of channels, 
                                                                        messaging, audience and measurement.</p>
                                        
                            </div>

                            <div className='service-detail__container--right'>
                            <img src={require('../../../static/images/digisocial.png')} alt='Logo' className='container__grey-box--img'/>
                            </div>
                        </div>

                        <div className='sub-service'>
                            <h3 className='heading-tertiary u-mar-bot-small'>Explore Our Services</h3>
                        
                        </div>

                        <div className='tag-service'>
                            <div className='tag-service-box'>
                             <h2 className='title-text '>Digital Command Centre</h2>
                            </div>

                            <div className='tag-service-box'>
                             <h2 className='title-text '>Online Advertising</h2>
                            </div>

                            <div className='tag-service-box tag-service-box--highlight'>
                             <h2 className='title-text '>Social Media Markeing</h2>
                            </div>
                            
                            <div className='tag-service-box'>
                             <h2 className='title-text '>Email Marketing</h2>
                            </div>

                            <div className='tag-service-box'>
                             <h2 className='title-text '>Search Engine Strategy</h2>
                            </div>
                        </div>
                        

                        <div className='service-detail__container u-mar-top-lar'>
                            <div className='service-detail__container--left'>
                                <img src={require('../../../static/images/socialmedia.png')} alt='Logo' className='container__grey-box--img'/>         
                            </div>

                            <div className='service-detail__container--right'>
                                <h2 className='title-text u-mar-bot-med'>Social Media Markeing</h2>
                                <p className='para--grey u-mar-bot-lar'>Managing multiple marketing channels is always a challenge in the digital marketing world.
                                                                        We partner with our clients to create a digital command centre that can help respond to their 
                                                                        on-demand needs, offer a single customer view as well as help simplify the complexity of channels, 
                                                                        messaging, audience and measurement.</p>
                            </div>
                        </div>
                        
                    </section>
                <ContactCTA/>  
                <Footer/>
            </React.Fragment>
        )
    }

}

export default ServiceDetail;