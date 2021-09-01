import React from "react";
import "./Footer.css";
import logo from "../../images/logo.svg";
import face from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pin from "../../images/icon-pinterest.svg";
import insta from "../../images/icon-instagram.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="left">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <nav className="nav-footer">
                    <ul>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Careers</a>
                        </li>
                        <li>
                            <a href="/">Events</a>
                        </li>
                        <li>
                            <a href="/">Products</a>
                        </li>
                        <li>
                            <a href="/">Support</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="right">
                <div className="social-icons">
                    <ul className="social">
                        <li>
                            <a href="/">
                                <img src={face} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={twitter} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={pin} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={insta} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="copy-right">
                    <p>&copy; 2021 Loopstudios. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
