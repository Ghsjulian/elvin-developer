import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const navRef = useRef(null);
    const openNav = () => {
        navRef.current.classList.toggle("navbar");
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
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <img
                onClick={openNav}
                className="menu"
                src="icons/burger_menu.png"
            />
        </header>
    );
};

export default Header;
