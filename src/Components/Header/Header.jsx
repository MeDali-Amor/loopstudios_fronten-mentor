import React, { useState } from "react";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import "./Header.css";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className={open ? "nav open" : "nav close"}>
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
            <div
                className="menu-btn"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                {open ? (
                    <span className="close-btn">&times;</span>
                ) : (
                    <img src={hamburger} alt="" />
                )}
            </div>
        </div>
    );
};

export default Header;
