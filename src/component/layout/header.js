import React from 'react';

// local import here


function header(props) {
    return (
        <header className='header'>
            <div className='header__text-box'>
                <h1 className='heading-primary u-mar-bot-lar'>{props.title}</h1>
                    <p className='para--white'>{props.para}</p>
                {props.children}
            </div>
            <img src={props.img} className='header__hero'/>
        </header>
    )
}

export default header;