import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Wrapper from './Container/HOC/Wrapper';

//local import here;
import Home from './component/pages/home';
import About from './component/pages/about';
import Contact from './component/pages/contact';
import Quote from './component/pages/quote';
import Login from './component/pages/login';
import Signup from './component/pages/signup';

import ServiceListView from './Container/logix/ServiceListView'
import ServiceDetail from './Container/logix/ServiceDetail';


function Navigation() {
    return(
        <React.Fragment>
        
                <nav className='nav'>
                    <img src={require('./static/images/logo.svg')} alt='Logo' className='logo'/>
                        <ul className="nav__list">
                            <li className='nav__item'><NavLink className='nav__link' to='/' exact>home</NavLink></li>
                            <li className='nav__item'><NavLink className='nav__link' to='/services/'>services</NavLink></li>
                            <li className='nav__item'><NavLink className='nav__link' to='/about/'>about us</NavLink></li>
                            <li className='nav__item'><NavLink className='nav__link' to='/contact/'>contact us</NavLink></li>
                            <li className='nav__item'><NavLink className='nav__link' to='/quote/'>request quote</NavLink></li>
                            <li className='nav__item'><NavLink className='nav__link' to='/login/'>login</NavLink></li>   
                        </ul>
                        <li className='nav__item nav__item--btn'><NavLink className='nav__link' to='/signup/'>Get  Started</NavLink></li>
                </nav>

            <Switch>
                <Route path="/" exact component={Wrapper(Home)}/> 
                <Route path="/services/" exact component={Wrapper(ServiceListView)}/>  
                <Route path="/about/" exact component={Wrapper(About)}/> 
                <Route path="/contact/" exact component={Wrapper(Contact)}/> 
                <Route path="/quote/" exact component={Wrapper(Quote)}/> 
                <Route path="/login/" exact component={Wrapper(Login)}/> 
                <Route path="/signup/" exact component={Wrapper(Signup)}/>

                <Route path="/services/:serviceID/" exact component={Wrapper(ServiceDetail)}/> 


            </Switch>
        </React.Fragment>
    )
}

export default Navigation;