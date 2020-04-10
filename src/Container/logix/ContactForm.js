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
        let formdata = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message,
        }

        if (formdata.phone.length < 10){
            return alert('phone must be 10 digits')
        }

        axios.post('http://127.0.0.1:8000/logix/api/contact/', formdata)
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
                <h1>ContactForm</h1>
                <FormFieldSet htmlFor='name' title='Full Name:'>
                    <input id='name' name='name' type='text' required onChange={this.handleChange} value={this.state.name}/>
                </FormFieldSet>
                <FormFieldSet htmlFor='email' title='Email:'>
                    <input id='email' name='email' type='email' required onChange={this.handleChange} value={this.state.email}/>
                </FormFieldSet>
                <FormFieldSet htmlFor='email' title='Phone:'>
                    <input id='phone' name='phone' type='no' required onChange={this.handleChange} value={this.state.phone}/>
                </FormFieldSet>
                <FormFieldSet htmlFor='message' title='Message:'>
                    <textarea id='message' name='message' onChange={this.handleChange} value={this.state.message}/>
                </FormFieldSet>

                <div className='form__group'>
                    <input id='formButton' className='btn' type='submit' placeholder='Submit' />
                </div>
            </form>
        )
    }
}

export default ContactForm;