import React, { Component } from 'react';
import './../../css/_about.less';

class AboutUs extends Component {
    render() {
        return (
            <div className="rightbar__wrapper">
                <div className="aboutus__section">
                    <h1 className="aboutus__section--heading">About
                        <span className="aboutus__section--colortext">Me</span>
                    </h1>
                </div>
            </div>
        )
    }
}

export default AboutUs;