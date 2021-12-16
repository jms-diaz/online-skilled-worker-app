import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function SignIn() {

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
            mainClick();
        }
    }

    function mainClick() {
        navigate("/jobs");
    }

    return (
        <Container className="h-100 pt-7 pb-2">
            <Row className="d-flex justify-content-center h-100">
                <Col className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <Card className="p-lg-5">
                        <Card.Body className="p-5">
                            <div className="form-header">
                                <h2 className="mb-2">Sign In</h2>
                                <p className="m-2 pb-3">Find job opportunities online</p>
                            </div>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="fw-bold">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="fw-bold">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter password.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button type="submit" className="fs-6 fw-bold btn py-2 w-100 mt-2">Sign In</Button>
                                <div className="text-center small mt-2">Don't have an account? <a href="/register">Sign up here</a></div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}