import React, { Component } from 'react';

// import '../../index.css';
import './Navigation.css';

class Navigation extends Component {
    render() {

        const sections = ['Home', 'About', 'Portfolio', 'Contact'];

        const navLinks = sections.map(section => {
            return(
                <li><a href = {'#'+ section } > {section} </a></li>
            )
        });

        return (
            <nav>
                <h2 className="brand">{this.props.brandName}</h2>
                <ul>
                    {/* {navLinks} */}
                </ul>
            </nav>
        );
    }
}

export default Navigation;