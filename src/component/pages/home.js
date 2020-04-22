import React from 'react';


//local import here
import Button from '../button';

import Header from '../layout/header';
import AboutLayout from '../layout/aboutLayout';
import Testimoial from '../layout/testimonial';
import ContactCTA from '../layout/contactCTA';
import Footer from '../layout/footer';


function Home() {
    return(
        <React.Fragment>
            <Header title='One stop solution for all your IT needs....' 
                    para='...simplifying business...'
                    img={require('../../static/images/heroimg.png')}/>

        <main>
            <section  className='section-industry'>
                
                <div className='section-industry__heading-box'>
                    <h2 className='heading-secondary u-mar-bot-med'>Services Industries</h2>
                    <Button color='btn--blue'>See all Services</Button>
                </div> 

                <div className='section-industry__container'>

                    <div className='section-industry__box'>
                        <img src={require('../../static/images/ser1.png')} alt='Logo' className='section-industry__box--1'/>
                        <h3 className='title-text u-mar-bot-small'>Ecommerce stores</h3> 
                        <h3 className='heading-tertiary'>Find out more</h3>   
                    </div>


                    <div className='section-industry__box'>
                        <img src={require('../../static/images/ser2.png')} alt='Logo' className='section-industry__box--2'/>
                        <h3 className='title-text u-mar-bot-small'>social Media Marketing</h3> 
                        <h3 className='heading-tertiary'>Find out more</h3>   
                    </div>


                    <div className='section-industry__box'>
                        <img src={require('../../static/images/ser3.png')} alt='Logo' className='section-industry__box--3'/>
                        <h3 className='title-text u-mar-bot-small'>Mobile app development</h3> 
                        <h3 className='heading-tertiary'>Find out more</h3>   
                    </div>
                </div>

            </section>


            <AboutLayout/>

            <Testimoial/>



            <section  className='section-work'>
                
                <h2 className='heading-secondary u-mar-bot-med u-center'>How it works?</h2>
                <h2 className='para--grey u-center u-mar-bot-lar'>we build some of the very best webportals with unmatched dashboard data visualization.</h2>

                <div className='section-work__container'>
                    <div className='section-work__box'>
                        <h3 className='title-text u-center u-mar-bot-small'>Front desk webportal</h3>  
                        <img src={require('../../static/images/dash.png')} alt='Logo' className='section-work__box--img'/>
                        <h2 className='para--grey u-center'>Virtual agents for webportals front desk.</h2>
                    </div>


                    <div className='section-work__box'>
                        <h3 className='title-text u-center u-mar-bot-small'>Data Visualization</h3>  
                        <img src={require('../../static/images/dash.png')} alt='Logo' className='section-work__box--img'/>
                        <h2 className='para--grey u-center'>Big data visualization and analysis</h2>
                    </div>


                    <div className='section-work__box'>
                        <h3 className='title-text u-center u-mar-bot-small'>Deploy and Monitor</h3>  
                        <img src={require('../../static/images/dash.png')} alt='Logo' className='section-work__box--img'/>
                        <h2 className='para--grey u-center'>Build virtual agents to automate business processes.</h2>
                    </div>
                </div>


            </section>

            <ContactCTA/>  
        </main>

       
            <Footer/>
        </React.Fragment>
    )
}

export default Home;