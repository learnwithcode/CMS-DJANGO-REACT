import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Wrapper from './Container/HOC/Wrapper';

//local import here;
import Landing from './component/pages/landing';
// import RequestForm from './Container/logix/RequestForm';
// import ContactForm from './Container/logix/ContactForm';
// import EmailForm from './Container/logix/EmailForm';

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
            <Route path="/" exact component={Wrapper(Landing)}/>  
            {/* <Route path="/contact/" exact component={Wrapper(ContactForm)}/> 
            <Route path="/demo/" exact component={Wrapper(RequestForm)}/>  */}
        </Switch>
        </React.Fragment>
    )
}

export default Navigation;