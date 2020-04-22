import React from 'react';

// local import here..
import Button from '../button';

function aboutLayout() {
    return (
            <section className='section-about'>
                    <div className='container'>
                        <div className='container__grey-box'>
                            <div className='container__grey-box--left'>
                                <h3 className='heading-tertiary u-mar-bot-small'>About us</h3>    
                                <h2 className='heading-secondary u-mar-bot-med'>28 years of growth</h2>
                                <p className='para--grey u-mar-bot-lar'>101logix is a permier IT solutions company pan India. We specialize in building eCommerce stores through Web Portals and Mobile Applications. Digital Marketing and Social Media Integration of the Web Portals is our forte. Our Software Development and Consulting Services is HIGH on QUALITY and backed with 28+ years of solid software development experience. Our new Launches of providing CTO services and Startup Mentoring is a very hot sought after programme.</p>
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
    )
}

export default aboutLayout;