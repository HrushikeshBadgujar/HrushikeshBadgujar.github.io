import React, { Component } from 'react';
import heroimage from '../../Images/HeroHome.png';

import '../Header/Header.css';

const heroStyle = {
    backgroundImage : `url(${heroimage})`,
    height : '50vh',
    backgroundSize : 'cover'
}

class Header extends Component {
    render() {


        return (
            <header style={heroStyle}>
                <p>Welcome !</p>
                <h1>I'm Hrushikesh Badgujar.</h1>
                <h2>I design & build websites</h2>
                {/* <a href="#button">Find out more</a> */}

                <li><a href="/markdown-preview">Markdown Preview</a></li>
            </header>
        );
    }
}

export default Header;