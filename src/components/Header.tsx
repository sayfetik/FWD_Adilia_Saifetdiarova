import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1 id="home">DI</h1>
            <div id="header">
                <form>
                    <p><input type="search" name="q" placeholder="Search on the website" />
                    <input type="submit" value="Find" /></p>
                </form>
                <h2 id="homeBar"><a href="#home">Home</a></h2>
                <h2 id="aboutBar"><a href="#about">About</a></h2>
                <h2 id="portfolioBar"><a href="#projects">Projects</a></h2>
                <h2 id="contactBar"><a href="#contactMeTitle">Contact</a></h2>
            </div>
        </header>
    );
};

export default Header;
