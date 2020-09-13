import React from 'react';


function ProjectCard(){
    return(
        <div>
            <div className="cardBody">
                <div className="cardImage">
                    <img src={"../assets/grg.png"} alt="project"/>
                </div>
                <div className="cardText">
                    <h2 className="cardTitle">Project Title</h2>
                    <p className="cardDesc">This is a short description of the project</p>
                </div>
                <div className="cardButtons">
                    {/* <a href="#">View Source</a>
                    <a href="#">View Live Site</a> */}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;