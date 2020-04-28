import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// local import here;

import Header from '../../component/layout/header';
import ContactCTA from '../../component/layout/contactCTA';
import Footer from '../../component/layout/footer';

import ServiceSideNav from '../../component/ui/serviceSideNav';
import ServiceBox from '../../component/ui/serviceBox';

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
        let serviceSideNavTitle = initialState.map(ser => {
            return (
               <NavLink className='nav__link'  to={'/services/' + ser.id + '/'}> 
                    <ServiceSideNav key={ser.id} title={ser.title}/>
                </NavLink>
            )
        })

        let serviceBox = initialState.map(box => {
            return (
                <ServiceBox  key={box.id} title={box.title} description={box.description} link={'/services/' + box.id + '/'}>
                    {box.service.map(ser => {
                       return <h3 className='heading-tertiary u-mar-right-small' key={ser.id}> {ser.title}</h3> 
                    })}      
                        
                </ServiceBox>            
            )
        })
        return (
            <React.Fragment>
                <Header title='From creation to maintenance' 
                        para='Our digital solutions are future-proof and designed to meet your growth objectives.
                                 We develop flexible, market-aligned bespoke software applications and offer a range of support and maintenance services.'
                                 img={require('../../static/images/service_banner.png')}/>
                                 
                    <section  className='service-layout u-mar-top-lar'>
                        <div className='service-layout__container--list'>
                            <h1 className='heading-secondary u-mar-bot-lar'>Services we offer</h1>
                                {serviceSideNavTitle}
                        </div>

                        <div className='service-layout__container--box'>
                            {serviceBox}
                        </div>

                    </section>
                <ContactCTA/>  
                <Footer/>
            </React.Fragment>
        )
    }
}

export default ServiceListApiView;