import React from 'react';
import {Card, Col, Form, Row} from "react-bootstrap";

const WorkerEducation = ({formik}) => {
    return (
        <div>
            <h3 className="fw-bold">Add Education</h3>
            <p className="text-danger mb-5 ">Please type N/A if field is not applicable.</p>

            <Row>
                <Col className="col-md-6 mb-4">
                    <Form.Group className="mb-3" controlId="formUnivName">
                        <Form.Label className="fw-bold">Institute/University Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter university name"
                                      name="educationForm.universityName"
                                      value={formik.values.educationForm.universityName} onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                        />
                        {!!formik.errors.educationForm && (
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.educationForm.universityName}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </Col>

                <Col className="col-md-6 mb-4">
                    <Form.Group className="mb-3" controlId="formQualification">
                        <Form.Label className="fw-bold">Qualification</Form.Label>
                        <Form.Select className="form-select" name="educationForm.qualification"
                                     value={formik.values.educationForm.qualification}
                                     onChange={formik.handleChange} onBlur={formik.handleBlur}
                                     style={{backgroundColor: '#fffefe'}}
                        >
                            <option value="" disabled>---SELECT---</option>
                            <option value="No formal education">No formal education</option>
                            <option value="Primary education">Primary education</option>
                            <option value="Secondary education">Secondary education or high school</option>
                            <option value="GED">GED</option>
                            <option value="Vocational qualification">Vocational qualification</option>
                            <option value="Bachelor's degree">Bachelor's degree</option>
                            <option value="Master's degree">Master's degree</option>
                            <option value="Doctorate or higher">Doctorate or higher</option>
                        </Form.Select>

                        {!!formik.errors.educationForm && (
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.educationForm.qualification}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col className="col-md-6 mb-4">
                    <Form.Group className="mb-3" controlId="formGradDate">
                        <Form.Label className="fw-bold">Graduation Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter graduation date"
                                      name="educationForm.graduationDate"
                                      value={formik.values.educationForm.graduationDate}
                                      onChange={formik.handleChange} onBlur={formik.handleBlur}
                        />

                        {!!formik.errors.educationForm && (
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.educationForm.graduationDate}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </Col>

                <Col className="col-md-6 mb-4">
                    <Form.Group className="mb-3" controlId="formUnivLocation">
                        <Form.Label className="fw-bold">Institute/University Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter university location"
                                      name="educationForm.universityLocation"
                                      value={formik.values.educationForm.universityLocation}
                                      onChange={formik.handleChange} onBlur={formik.handleBlur}
                        />

                        {!!formik.errors.educationForm && (
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.educationForm.universityLocation}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </Col>
            </Row>

            <Col className="mb-4 mb-4">
                <Form.Group className="mb-3" controlId="formContactPerson">
                    <Form.Label className="fw-bold">Field of Study</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Bachelor of Science in Information Technology"
                        name="educationForm.fieldOfStudy"
                        value={formik.values.educationForm.fieldOfStudy}
                        onChange={formik.handleChange}
                    />
                    {!!formik.errors.educationForm && (
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.educationForm.fieldOfStudy}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
            </Col>

            {/* Card for input preview */}
            <Card className="mb-5">
                <Card.Body className="p-4">
                    <Row>
                        <Col className="col-md-6 mb-4">
                            <Form.Group>
                                <Form.Label className="fw-bold">Institute/University Name</Form.Label>
                                <Form.Control plaintext readOnly value={formik.values.educationForm.universityName}/>
                            </Form.Group>
                        </Col>
                        <Col className="col-md-6 mb-4">
                            <Form.Group>
                                <Form.Label className="fw-bold">Qualification</Form.Label>
                                <Form.Control plaintext readOnly value={formik.values.educationForm.qualification}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-6 mb-4">
                            <Form.Group>
                                <Form.Label className="fw-bold">Graduation Date</Form.Label>
                                <Form.Control plaintext readOnly value={formik.values.educationForm.graduationDate}/>
                            </Form.Group>
                        </Col>
                        <Col className="col-md-6 mb-4">
                            <Form.Group>
                                <Form.Label className="fw-bold">University Location</Form.Label>
                                <Form.Control plaintext readOnly value={formik.values.educationForm.universityLocation}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col className="mb-4">
                        <Form.Group>
                            <Form.Label className="fw-bold">Field of Study</Form.Label>
                            <Form.Control plaintext readOnly value={formik.values.educationForm.fieldOfStudy}/>
                        </Form.Group>
                    </Col>
                </Card.Body>
            </Card>
        </div>
    )
};

export default WorkerEducation;