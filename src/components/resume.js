import '../scss/forms.scss';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

export default function Resume() {
    return (
                <Container className="py-5">
                    <Row className="d-flex h-100">
                        <Col className="pe-xxl-25 pe-md-7">
                            <h3 className="mb-5 fw-bold">Set Up Your Resume</h3>

                            <Form className=" resume-container pb-5">
                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">First Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Last Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Email Address</Form.Label>
                                            <Form.Control type="email" />
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Contact Number</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Col className="mb-4">
                                    <Form.Group>
                                        <Form.Label className="fw-bold">Address</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>

                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Gender</Form.Label>
                                            <select className="form-select" aria-label="Default select example" style={{ backgroundColor: '#fffefe'}}>
                                                <option selected>---SELECT---</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Nationality</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>

                            <h3 className="my-5 fw-bold">Education</h3>

                            <Form>
                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Institute/University Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Qualification</Form.Label>
                                            <select className="form-select" aria-label="Default select example" style={{ backgroundColor: '#fffefe'}}>
                                                <option selected>---SELECT---</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Graduation Date</Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Institute/University Location</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Col className="mb-4">
                                    <Form.Group>
                                        <Form.Label className="fw-bold">Field of Study</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Button className="fs-6 fw-bold btn py-2 px-5 mt-2 mb-4">Add Education</Button>
                            </Form>

                            <Card className="mb-4">
                                <Card.Body className="p-4">
                                    <Form>
                                        <Row>
                                            <Col className="col-md-6 mb-4">
                                                <Form.Group>
                                                    <Form.Label className="fw-bold">Institute/University Name</Form.Label>
                                                    <Form.Control plaintext readOnly defaultValue="N/A" />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-md-6 mb-4">
                                                <Form.Group>
                                                    <Form.Label className="fw-bold">Qualification</Form.Label>
                                                    <Form.Control plaintext readOnly defaultValue="N/A" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col className="col-md-6 mb-4">
                                                <Form.Group>
                                                    <Form.Label className="fw-bold">Graduation Date</Form.Label>
                                                    <Form.Control plaintext readOnly defaultValue="N/A" />
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-md-6 mb-4">
                                                <Form.Group>
                                                    <Form.Label className="fw-bold">Institute/University Location</Form.Label>
                                                    <Form.Control plaintext readOnly defaultValue="N/A" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Col className="mb-4">
                                            <Form.Group>
                                                <Form.Label className="fw-bold">Field of Study</Form.Label>
                                                <Form.Control plaintext readOnly defaultValue="N/A" />
                                            </Form.Group>
                                        </Col>

                                        <Col className="text-end">
                                            <Button className="fs-6 btn-danger fw-bold btn py-2 px-3">Remove</Button>
                                        </Col>
                                    </Form>
                                </Card.Body>
                            </Card>

                            <Col className="text-end">
                                <Button className="fs-6 fw-bold btn py-2 px-7 mt-2 mb-4 text-end">Next Page</Button>
                            </Col>
                        </Col>
                    </Row>
                </Container>
    )
}