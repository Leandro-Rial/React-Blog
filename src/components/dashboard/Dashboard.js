import React, { Component } from 'react';
import './style.css';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardContainer">
                <div className="inicio">
                    <ProjectList />
                </div>

                <div className="notificaciones">
                    <Notifications />
                </div>
            </div>
        )
    }
}
