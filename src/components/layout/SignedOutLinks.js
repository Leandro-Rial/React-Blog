import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/signin">Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default SignedOutLinks
