import React from 'react';

//local import here
import Button from '../button'

function Home() {
    return(
        <React.Fragment>
        <header className='header'>
            <div className='header__text-box'>
                <h1 className='heading-primary u-mar-bot-lar'>One stop solution for all your IT needs....</h1>
                <p className='para--white'>...simplifying business...</p>
                <Button color='btn--white'>Let's talk</Button>
            </div>
            <img src={require('../../static/images/heroimg.png')} alt='Logo' className='header__hero'/>
        </header>

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

            <section className='section-about'>
                <div className='container'>
                    <div className='container__grey-box'>
                        <div className='container__grey-box--left'>
                            <h3 className='heading-tertiary u-mar-bot-small'>About us</h3>    
                            <h2 className='heading-secondary u-mar-bot-med'>28 years of growth</h2>
                            <p className='para--grey'>101logix is a permier IT solutions company pan India. We specialize in building eCommerce stores through Web Portals and Mobile Applications. Digital Marketing and Social Media Integration of the Web Portals is our forte. Our Software Development and Consulting Services is HIGH on QUALITY and backed with 28+ years of solid software development experience. Our new Launches of providing CTO services and Startup Mentoring is a very hot sought after programme.</p>
                            <Button color='btn--blue'>Let's talk</Button>
                        </div>

                        <div className='container__grey-box--right'>

                            <div className='section-about__container'>

                                <div className='section-about__container--up'>
                                    <div className='section-about__container-box'>
                                        <h3 className='title-bold-blue u-mar-bot-med'>700+</h3>   
                                        <img src={require('../../static/images/ab1.png')} alt='Logo' className='section-about__container-box--img'/>  
                                        <p className='para--grey'>Skilled & motivated staff</p>
                                    </div>
                                    <div className='section-about__container-box'>
                                        <h3 className='title-bold-blue u-mar-bot-med'>3</h3>
                                        <img src={require('../../static/images/ab2.png')} alt='Logo' className='section-about__container-box--img--2'/>      
                                        <p className='para--grey'>offices in India</p>
                                    </div>
                                </div>
                                <div className='section-about__container-sub--down'>
                                    <div className='section-about__container-box'>
                                        <h3 className='title-bold-blue u-mar-bot-med'>750+</h3>   
                                        <img src={require('../../static/images/ab3.png')} alt='Logo' className='section-about__container-box--img'/>   
                                        <p className='para--grey'>Successful Projects</p>
                                    </div>
                                    <div className='section-about__container-box'>
                                        <h3 className='title-bold-blue u-mar-bot-med'>90+</h3>      
                                        <img src={require('../../static/images/ab4.png')} alt='Logo' className='section-about__container-box--img'/>  
                                        <p className='para--grey'>Clients worldwide</p>
                                    </div>
                                </div> 
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section  className='section-testimonial'>
                
                    <h3 className='heading-tertiary u-mar-bot-small u-center'>testimonials</h3> 
                    <h2 className='heading-secondary u-mar-bot-med u-center'>What clients says about us</h2>

                <div className='section-testimonial__main'>
                    <div className='section-testimonial__container'>

                        <div className='section-testimonial__box--1'>
                            <p className='para--grey'>“In replatforming our core applications, we wanted a partner who offered technical excellence along with sharing our core values where Integrity is key. With proven agile methods, 101logix have delivered in all counts.”</p>
                            <h3 className='title-text u-mar-top-lar'>Peter R. Smith</h3> 
                            <h3 className='title-text-grey u-mar-top-small'>Head of application at Edrington</h3>
                            <img src={require('../../static/images/client-logo.png')} alt='Logo' className='section-testimonial--img'/>
                        </div>


                        <div className='section-testimonial__box--1'>
                            <p className='para--grey'>“Each member of the 101logix team is technically excellent and I am impressed by their definition of "Excellence". This together with their attitude towards integrity makes them a near-shore partner that I can trust.”</p>
                            <h3 className='title-text u-mar-top-lar'>Peter R. Smith</h3> 
                            <h3 className='title-text-grey u-mar-top-small'>Head of application at Edrington</h3>
                            <img src={require('../../static/images/client-logo.png')} alt='Logo' className='section-testimonial--img'/>
                        </div>
                    </div>

                    <div className='section-testimonial__box--2'>
                            <p className='para--grey'>“Why we’ve been working with 101logix since 2013? Because they build a relationship that’s based on trust. Over the years they’ve proven that their delivery is fast and stable. On one hand – they have a high retention rate of people working on our projects and for those who change, they manage the knowledge transfer really well. On the other hand – they can ramp up and provide the skills necessary to get things done. We can trust that Objectivity will always deliver technology that’s secure and maintainable, and that they will use all the knowledge they have to propose the best solution possible. The way they collaborate with us to achieve success is simply unique.”</p>
                            <h3 className='title-text u-mar-top-lar'>Peter R. Smith</h3> 
                            <h3 className='title-text-grey u-mar-top-small'>Head of application at Edrington</h3>
                            <img src={require('../../static/images/client-logo.png')} alt='Logo' className='section-testimonial--img'/>
                    </div>
                </div>

        
            </section>

            <section  className='section-work'>
                
                <h2 className='heading-secondary u-mar-bot-med u-center'>How it works?</h2>
                <h2 className='para--grey u-center'>we build some of the very best webportals with unmatched dashboard data visualization.</h2>

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

            <section className='section-contact'>
                <div className='container'>
                    <div className='container__grey-box'>
                        <div className='container__grey-box--left'>
                            <h3 className='heading-tertiary u-mar-bot-small'>Contact us</h3>    
                            <h2 className='heading-secondary u-mar-bot-med'>Start your project with 101logix</h2>

                            <Button color='btn--blue'>Let's talk</Button>
                        </div>

                        <div className='container__grey-box--right'>
                        <img src={require('../../static/images/contact_img.png')} alt='Logo' className='container__grey-box--img'/>

                        </div>
                    </div>
                </div>
            </section>            
        </main>

        <footer className='footer'>
            <div className='footer__info-container'>
                <div className='footer__info-container--box'>
                    <p>101logix</p>
                    
                    <p>3932</p>
                
                    <p>+91-9372927506</p>
                    
                    <p>info@101logix.com</p>
                    
                    <p>271- bellasis Rd: mumbai central, mumbai 400 008
                    india</p>
            
                </div>
            </div>
        </footer>
        </React.Fragment>
    )
}

export default Home;