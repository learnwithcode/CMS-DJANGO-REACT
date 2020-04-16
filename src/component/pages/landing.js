import React from 'react';

//local import here
import Button from '../button'

function Landing() {
    return(
        <React.Fragment>
        <header className='header'>
            <div className='header__text-box'>
                <h1 className='heading-primary'>One stop solution for all your IT needs....</h1>
                <p className='para-white'>...simplifying business...</p>
                <Button color='btn--white'/>
            </div>
            <img src={require('../../static/images/heroimg.png')} alt='Logo' className='header__hero'/>
        </header>
        </React.Fragment>
    )
}

export default Landing;