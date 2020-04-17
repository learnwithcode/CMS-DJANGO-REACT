import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Wrapper from './Container/HOC/Wrapper';

//local import here;
import Home from './component/pages/home';
import Service from './component/pages/services/services';
import About from './component/pages/about';
import Contact from './component/pages/contact';
import Quote from './component/pages/quote';
import Login from './component/pages/login';
import Signup from './component/pages/signup';

import Website from './component/pages/services/website';
import Social from './component/pages/services/social';
import Ecommerce from './component/pages/services/ecommerce';
import App from './component/pages/services/app';
import Software from './component/pages/services/software';
import Consulting from './component/pages/services/consulting';
import Elearning from './component/pages/services/elearning';
import CTO from './component/pages/services/cto';
import Startup from './component/pages/services/startup';


function Navigation() {
    return(
        <React.Fragment>
        
                <nav className='nav'>
                    <img src={require('./static/images/logo.svg')} alt='Logo' className='logo'/>
                        <ul className="nav__list">
                            <li className='nav__item'><Link className='nav__link' to='/'>home</Link></li>
                            <li className='nav__item'><Link className='nav__link' to='/'>services</Link></li>
                            <li className='nav__item'><Link className='nav__link' to='/'>about us</Link></li>
                            <li className='nav__item'><Link className='nav__link' to='/'>contact us</Link></li>
                            <li className='nav__item'><Link className='nav__link' to='/'>request quote</Link></li>
                            <li className='nav__item'><Link className='nav__link' to='/'>login</Link></li>   
                        </ul>
                        <li className='nav__item nav__item--btn'><Link className='nav__link' to='/'>Get  Started</Link></li>
                </nav>

            <Switch>
                <Route path="/" exact component={Wrapper(Home)}/> 
                <Route path="/services/" exact component={Wrapper(Service)}/>  
                <Route path="/about/" exact component={Wrapper(About)}/> 
                <Route path="/contact/" exact component={Wrapper(Contact)}/> 
                <Route path="/quote/" exact component={Wrapper(Quote)}/> 
                <Route path="/login/" exact component={Wrapper(Login)}/> 
                <Route path="/signup/" exact component={Wrapper(Signup)}/>

                <Route path="/website/" exact component={Wrapper(Website)}/> 
                <Route path="/social/" exact component={Wrapper(Social)}/> 
                <Route path="/ecommerce/" exact component={Wrapper(Ecommerce)}/> 
                <Route path="/app/" exact component={Wrapper(App)}/> 
                <Route path="/software/" exact component={Wrapper(Software)}/>
                <Route path="/consulting/" exact component={Wrapper(Consulting)}/> 
                <Route path="/elearning/" exact component={Wrapper(Elearning)}/> 
                <Route path="/cto/" exact component={Wrapper(CTO)}/> 
                <Route path="/startup/" exact component={Wrapper(Startup)}/> 
            </Switch>
        </React.Fragment>
    )
}

export default Navigation;