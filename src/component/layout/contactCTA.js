import React from 'react';

// local import here
import Button from '../button';

function contactCTA() {
    return(
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
    )
}

export default contactCTA;