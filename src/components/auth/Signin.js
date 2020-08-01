import React, { Component } from 'react'
import './style.css';

export default class Signin extends Component {
    
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    
    render() {
        return (
            <div className="signIn">
                <form onSubmit={this.handleSubmit} className="formulario">
                    <h5 className="formSignIn">Sign In</h5>
                    
                    <div className="labelForm">
                        <label htmlFor="email">EMAIL</label>
                        <input
                            type="email"
                            id="email"
                            className="inputForm"
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <div className="labelForm">
                        <label htmlFor="password">PASSWORD</label>
                        <input
                            type="password"
                            id="password"
                            className="inputForm"
                            onChange={this.handleChange}
                        />
                    </div>

                    <button className="btnForm">Login</button>
                
                </form>
            </div>
        )
    }
}
