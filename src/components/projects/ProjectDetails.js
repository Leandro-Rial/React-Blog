import React from 'react';
import './style.css'

const ProjectDetails = (props) => {

    const id = props.match.params.id;

    return (
        <div className="projectDetails">
            <div className="cardDetails">
                <h2 className="cardTitleDetails">Project Title {id}</h2>
                <p className="cardParrafoDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae dolorum eum ducimus voluptatum ea natus, accusantium, earum nulla amet consequatur facilis quibusdam! Est modi facilis hic voluptatibus voluptatem iste excepturi possimus eaque dolor odio?</p>
                <span className="cardPostedDetails">Posted by qwerty</span>
                <p className="cardTimeDetails">3rd Febrery, 22pm</p>
            </div>
        </div>
    )
}

export default ProjectDetails
