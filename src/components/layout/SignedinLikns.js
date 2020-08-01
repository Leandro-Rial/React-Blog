import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'

const SignedinLinks = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/create">New Project</Link></li>
                    <li><Link to="#">Log Out</Link></li>
                    <li><Link to="#" className="inicialNavbar">NN</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default SignedinLinks
