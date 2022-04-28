import React, { useState } from "react";
import './home.css'
import { Col, Row, Offcanvas } from "react-bootstrap";
import logo from "../../images/IMG_0007-depositphotos-bgremover.avif";
import logoofpng from "../../images/IMG_0007-depositphotos-bgremover.png";
import Footer from "../footer/footer";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import chatbot_config from "../chatbot/chatbot_config";
import ActionProvider from "../chatbot/action_provider";
import MessageParser from "../chatbot/message_parser";


const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
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
                <div className="info">
                    <h1>PATEL</h1>
                    <h1>SAHARSH</h1>
                    <h4>Bring Ideas To Life with Code</h4>
                    <p>Web Developer.Traveller.UI/UX Designer</p>
                    <button className="chatbot-button" onClick={handleShow} >
                        Let's  Chat
                        <i className="fa fa-robot"></i>
                    </button>
                </div>

            </Col>

            <Col className="image">
                <picture>
                    <source srcSet={logoofpng} alt="img" width={450} height={600}></source>
                    <img src={logo} alt="img" width={450} height={600} />
                </picture>
            </Col>
            <Offcanvas placement="end" show={show} onHide={handleClose} backdrop>
                <Offcanvas.Header closeButton ></Offcanvas.Header>
                <Chatbot
                    config={chatbot_config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </Offcanvas>
            <Footer />
        </Row>
    </>


    );
};

export default Home;