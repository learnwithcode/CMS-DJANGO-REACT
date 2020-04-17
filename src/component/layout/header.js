import React from 'react';

// local import here
import Button from '../button';

function header() {
    return (
        <header className='header'>
            <div className='header__text-box'>
                <h1 className='heading-primary u-mar-bot-lar'>One stop solution for all your IT needs....</h1>
                <p className='para--white'>...simplifying business...</p>
                <Button color='btn--white'>Let's talk</Button>
            </div>
            <img src={require('../../static/images/heroimg.png')} alt='Logo' className='header__hero'/>
        </header>
    )
}

export default header;