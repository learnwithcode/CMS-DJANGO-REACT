import React from 'react';


function FormFieldSet(props) {
    return(
        <fieldset className='form-group'>
        <label className='heading-tertiary u-mar-bot-lar' htmlFor={props.htmlFor}>{props.title}</label>
        {props.children}
        </fieldset>
    )
}

export default FormFieldSet;