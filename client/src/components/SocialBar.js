import React from 'react';

function SocialBar(){
    return(
        <div>
            <ul className="socialList">
                <li><a href="https://twitter.com/drew_the_weaver"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://github.com/drewweaver27"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/drewweaver27/"><i className="fab fa-linkedin"></i></a></li>
            </ul>
        </div>
    );
}

export default SocialBar;