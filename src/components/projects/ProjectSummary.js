import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card">
            <h2 className="cardTitle">{project.title}</h2>
            <span className="cardPosted">Posted by qwerty</span>
            <p className="cardTime">3rd Febrery, 22pm</p>
            <p className="cardParrafo">{project.content}</p>
        </div>
    )
}

export default ProjectSummary