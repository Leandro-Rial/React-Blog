import React, { Component } from 'react'
import './style.css';

export default class SignUp extends Component {
    
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
            <div className="signUp">
                <form onSubmit={this.handleSubmit} className="formulario">
                    <h5 className="formSignIn">Sign Up</h5>
                        
                        <div className="formSignContainer">
                    
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

                        <div className="labelForm">
                            <label htmlFor="email">FIRST NAME</label>
                            <input
                                type="text"
                                id="firstName"
                                className="inputForm"
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="labelForm">
                            <label htmlFor="email">LAST NAME</label>
                            <input
                                type="text"
                                id="lastName"
                                className="inputForm"
                                onChange={this.handleChange}
                            />
                        </div>

                    </div>
                    <button className="btnForm">Sign Up</button>
                
                </form>
            </div>
        )
    }
}
