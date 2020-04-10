import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Wrapper from './Container/HOC/Wrapper';

//local import here;
import RequestForm from './Container/logix/RequestForm';
import ContactForm from './Container/logix/ContactForm';
import EmailForm from './Container/logix/EmailForm';

function Navigation() {
    return(
        <React.Fragment>

            <nav>
				<div className="navWide">
					<div className="wideDiv">
						<Link to='/'>logix</Link>
                        <Link to='/contact/'>contact</Link>
                        <Link to='/demo/'>demo</Link>

					</div>
				</div>
			</nav>
        <Switch>
            <Route path="/" exact component={Wrapper(EmailForm)}/>  
            <Route path="/contact/" exact component={Wrapper(ContactForm)}/> 
            <Route path="/demo/" exact component={Wrapper(RequestForm)}/> 
        </Switch>
        </React.Fragment>
    )
}

export default Navigation;