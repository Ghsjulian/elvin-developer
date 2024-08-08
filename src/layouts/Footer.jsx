import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social">
                <NavLink to="/">
                    <img src="/icons/google.png" />
                </NavLink>
                <NavLink target="_blank" to="https://www.facebook.com/elviano">
                    <img src="/icons/facebook.png" />
                </NavLink>
                <NavLink
                    target="_blank"
                    to="https://www.linkedin.com/company/elviano"
                >
                    <img src="/icons/linkedin.png" />
                </NavLink>
                <NavLink to="/">
                    <img src="/icons/twitter.png" />
                </NavLink>
                <NavLink to="/">
                    <img src="/icons/github.png" />
                </NavLink>
            </div>
            <strong>
                © Copyright All Reserve <span>2020-2024</span>
            </strong>
            <p>
                Developed By -
                <NavLink to="/" target="_blank">
                    Elviano Digital Agency
                </NavLink>
            </p>
        </footer>
    );
};

export default Footer;
