import React from 'react';

import ProjectCard from './ProjectCard';

function Projects(){
    return(
        <div className="projectArea">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard /> 
          
            {/* <ul>
                <li>Project</li>
                <li>Project</li>
                <li>Project</li>
                <li>Project</li>
                <li>Project</li>
            </ul> */}
        </div>
    );
}

export default Projects;