import React, { useState } from "react";
import './home.css'
import { Col, Row, Offcanvas } from "react-bootstrap";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import chatbot_config from "../chatbot/chatbot_config";
import ActionProvider from "../chatbot/action_provider";
import MessageParser from "../chatbot/message_parser";
import Navbar from "../navbar/navbar";


const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <Navbar />
        <Row className="home">
            <Col className="intro">
                <div className="info">
                    <div className="green">Hi, my name is</div>
                    <h1>Patel Saharsh.</h1>
                    <h4>Bring Ideas To Life with Code</h4>
                    <p>Web Developer<span className="green">.</span>Traveller<span className="green">.</span>UI/UX Designer</p>
                    <button className="chatbot-button" onClick={handleShow} >
                        Let's  Chat
                        <i className="fa fa-robot"></i>
                    </button>
                </div>
            </Col>

            <Offcanvas placement="end" show={show} onHide={handleClose} backdrop>
                <Offcanvas.Header closeButton ></Offcanvas.Header>
                <Chatbot
                    config={chatbot_config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </Offcanvas>
            <Col className="link-box">
                <div className='buttons-container'>
                    <div className='button facebook'>
                        <i className="fab fa-facebook-f fa-2x"></i>
                    </div>
                    <div className='button twitter'>
                        <i className="fab fa-twitter fa-2x"></i>
                    </div>
                    <div className='button github'>
                        <i className="fab fa-github fa-2x"></i>
                    </div>
                    <div className='button instagram'>
                        <i className="fab fa-instagram fa-2x"></i>
                    </div>
                </div>
                <div className="line-5"></div>
            </Col>
        </Row>
    </>


    );
};

export default Home;