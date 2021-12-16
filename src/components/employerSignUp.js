import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function EmployerSignUp() {

    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    function handleSubmit (event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        if (validated) {
            signUpClick();
        }
    }

    function signUpClick() {
        navigate("/workers");
    }
    return (
        <Container className="h-100 pt-5 pb-2">
            <Row className="d-flex justify-content-center h-100">
                <Col className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <Card className="p-lg-5">
                        <Card.Body className="p-5">
                            <div className="form-header">
                                <h2 className="mb-2">Employer Sign Up</h2>
                                <p className="m-2 pb-3">Sign up for FREE to start finding skilled workers</p>
                            </div>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formContactPerson">
                                    <Form.Label className="fw-bold">Contact Person Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter contact name" required/>
                                    <Form.Control.Feedback type="invalid">
                                        Contact person cannot be blank.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBusinessName">
                                    <Form.Label className="fw-bold">Registered Business Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter business name" required/>
                                    <Form.Control.Feedback type="invalid">
                                        Business name cannot be blank.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="fw-bold">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required/>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label className="fw-bold">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required/>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter password.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        label="I accept the Terms of Use & Privacy Policy"
                                        feedbackType="invalid"
                                        required
                                    />
                                </Form.Group>

                                <Button type="submit" className="fs-6 fw-bold btn py-2 w-100">Create Account</Button>
                                <div className="text-center small mt-2">Already have an account? <a href="/employer-sign-in">Login here</a></div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}