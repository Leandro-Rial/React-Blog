import React, { Component } from 'react';
import './style.css';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {

        const { projects } = this.props;

        return (
            <div className="dashboardContainer">
                <div className="inicio">
                    <ProjectList projects={ projects } />
                </div>

                <div className="notificaciones">
                    <Notifications />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)