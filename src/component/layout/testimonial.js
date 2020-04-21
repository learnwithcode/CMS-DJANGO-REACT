import React from 'react';

// local import here

function testimonials() {
    return (
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
    )
}

export default testimonials;