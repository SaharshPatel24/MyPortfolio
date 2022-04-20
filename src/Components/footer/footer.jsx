import React from "react";
import "./footer.css";

const Footer = () => {

    return (
        <div className="footer">
            <p>&copy; SaharshPatel 2021 <span className="hide">All Rights Reserved</span></p>
            <div className="footer-link">
                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="#" className="twitter"><i className="fa fa-instagram"></i></a>
                <a href="#" className="github"><i className="fa fa-github"></i></a>
                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
    )
}

export default Footer