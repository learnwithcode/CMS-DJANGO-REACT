import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// local import here;


class ServiceListApiView extends React.Component {
    state = {
        services: [],
    }

    componentDidMount(){
        axios.get('https://logix101.herokuapp.com/pages/api/service/')
        .then(response => {
            console.log(response.data)
            this.setState({services:response.data})
        })
    }

    render() {
        let initialState = this.state.services

        let footerLink = initialState.map(link => {
            return (
                <li className='footer__link-nav__item' key={link.id}>
                    <NavLink className='footer__link-nav__link' to={'/services/' + link.slug + '/'}>{link.title}</NavLink>
                </li>
         
            )
        })
        return (
            <React.Fragment>

                                 
                <nav className='footer__link-nav'>
                    <ul className="footer__link-nav__list">
                        <li className='footer__link-nav__item footer__link-nav__item'><NavLink className='footer__link-nav__link--main' to='/'>Services</NavLink></li>
                        {footerLink} 
                    </ul>
                </nav>

            </React.Fragment>
        )
    }
}

export default ServiceListApiView;