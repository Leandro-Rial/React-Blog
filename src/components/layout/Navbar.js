import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLikns';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <nav>
                <div className="logo">
                    <ul>
                        <li>
                            <Link to="/" className="navbarLOGO">BlogPost</Link>
                        </li>
                    </ul>
                </div>

                <div className="linksNavbar">
                    <ul>
                        <li><SignedinLinks /></li>
                        <li><SignedOutLinks /></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
