import React from "react";
import './home.css'
import { Col, Row } from "react-bootstrap";
import logo from "../../images/IMG_0007-depositphotos-bgremover.png";

const Home = () => {


    return (
        <Row className="home">

            <Col>
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
                <h1>PATEL</h1>
                <h1>SAHARSH</h1>
                <h4>Bring Ideas To Life with Code</h4>
                <p>Web Developer.Traveller.UI/UX Designer</p>
            </Col>
            <Col className="image">
                <img src={logo} alt="img" width={450} height={600} />
            </Col>
        </Row>

    );
};

export default Home;