import React from 'react';
import './style.css'
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
    return (
        <div className="projectList">
            
            {
                projects && projects.map(project => {
                    return (
                        <ProjectSummary project={project} key={project.id} />
                    )
                })
            }
            
        </div>
    )
}

export default ProjectList