import React from 'react';
import { Link } from 'react-router-dom';

// local import here
import FooterMenuList from '../../Container/logix/FooterMenuList';

function footer() {
    return(
        <footer className='footer'>
            <div className='footer__info-container'>
                <div className='footer__info-container__box'>
                    <p className='footer__info-container__box--logo'>101logix</p>
                    
                    <p className='footer__info-container__box--count'>3932</p>
                
                    <p className='footer__info-container__box--info'>+91-9372927506</p>
                    
                    <p className='footer__info-container__box--info'>info@101logix.com</p>
                    
                    <p className='footer__info-container__box--info'>271- bellasis Rd: mumbai central, mumbai 400 008 india</p>
            
                </div>
                <p className='footer__info-container--copyright'>&copy;  2020 101logix ltd.</p>
            </div>

            <div className='footer__link'>
                <FooterMenuList/>
                <nav className='footer__link-nav'>
                    <ul className="footer__link-nav__list">
                    <li className='footer__link-nav__item footer__link-nav__item'><Link className='footer__link-nav__link--main' to='/'>Useful Links</Link></li>
                        <li className='footer__link-nav__item'><Link className='footer__link-nav__link' to='/'>home</Link></li>
                        <li className='footer__link-nav__item'><Link className='footer__link-nav__link' to='/about/'>about us</Link></li>
                        <li className='footer__link-nav__item'><Link className='footer__link-nav__link' to='/contact/'>contact us</Link></li>
                        <li className='footer__link-nav__item'><Link className='footer__link-nav__link' to='/quote/'>request quote</Link></li>
                        <li className='footer__link-nav__item'><Link className='footer__link-nav__link' to='/login/'>Login</Link></li>
                        <li className='footer__link-nav__item'><Link className='footer__link-nav__link' to='/signup/'>Sign Up</Link></li>
                    </ul>
                </nav>

            </div>
        </footer>
    )
}

export default footer;