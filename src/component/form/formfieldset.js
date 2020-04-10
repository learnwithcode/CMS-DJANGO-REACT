import React from 'react';


function FormFieldSet(props) {
    return(
        <fieldset className='form__group'>
        <label htmlFor={props.htmlFor}>{props.title}</label>
        {props.children}
        </fieldset>
    )
}

export default FormFieldSet;