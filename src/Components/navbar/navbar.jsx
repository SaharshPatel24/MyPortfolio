import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
    const [toggleState, setToggleState] = useState(false);

    const toggle = () => {
        setToggleState(toggleState === false ? true : false);
    };

    return (
        <header>
            <div className="logo" onClick={toggle}>
                <a href="/">S</a>
            </div>

            <nav>
                <i className="fa fa-bars" aria-hidden="true" onClick={toggle} />
                <ul className={`collapsed ${toggleState ? "is-expanded" : ""}`}>
                    <NavLink activeclassname="active" onClick={toggle} to="/about">
                        <li><span>1.</span> About</li>
                    </NavLink>
                    <NavLink activeclassname="active" to="/projects" onClick={toggle}>
                        <li><span>2.</span> Projects</li>
                    </NavLink>
                    <NavLink activeclassname="active" to="/contact" onClick={toggle}>
                        <li><span>3.</span> Contact</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar