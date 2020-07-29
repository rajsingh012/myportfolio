import React, { Component } from 'react';
import './../../css/_contactus.less';

class ContactUs extends Component {

    render() {
        return (
            <div className="rightbar__wrapper">
                <div className="contactus__section">
                    <h1 className="aboutus__section--heading">Contact
                        <span className="aboutus__section--colortext">Us</span>
                    </h1>
                    <div className="contactus__section--innersection">
                        <div className="contactus__section--leftside">
                            <h2 className="contactus__section--getintouch">Get In Touch !!</h2>
                            <p className="contactus__section--para">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                            <ul className="contactus__section--mainullist">
                                <li className="contactus__section--listing">
                                    <span className="contactus__section--emailicon"></span>
                                    <ul className="contactus__section--content">
                                        <p className="contactus__section--mailheading">MAIL ME</p>
                                        <p className="contactus__section--headingvalue">rajshing012@mail.com</p>
                                    </ul>
                                </li>
                                <li className="contactus__section--listing">
                                    <span className="contactus__section--callicon"></span>
                                    <ul className="contactus__section--content">
                                        <p className="contactus__section--mailheading">CALL ME</p>
                                        <p className="contactus__section--headingvalue">+91 - 958 456 222 8</p>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="contactus__section--rightside">
                            <form>
                                <div className="contactus__section--formflex">
                                    <div className="contactus__section--fromgroup">
                                        <span className='contactus__section--usericon'></span>
                                        <input className="contactus__section--inputtype" type='text' placeholder="Full Name" />
                                    </div>
                                    <div className="contactus__section--fromgroup">
                                        <span className='contactus__section--mailinicon'></span>
                                        <input className="contactus__section--inputtype" type='text' placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="contactus__section--formflex">
                                    <div className="contactus__section--fromgroup">
                                        <span className='contactus__section--phoneicon'></span>
                                        <input className="contactus__section--inputtype" type='text' placeholder="Mobile No." />
                                    </div>
                                    <div className="contactus__section--fromgroup">
                                        <span className='contactus__section--mailinicon'></span>
                                        <input className="contactus__section--inputtype" type='text' placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="contactus__section--formflex">
                                    <div className="contactus__section--fromgroup contactus__section--textarea">
                                        <span className='contactus__section--mailinicon'></span>
                                        <textarea className="contactus__section--textinput" rows="5" type='text' placeholder="Your Message"></textarea>
                                    </div>
                                </div>
                                <button type="button" className="contactus__section--submitbtn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;