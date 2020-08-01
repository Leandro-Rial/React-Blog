import React, { Component } from 'react'
import './style.css';

export default class CreateProject extends Component {
    
    state = {
        title: '',
        content: '',
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
                    <h5 className="formSignIn">Create new Project for your Blog</h5>
                    
                    <div className="labelForm">
                        <label htmlFor="title">TITLE</label>
                        <input
                            type="text"
                            id="title"
                            className="inputForm"
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <div className="labelForm">
                        <label htmlFor="content">CONTENT</label>
                        <textarea
                            id="content"
                            className="contentProjectCreate"
                            onChange={this.handleChange}
                        ></textarea>
                    </div>

                    <button className="btnForm">Create new Project</button>
                
                </form>
            </div>
        )
    }
}
