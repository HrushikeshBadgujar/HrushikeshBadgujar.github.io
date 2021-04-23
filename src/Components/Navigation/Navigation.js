import React, { Component } from 'react';

//import '../../index.css';
import './Navigation.css';
import image from '../../Images/logo1.png';

class Navigation extends Component {
    render() {

        // const sections = ['Home', 'About', 'Portfolio', 'Contact'];
        const sections = ['Markdown Preview'];

        const navLinks = sections.map(section => {
            return(
                <li><a href = {'/'+ section } > {section} </a></li>
            )
        });

        return (
            <nav>
                {/* <h2 className="brand">{this.props.brandName}</h2> */}
                <h2 className="brand"><img src={image} alt="Logo" height="50px"  /></h2>
                <ul>
                    {/* <li><a href="/markdown-preview">Markdown Preview</a></li> */}
                    {/* {navLinks} */}
                </ul>
            </nav>
        );
    }
}

export default Navigation;