import React from 'react';
import {  Link } from 'react-router-dom';

function button(props) {
    return(
        <Link className={`btn ${props.color}`} to='/'>Let's talk <span className='btn-arrow'> > </span></Link>
    )
}

export default button;