import React from "react";
import './home.scss'
import { Col, Row } from "react-bootstrap";
import logo from "../../images/IMG_0007-depositphotos-bgremover.png";

const Home = () => {


    return (
        <Row className="home">

            <Col>
                <div className="speed-dial">
                    <a className="toggle bg-bars"><span className="fa fa-bars"></span></a>
                    <ul className="dials">
                        <li><a className="bg-user" href="/"><span className="fa fa-user"></span></a></li>
                        <li><a className="bg-code" href="/about"><span className="fa fa-code"></span></a></li>
                        <li><a className="bg-contact" href="/contact"><span className="fa fa-envelope"></span></a></li>
                    </ul>
                </div>
            </Col>
            <Row className="intro">
                <h1>Saharsh Patel</h1>
            </Row>
            <Col className="image">
                <img src={logo} alt="img" width={450} height={600} />
            </Col>
        </Row>

    );
};

export default Home;