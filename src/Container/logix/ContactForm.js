import React from  'react';
import axios from 'axios';

//local import here
import FormFieldSet from '../../component/form/formfieldset';



class ContactForm extends React.Component {

    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        let formdata = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message,
        }

        if (formdata.phone.length < 10){
            return alert('phone must be 10 digits')
        }

        axios.post('https://logix101.herokuapp.com/logix/api/contact/', formdata)
        .then(response => {
            console.log(response)
            if (response.status === 201 ) {
                this.setState({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                })
            }
        }).catch(err => {
            console.log(err)
            return alert('something went wrongs')
        })
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <form className='form' onSubmit={event => this.onFormSubmit((event))}>
                <h1 className='heading-secondary u-mar-bot-med'>Contact Us !</h1>
                <FormFieldSet htmlFor='name' title='Name'>
                    <input id='name' name='name' type='text' placeholder='e.g. John Doe' required onChange={this.handleChange} value={this.state.name}/>
                </FormFieldSet>
                <FormFieldSet htmlFor='email' title='E-mail'>
                    <input id='email' name='email' type='email' placeholder='e.g. john.doe@gmail.com' required onChange={this.handleChange} value={this.state.email}/>
                </FormFieldSet>
                <FormFieldSet htmlFor='email' title='Phone number'>
                    <input id='phone' name='phone' type='no' placeholder='e.g. +91 9854545421' required onChange={this.handleChange} value={this.state.phone}/>
                </FormFieldSet>
                <FormFieldSet htmlFor='message' title='How can we help you'>
                    <textarea id='message' name='message' placeholder='Tell us briefly about your idea' onChange={this.handleChange} value={this.state.message}/>
                </FormFieldSet>

                <div className='form-group'>
                    <input id='formButton' className='form-btn' type='submit' placeholder='Submit' />
                </div>

                <h3 className='para--grey u-mar-top-med'>By using this contact form you agree to the Terms and Conditions of this website. Joint data controllers of your personal data are entities from 101logix Capital Group. The main purpose of processing your data is to handle your request or inquiry. To learn more about the processing of your personal data please see appropriate section in our Privacy Policy - 'Contact Form' or 'Client or Counterparty'</h3>
            </form>
        )
    }
}

export default ContactForm;