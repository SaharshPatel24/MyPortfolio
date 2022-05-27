import { React } from "react";
import './about.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from "../navbar/navbar";
import { Carousel } from "react-bootstrap";


const About = () => {

    return (
        <>
            <Navbar />
            <div className="about">
                <div className="sec">
                    <div className="top-heading">
                        <h1>Hello, I'm <span className="name">Saharsh Patel</span> </h1>
                        <p>This is the story about <span className="name"> me</span> and my future with <span className="blue">you</span></p>
                    </div>
                </div>
                <div className="heading">
                    <span>01. About Me</span>
                    <p>I love the world around me, and I am driven by the desire to learn and to develop.I had started my journey for developing While studying in primary school I have been enclosed to the HTML, From that time I had decided to pursue the Web Developer. Afterthat I had finish my secondary school over there in India and I just move to Canada, Toronto because over here there are lots of oppurtunities for the developers</p>
                </div>
                <Carousel interval={3000} style={{ height: "80vh" }}>
                    <Carousel.Item>
                        <div className="card-design">
                            <h1>Life Goal</h1>
                            <div className="content">
                                <p><span>var</span> Life = GodWillDecide();</p>
                                <p><span>var</span> learn = 0;</p>
                                <span><p>while(Life != end)</p>
                                    <p style={{ marginLeft: "12%" }}>learn++;</p>
                                </span>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card-design">
                            <h1>Education</h1>
                            <div className="content">
                                1. Computer Programming and Analysis
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card-design">
                            <h1>Certificates</h1>
                            <div className="content">
                                1. Elastic Beanstalk -AWS
                            </div>
                            <div className="content">
                                2. Serverless CI/CD -AWS
                            </div>
                            <div className="content">
                                3. Javascript Algorithm and Data Structures    -freeCodeCamp
                            </div>
                            <div className="content">
                                4. Problem Solving -HackerRank
                            </div>
                            <div className="content">
                                5. React Framework -HackerRank
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default About;