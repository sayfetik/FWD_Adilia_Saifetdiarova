import React from 'react';
import Header from '../Header';
import Projects from '../Projects';
import About from '../About';
import profilePhoto from "../../img/photo.jpg";
import tgIcon from "../../img/tg.png";
import vkIcon from"../../img/vk.512x512.png";
import gh from "../../img/github.512x497.png";
import emailIcon from "../../img/envelope-mail.512x411.png";
import instIcon from "../../img/instagram.512x512.png";
import './Portfolio.css'

const Portfolio: React.FC = () => {
    return (
        <div id='portfolioBody'>
            <Header />
            <main>
                <div id="start">
                    <div>
                        <p className="headline">I'm Adilia Saifetdiarova</p>
                        <p className="description">Designer, front-end developer, C++ developer</p>
                        <div className="text-box">
                            <a href="#contact" className="btn btn-white btn-animate">Contact</a>
                        </div>
                    </div>
                    <img id="profilePhoto" src={profilePhoto} alt="Profile photo" />
                </div>
                <About />
                <Projects />
            </main>
            <footer>
                <p id="contactMeTitle">Contact me</p>
                <div id="socialMedia">
                    <a id="tg-link" href="https://t.me/sayfetik">
                        <img className="icon" alt="telegram" src={tgIcon} />
                    </a>
                    <a href="https://vk.com/sayfetik05">
                        <img className="icon" alt="vk" src={vkIcon} />
                    </a>
                    <a id="gh-link" href="https://github.com/sayfetik">
                        <img className="icon" alt="github" src={gh} />
                    </a>
                    <a id="email" href="mailto:sayfetik2005@gmail.com">
                        <img className="icon" alt="email" src={emailIcon} />
                    </a>
                    <a href="https://www.instagram.com/sayfetik05/">
                        <img className="icon" alt="instagram" src={instIcon} />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
