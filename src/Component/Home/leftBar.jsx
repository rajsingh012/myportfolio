import React, { Component } from 'react';
import './../../css/_leftbar.less';

class LeftBar extends Component {
    render() {
        return (
            <div className="leftbar__wrapper">
                <ul className="leftbar__wrapper--ullist">
                    <li className="leftbar__wrapper--listing">
                        <span className="leftbar__wrapper--iconsbg">
                            <span className="leftbar__wrapper--homeicon"></span>
                        </span>
                        <span className="leftbar__wrapper--listname">Home</span>
                    </li>
                    <li className="leftbar__wrapper--listing">
                        <span className="leftbar__wrapper--iconsbg">
                            <span className="leftbar__wrapper--homeicon"></span>
                        </span>
                        <span className="leftbar__wrapper--listname">About Us</span>
                    </li>
                    <li className="leftbar__wrapper--listing">
                        <span className="leftbar__wrapper--iconsbg">
                            <span className="leftbar__wrapper--homeicon"></span>
                        </span>
                        <span className="leftbar__wrapper--listname">Portfolio</span>
                    </li>
                    <li className="leftbar__wrapper--listing">
                        <span className="leftbar__wrapper--iconsbg">
                            <span className="leftbar__wrapper--homeicon"></span>
                        </span>
                        <span className="leftbar__wrapper--listname">Contact Us</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LeftBar;