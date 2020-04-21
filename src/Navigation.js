import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Wrapper from './Container/HOC/Wrapper';

//local import here;
import Home from './component/pages/home';
import About from './component/pages/about';
import Contact from './component/pages/contact';
import Quote from './component/pages/quote';
import Login from './component/pages/login';
import Signup from './component/pages/signup';

import Service from './component/pages/services/Services';
import ServiceDetail from './component/pages/services/ServiceDetail';


function Navigation() {
    return(
        <React.Fragment>
        
                <nav className='nav'>
                    <img src={require('./static/images/logo.svg')} alt='Logo' className='logo'/>
                        <ul className="nav__list">
                            <li className='nav__item'><Link className='nav__link' to='/'>home</Link></li>
                            <li className='nav__item'><Link className='nav__link' to='/services/'>services</Link></li>
                            <li className='nav__item'><Link className='nav__link' to='/about/'>about us</Link></li>
                            <li className='nav__item'><Link className='nav__link' to='/contact/'>contact us</Link></li>
                            <li className='nav__item'><Link className='nav__link' to='/quote/'>request quote</Link></li>
                            <li className='nav__item'><Link className='nav__link' to='/login/'>login</Link></li>   
                        </ul>
                        <li className='nav__item nav__item--btn'><Link className='nav__link' to='/signup/'>Get  Started</Link></li>
                </nav>

            <Switch>
                <Route path="/" exact component={Wrapper(Home)}/> 
                <Route path="/services/" exact component={Wrapper(Service)}/>  
                <Route path="/about/" exact component={Wrapper(About)}/> 
                <Route path="/contact/" exact component={Wrapper(Contact)}/> 
                <Route path="/quote/" exact component={Wrapper(Quote)}/> 
                <Route path="/login/" exact component={Wrapper(Login)}/> 
                <Route path="/signup/" exact component={Wrapper(Signup)}/>

                <Route path="/services/detail/" exact component={Wrapper(ServiceDetail)}/> 


            </Switch>
        </React.Fragment>
    )
}

export default Navigation;