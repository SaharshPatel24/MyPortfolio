import React from "react";
import "./navbar.css";

const Navbar = () => {
    function toggleMobileMenu() {
        const menu = document.querySelector("#hamburger-icon");
        menu && menu.classList.toggle('open');
    }
    return (
        <header>
            <div id="brand"><a className="item title" href="/">
                <div className="avatar">S</div>
            </a></div>
            <nav className="menu">
                <ul>
                    <li><a href="/about"><span>01.</span> About  </a> </li>
                    <li><a href="/projects"><span>02.</span> Projects  </a> </li>
                    <li><a href="/contact"><span>03.</span> Contact </a></li>
                </ul>
            </nav>
            <div id="hamburger-icon" onClick={toggleMobileMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <ul className="mobile-menu">
                    <li><a href="/about"><span>01.</span> About  </a> </li>
                    <li><a href="/projects"><span>02.</span> Projects  </a> </li>
                    <li><a href="/contact"><span>03.</span> Contact </a></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;