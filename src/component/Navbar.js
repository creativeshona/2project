import React, { useState } from "react";
import './Navbar.css';
import About from "./About";
import Contact from "./contact";

import Project from "./Project";
import Home from "./Home";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaPhone } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const navbarlink = [{
        id: 1,
        title: "home",
        content: <FaHome />,
        href: <Home />
    },
    {
        id: 2,
        title: "about",
        content: <FaUser />,
        href: <About />
    },
    {
        id: 3,
        title: "project",
        content: <FaCode />,
        href: <Project />

    },
    {
        id: 4,
        title: "contact",
        content: <FaPhone />,
        href: <Contact />
    }
    ];

    return (
        <>
            <div className="header">
                <nav className="navbar">
                    <a href="/" className="logo">
                        <img src="./images/logo.png" alt="logo" />
                    </a>
                    <div className="hamburger" onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{ color: "rgb(4, 158, 153)" }} />) : (<FaBars size={30} style={{ color: 'rgb(4, 158, 153)' }} />)
                        }
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"} >

                        {navbarlink.map((menu) => (
                            <li className="nav-item home">
                                <Link to={menu.title} smooth={true} offset={0} duration={900}>{menu.content}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>

            <div>
                {navbarlink.map((menu) => (
                    <li className="nav-item home"><a id={menu.title} >{menu.href} </a></li>
                ))}
            </div>
        </>
    );
};

export default Navbar;

