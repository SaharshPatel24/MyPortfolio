import React, { useState } from "react";
import '../contact_page/contact.css';
import { Form, Button, Row, Col } from "react-bootstrap";

const Contact = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [hiring, setHiring] = useState(false);
    const [message, setMessage] = useState("");
    const [posts, setPosts] = useState([]);
    const fetchApi = () => {
        // Fetching data from the API
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setPosts(data.joke));
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://portfolio-backend-liart.vercel.app/send", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    message: message,
                    hiring: hiring,

                }),
            });
            let resJson = await res.json()
            if (res.status === 200) {
                console.log(resJson.formData);
            } else {
                setMessage("Some error occured");
            }

        } catch (err) {
            console.log("error" + err);
        }
    };


    return (
        <div className="contact">
            <div className="contact-heading">
                <h1>Working Together is Success</h1>
                <p>~Henry Ford</p>
            </div>
            <Row className="main-row">
                <Col className="col-6 form-col">
                    <div className="form-box">
                        <Form className="form" onSubmit={handleSubmit} >

                            <legend className="mb-5">Contact Me 🧑‍🤝‍🧑</legend>
                            <Row>
                                <Form.Group className="col-6 mb-3" controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="first name"
                                        value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="col-6 mb-3" controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="last name"
                                        value={lastname}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="comment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Any Message For Me"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Is it For Hiring!!"
                                    value={hiring}
                                    onChange={(e) => setHiring(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col className="details row-6">
                    <div className="quotes">
                        Lets Have Some Fun!!!
                        <div className="joke">{posts}</div>
                        <Button className="joke-button" onClick={fetchApi}> get new joke😂</Button>
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default Contact;