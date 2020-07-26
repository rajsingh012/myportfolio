import React, { Component } from 'react';
import './../../css/_rightbar.less';

class RightBar extends Component {

    render() {
        return (
            <div className="rightbar__wrapper">
                <div className="rightbar__wrapper--section">
                    <img className="rightbar__wrapper--profileimg" src="/public/img/profile.png"></img>
                    <h4 className="rightbar__wrapper--heading">
                        <span className="rightbar__wrapper--details">Hi There !</span>
                    </h4>
                    <h4 className="rightbar__wrapper--heading">
                        I'm
                     <span className="rightbar__wrapper--name">Raj Singh</span>
                    </h4>
                    <p className="rightbar__wrapper--paragraph">I'm a web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>

                    <button className="rightbar__wrapper--aboutbtn">More About Us</button>
                </div>
            </div>
        )
    }
}

export default RightBar;