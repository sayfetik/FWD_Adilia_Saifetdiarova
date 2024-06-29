import React from 'react';

const About: React.FC = () => {
    return (
        <div id="about">
            <p className="headline">About</p>
            <p id="bio">
                I'm Didi, currently pursuing my degree at Innopolis University. I specialize in front-end web development,
                web design, and C++ programming. My journey in the tech world has equipped me with a diverse skill set and a
                keen eye for detail.
            </p>
            <div className="skills">
                <p id="skillTitle">Skills</p>
                <div id="listOfSkills">
                    <ul className="description">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>C++</li>
                        <li>Web-design</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
