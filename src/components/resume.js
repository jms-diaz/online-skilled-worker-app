import '../scss/forms.scss';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Resume() {

    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    function handleSubmit (event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        console.log(validated);
        if (validated) {
            nextPageClick();
        }
    }

    function nextPageClick() {
        navigate("/experience");
    }
    return (
                <Container className="py-5">
                    <Row className="d-flex h-100">
                        <Col className="pe-xxl-25 pe-md-7">
                            <h3 className="mb-5 fw-bold">Set Up Your Resume</h3>

                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">First Name</Form.Label>
                                            <Form.Control type="text" required/>
                                            <Form.Control.Feedback type="invalid">
                                                First name cannot be blank.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold" >Last Name</Form.Label>
                                            <Form.Control type="text" required />
                                            <Form.Control.Feedback type="invalid">
                                                Last name cannot be blank.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold" >Email Address</Form.Label>
                                            <Form.Control type="email" required/>
                                            <Form.Control.Feedback type="invalid">
                                                Please enter valid email.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Contact Number</Form.Label>
                                            <Form.Control type="text" required/>
                                            <Form.Control.Feedback type="invalid">
                                                Contact number cannot be blank.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Col className="mb-4">
                                    <Form.Group>
                                        <Form.Label className="fw-bold">Address</Form.Label>
                                        <Form.Control type="text" required/>
                                        <Form.Control.Feedback type="invalid">
                                            Address cannot be blank.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Gender</Form.Label>
                                            <select
                                                className="form-select"
                                                defaultValue={''}
                                                required
                                                style={{ backgroundColor: '#fffefe'}}
                                            >
                                                <option value="" disabled>---SELECT---</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                            </select>
                                            <Form.Control.Feedback type="invalid">
                                                Please select gender.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Nationality</Form.Label>
                                            <Form.Control type="text" required/>
                                            <Form.Control.Feedback type="invalid">
                                                Nationality cannot be blank.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <h3 className="my-5 fw-bold">Education</h3>

                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Institute/University Name</Form.Label>
                                            <Form.Control type="text" required/>
                                            <Form.Control.Feedback type="invalid">
                                                University name cannot be blank.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Qualification</Form.Label>
                                            <select
                                                defaultValue={''}
                                                required
                                                className="form-select"
                                                style={{ backgroundColor: '#fffefe'}}>
                                                <option value="" disabled>---SELECT---</option>
                                                <option value="No formal education">No formal education</option>
                                                <option value="Primary education">Primary education</option>
                                                <option value="Secondary education">Secondary education or high school</option>
                                                <option value="GED">GED</option>
                                                <option value="Vocational qualification">Vocational qualification</option>
                                                <option value="Bachelor's degree">Bachelor's degree</option>
                                                <option value="Master's degree">Master's degree</option>
                                                <option value="Doctorate or higher">Doctorate or higher</option>
                                            </select>
                                            <Form.Control.Feedback type="invalid">
                                                Please select qualification.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Graduation Date</Form.Label>
                                            <Form.Control type="date" required/>
                                            <Form.Control.Feedback type="invalid">
                                                Please enter valid date.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Institute/University Location</Form.Label>
                                            <Form.Control type="text" required/>
                                            <Form.Control.Feedback type="invalid">
                                                Location cannot be blank.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Col className="mb-4">
                                    <Form.Group>
                                        <Form.Label className="fw-bold">Field of Study</Form.Label>
                                        <Form.Control type="text" required/>
                                        <Form.Control.Feedback type="invalid">
                                            Field of study cannot be blank.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Button className="fs-6 fw-bold btn py-2 px-5 mt-2 mb-4">Add Education</Button>

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
                                    <Button type="submit" className="fs-6 fw-bold btn py-2 px-7 mt-2 mb-4 text-end">
                                        Next Page
                                    </Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Container>
    )
}