import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p id="projects">Projects</p>
            <div id="portfolio">
                <div>
                    <p className="projectPart">Web sites</p>
                    <ol className="description">
                        <li onClick={()=>{navigate('/comic')}}>Comic</li>
                        <li>Hiking guide</li>
                        <li>Text quest for children</li>
                        <li>Tic tac toe</li>
                        <li>Portfolio</li>
                    </ol>
                </div>
            <div>
                <p className="projectPart">Design projects</p>
                <ol className="description">
                    <li>Platform for cinema</li>
                    <li>Lending of the online-shop of the handmade things</li>
                </ol>
            </div>
            </div>
        </div>
    );
};

export default Projects;
