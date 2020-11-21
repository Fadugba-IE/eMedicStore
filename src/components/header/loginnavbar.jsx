import React from 'react';
import '../../styles/Navbar.scss';
import navlogo from '../../images/logo-white.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavbarLogin() {


    return (
        <div>
            <nav class="navbar-login navbar-expand-lg navbar-light bg-light">
                <div className="logo">
                    <img src={navlogo} alt="logo" />
                </div>
                <ul className="nav-links">
                    <li><a href>Home</a></li>
                    <li><a href>Services</a></li>
                    <li id="shop"><a href>Shop</a></li>
                    <li><a href>About Us</a></li>
                    <li><a href>Contact Us</a></li>
                    <li>

                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg width="3em" height="2em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg> Login
  </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" id= "drop-button"type="button">Login</button>
                                <p className="OR">
                                    <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                    </svg>
                                OR
                                <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </p>
                                <button class="dropdown-item" id= "drop-button" type="button">Sign Up</button>
                            </div>
                        </div>
                    </li>

                </ul>







                <ul className='icons-header-login' >
                    <li><a href> <FontAwesomeIcon icon={['far', 'heart']} /> </a></li>
                    <li><a href><FontAwesomeIcon icon={['fas', 'shopping-cart']} /></a></li>
                </ul>

            </nav>

        </div>
    )
}

export default NavbarLogin;

