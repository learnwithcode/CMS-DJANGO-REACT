import React from 'react';

// local import here
import Button from '../button';

function header(props) {
    return (
        <header className='header'>
            <div className='header__text-box'>
                <h1 className='heading-primary u-mar-bot-lar'>{props.title}</h1>
                    <p className='para--white'>{props.para}</p>
                <Button color='btn--white'>Let's talk</Button>
            </div>
            <img src={props.img} className='header__hero'/>
        </header>
    )
}

export default header;