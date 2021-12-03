import '../scss/forms.scss';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

export default function SignUp() {
    return (
            <Container className="h-100 pt-7 pb-2">
                <Row className="d-flex justify-content-center h-100">
                    <Col className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <Card className="p-lg-5">
                            <Card.Body className="p-5">
                                <div className="form-header">
                                    <h2 className="mb-2">Register</h2>
                                    <p className="m-2 pb-3">Find job opportunities online for FREE</p>
                                </div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="fw-bold">Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className="fw-bold">Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="I accept the Terms of Use & Privacy Policy" />
                                    </Form.Group>

                                    <Button className="fs-6 fw-bold btn py-2 w-100">Create Account</Button>
                                    <div className="text-center small mt-2">Already have an account? <a href="#">Login here</a></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    )
}