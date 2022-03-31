import React from "react";
import '../contact_page/contact.css';
import { Form, Button, Row } from "react-bootstrap";

const Contact = () => {

    return (
        <div className="contact">
            <div className="contact-heading">
                <h1>Working Together is Success</h1>
                <p>~Henry Ford</p>
            </div>
            <div className="form-box">
                <Form className="form">

                    <legend className="mb-5">Contact Me</legend>
                    <Row>
                        <Form.Group className="col-6 mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="first name" />
                        </Form.Group>

                        <Form.Group className="col-6 mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="last name" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Any Message For Me" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Is it For Hiring!!" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
        </div >
    );
};

export default Contact;