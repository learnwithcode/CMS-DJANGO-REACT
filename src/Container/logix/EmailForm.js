import React from  'react';
import axios from 'axios';

//local import here
import FormFieldSet from '../../component/form/formfieldset';



class EmailForm extends React.Component {

    state = {
        email: '',
    }

    onFormSubmit = (e) => {
        let formdata = {
            email: this.state.email,
        }



        axios.post('https://logix101.herokuapp.com/logix/api/email/', formdata)
        .then(response => {
            console.log(response)
            if (response.status === 201 ) {
                this.setState({
                    email: '',
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
                <h1>EmailForm</h1>

                <FormFieldSet htmlFor='email' title='Email:'>
                    <input id='email' name='email' type='email' required onChange={this.handleChange} value={this.state.email}/>
                </FormFieldSet>

                <div className='form__group'>
                    <input id='formButton' className='btn' type='submit' placeholder='Submit' />
                </div>
            </form>
        )
    }
}

export default EmailForm;