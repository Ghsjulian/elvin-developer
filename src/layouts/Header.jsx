import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setisOpen] = useState(true);
    const navRef = useRef(null);
    const openNav = () => {
        navRef.current.classList.toggle("navbar");
        setisOpen(!isOpen);
    };
    const closeNav = () => {
        // navRef.current.classList.toggle("nav");
        setisOpen(false);
        alert("ok");
    };

    return (
        <header>
            <img
                className="dev-logo"
                alt="Elviano Developer"
                src="/icons/logo.png"
            />
            {/*<h3 className="logo">Elviano</h3>*/}
            <nav ref={navRef} className="nav">
                <ul>
                    <li onClck={closeNav}>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <img
                onClick={openNav}
                className="menu"
                src={isOpen ? "/icons/burger_menu.png" : "/icons/delete.png"}
            />
        </header>
    );
};

export default Header;
