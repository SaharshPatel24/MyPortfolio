import React from 'react'
import "./projects.css"
import Navbar from "../navbar/navbar";

const Projects = () => {
    return (<>
        <Navbar />
        <div className="Projects">

            <div className="banksystem">
                <h1>Mini Bank</h1>
                <h5>#React #Firebase #Websocket #RestfulAPI #Bootstrap</h5>
                <br></br>
                <p>Mini Bank System Where the users can create their account in the system, they can add amount into there account. Also, they can transfer from one account to the other account via email ID. The system they also have the option to explore crypto currency with live market rates and decide about the investment. Chat Room is also embedded that allow the user toshare there ideas with the live users</p>
                <br></br>
                <p className="bold">What I did:</p>
                <ul className="list">
                    <li>Designed a stunning and <b>user-friendly UI</b> with the help of the <b>React-Framework, React-bootstrap,</b> and <b>css</b> </li>
                    <li>Implimentation of the <b>CRUD</b>(create, retrive, update,delete) in the <b>firestore database</b></li>
                    <li>Developing its backend for the chat room using the <b>Web-sockets</b> in the <b>NodeJs</b></li>
                    <li> Fetching it in the front-end of the app with the help of the <b>React-Hooks</b></li>
                </ul>
            </div>
            <div className="banksystem">
                <h1>Video Calling APP</h1>
                <h5>#React #Websocket #WebRTC #Bootstrap</h5>
                <br></br>
                <p>Video calling app where users can create room and send its link or room name to their friends and can discuss on th video call. It also has some features like the mute button, camera on/off button and the screen sharing options to share there screen</p>
                <br></br>
                <p className="bold">What I did:</p>
                <ul className="list">
                    <li>Created UI with the help of React, bootstrap and css</li>
                    <li>Created the API using the <b>Web-sockets</b> and <b>WebRTC</b> in the <b>NodeJs</b></li>
                    <li>Writting the some important function that is used in <b>Peer Connection</b> and getting <b>User Media Access</b></li>
                    <li> Fetching API in the front-end of the app with the help of the <b>React-Hooks</b></li>
                </ul>
            </div>
            <div className="banksystem">
                <h1>Finworld</h1>
                <h5>#Flutter #Dart #Firebase #NodeJs</h5>
                <br></br>
                <p>Finworld is the smartphone app that has been designed in flutter, which is used in hybrid mobile development that means these app is accessible in Iphone, Android and Web. Finworld is a social media app sucha as instagram and facebook, but is more focused on sharing the financial knowledge in the world</p>
                <br></br>
                <p className="bold">What I did:</p>
                <ul className="list">
                    <li>Implemented the  <b>multiple SignIn options</b> in the firebase and <b>CRUD</b> on <b>Firebase</b></li>
                    <li>Enabled the Posts <b>sharing in multiple formats</b> such as .jpg, .png and PDF</li>
                    <li>Developed it's <b>API</b> to make the connection between the Finworld app and the Firebase.</li>
                    <li>Embedded <b>Realtime chat</b> section with the help of Firebase and the <b>Dart</b></li>
                </ul>
            </div>
        </div>
    </>
    )
}
export default Projects