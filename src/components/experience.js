import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function Experience() {

    const navigate = useNavigate();

    function finishClick() {
        navigate("/jobs");
    }

    return (
        <Container className="py-5">
            <Row className="d-flex h-100">
                <Col className="pe-xxl-25 pe-md-7">
                    <h3 className="mb-5 fw-bold">Work Experience</h3>

                    <Form>
                        <Row>
                            <Col className="col-md-6 mb-4">
                                <Form.Group>
                                    <Form.Label className="fw-bold">Company Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col className="col-md-6 mb-4">
                                <Form.Group>
                                    <Form.Label className="fw-bold">Position Title</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="col-md-6 mb-4">
                                <Form.Group>
                                    <Form.Label className="fw-bold">Joined Duration</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col className="col-md-6 mb-4">
                                <Form.Group>
                                    <Form.Label className="fw-bold">Country</Form.Label>
                                    <select className="form-select" aria-label="Default select example" style={{ backgroundColor: '#fffefe'}}>
                                        <option selected>---SELECT---</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Col className="col-md-6 mb-4">
                            <Form.Group>
                                <Form.Label className="fw-bold">To</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>

                        <Col className="mb-4">
                            <Form.Group>
                                <Form.Label className="fw-bold">Industry</Form.Label>
                                <select className="form-select" aria-label="Default select example" style={{ backgroundColor: '#fffefe'}}>
                                    <option selected>---SELECT---</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </select>
                            </Form.Group>
                        </Col>

                        <Form.Group className="mb-4">
                            <Form.Label className="fw-bold">Experience Description</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>

                        <Button className="fs-6 fw-bold btn py-2 px-5 mt-2 mb-4">Add Work Experience</Button>
                    </Form>

                    <Card className="mb-4">
                        <Card.Body className="p-4">
                            <Form>
                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Company Name</Form.Label>
                                            <Form.Control plaintext readOnly defaultValue="N/A" />
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Joined Duration</Form.Label>
                                            <Form.Control plaintext readOnly defaultValue="N/A" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Position Title</Form.Label>
                                            <Form.Control plaintext readOnly defaultValue="N/A" />
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Country</Form.Label>
                                            <Form.Control plaintext readOnly defaultValue="N/A" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Col className="mb-4">
                                    <Form.Group>
                                        <Form.Label className="fw-bold">Industry</Form.Label>
                                        <Form.Control plaintext readOnly defaultValue="N/A" />
                                    </Form.Group>
                                </Col>

                                <Col className="mb-4">
                                    <Form.Group>
                                        <Form.Label className="fw-bold">Experience Description</Form.Label>
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
                        <Button className="fs-6 fw-bold btn py-2 px-7 mt-2 mb-4 text-end" onClick={finishClick}>Finish Resume</Button>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}