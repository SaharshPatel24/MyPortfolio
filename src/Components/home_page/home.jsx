import React from "react";
import './home.css'
import { Col, Row } from "react-bootstrap";
import logo from "../../images/IMG_0007-depositphotos-bgremover.png";

const Home = () => {

    // function disableBack() {
    //     window.history.forward()
    // }
    // window.onload = disableBack();
    // window.onpageshow = function (e) {
    //     if (e.preventDefault())
    //         disableBack();
    // }
    return (
        <Row className="home">
            <Col className="speeddial">
                <div className="speed-dial">

                    <div className="toggle bg-bars"><span className="fa fa-bars"></span></div>
                    <ul className="dials">
                        <li><a className="bg-user" href="/"><span className="fa fa-user"></span></a></li>
                        <li><a className="bg-code" href="/about"><span className="fa fa-code"></span></a></li>
                        <li><a className="bg-contact" href="/contact"><span className="fa fa-envelope"></span></a></li>
                    </ul>
                </div>
            </Col>
            <Col className="intro">
                <div className="info" style={{ fontFamily: "cursive" }}>
                    <h1 style={{ fontSize: "80px" }}>PATEL</h1>
                    <h1 style={{ fontSize: "80px" }}>SAHARSH</h1>
                    <h4 style={{ fontSize: "40px" }}>Bring Ideas To Life with Code</h4>
                    <p style={{ fontSize: "35px" }}>Web Developer.Traveller.UI/UX Designer</p>
                </div>
            </Col>
            <Col className="image">
                <img src={logo} alt="img" width={450} height={600} />
            </Col>
        </Row>

    );
};

export default Home;