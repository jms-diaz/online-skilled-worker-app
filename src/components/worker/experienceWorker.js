import * as yup from "yup";
import '../../scss/forms.scss';
import {Formik, useFormik} from "formik";
import {Alert, Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import {postWorkerExperience} from "../../api/worker";
import {uploadPhoto} from "../../api/auth";

export default function ExperienceWorker() {

    const schema = yup.object().shape({
        companyName: yup.string().required("Company name is required"),
        positionTitle: yup.string().required("Position title is required"),
        joinedDurationStart: yup.string().matches(new RegExp('[0-9]{4}'), "Please enter valid year").required("Joined date is required"),
        joinedDurationEnd: yup.string().matches(new RegExp('[0-9]{4}'), "Please enter valid year").required("Joined date is required"),
        salary: yup.string().matches(new RegExp('[0-9]{2}'), "Please enter valid salary").required("Salary is required"),
        industry: yup.string().required("Industry is required"),
        resume: yup.string().required("Resume is required"),
        experienceDescription: yup.string()
    });

    const [error, setError] = useState(false);

    function setResumeValue(resume, file) {

    }

    return (
        <Container className="py-5">
            <Row className="d-flex h-100">
                <Col className="pe-xxl-25 pe-md-7">
                    <h3 className="mb-5 fw-bold">Work Experience</h3>
                    <Alert variant="primary">Your application will be marked for approval. For more information, please contact{' '}
                        <Alert.Link href="mailto:ranjanjoseph20@gmail.com">ranjanjoseph20@gmail.com</Alert.Link>
                    </Alert>

                    <Formik
                        validationSchema={schema}
                        onSubmit={
                            async (values) => {
                                const file = values.resume;
                                const data = new FormData();
                                const filename = Date.now() + file.name;
                                data.append("name", filename);
                                data.append("file", file);
                                await uploadPhoto(data);
                                values.resume = filename;
                                setError(false);
                                await postWorkerExperience({values}, setError);
                            }
                        }
                        initialValues={
                            {
                                companyName: "",
                                positionTitle: "",
                                joinedDurationStart: "",
                                joinedDurationEnd: "",
                                salary: "",
                                resume: "",
                                industry: "",
                                experienceDescription: ""
                            }
                        }>
                        {
                            ({
                                 handleSubmit,
                                 handleChange,
                                 handleBlur,
                                 values,
                                setFieldValue,
                                 touched,
                                 errors
                             }) => (
                                <Form noValidate
                                      onSubmit={handleSubmit}>
                                    <Row>
                                        <Col className="col-md-6 mb-4">
                                            <Form.Group>
                                                <Form.Label className="fw-bold">Company Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter company name"
                                                              name="companyName"
                                                              value={values.companyName} onChange={handleChange}
                                                              isInvalid={!!errors.companyName}/>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.companyName}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col className="col-md-6 mb-4">
                                            <Form.Group>
                                                <Form.Label className="fw-bold">Position Title</Form.Label>
                                                <Form.Control type="text" placeholder="Enter position title"
                                                              name="positionTitle" value={values.positionTitle}
                                                              onChange={handleChange}
                                                              isInvalid={!!errors.positionTitle}/>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.positionTitle}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="col-md-6 mb-4">
                                            <Form.Group>
                                                <Form.Label className="fw-bold">Joined Duration Year</Form.Label>
                                                <Form.Control type="text" placeholder="Enter start year"
                                                              name="joinedDurationStart"
                                                              value={values.joinedDurationStart}
                                                              onChange={handleChange}
                                                              isInvalid={!!errors.joinedDurationStart}/>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.joinedDurationStart}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>

                                        <Col className="col-md-6 mb-4">
                                            <Form.Group>
                                                <Form.Label className="fw-bold">To</Form.Label>
                                                <Form.Control type="text" placeholder="Enter end year"
                                                              name="joinedDurationEnd"
                                                              value={values.joinedDurationEnd}
                                                              onChange={handleChange}
                                                              isInvalid={!!errors.joinedDurationEnd}/>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.joinedDurationEnd}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="col-md-6 mb-4">
                                            <Form.Group controlId="resume">
                                                <Form.Label className="fw-bold">Work Resume</Form.Label>
                                                <Form.Control type="file" name="resume"
                                                              onChange={(e) => {
                                                                  setFieldValue("resume", e.target.files[0]);
                                                              }}
                                                              isInvalid={
                                                                  !!errors.resume
                                                              }/>

                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        errors.resume
                                                    } </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>

                                        <Col className="col-md-6 mb-4">
                                            <Form.Group>
                                                <Form.Label className="fw-bold">Expected Salary</Form.Label>
                                                <Form.Control type="text" placeholder="Enter expected salary"
                                                              name="salary"
                                                              value={values.salary}
                                                              onChange={handleChange}
                                                              isInvalid={!!errors.salary}/>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.salary}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>


                                    <Col className="mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Industry</Form.Label>
                                            <Form.Select className="form-select" name="industry"
                                                         value={values.industry}
                                                         onChange={handleChange}
                                                         onBlur={handleBlur}
                                                         style={{backgroundColor: '#fffefe'}}>
                                                <option value="" disabled>---SELECT---</option>
                                                <option id='Accounting'>Accounting</option>
                                                <option id='Administration & Office Support'>Administration & Office
                                                    Support
                                                </option>
                                                <option id='Advertising, Arts & Media'>Advertising, Arts & Media
                                                </option>
                                                <option id='Banking & Financial Services'>Banking & Financial
                                                    Services
                                                </option>
                                                <option id='Call Centre & Customer Service'>Call Centre & Customer
                                                    Service
                                                </option>
                                                <option id='Community Services & Development'>Community Services &
                                                    Development
                                                </option>
                                                <option id='Construction'>Construction</option>
                                                <option id='Consulting & Strategy'>Consulting & Strategy</option>
                                                <option id='Design & Architecture'>Design & Architecture</option>
                                                <option id='Education & Training'>Education & Training</option>
                                                <option id='Engineering'>Engineering</option>
                                                <option id='Farming, Animals & Conservation'>Farming, Animals &
                                                    Conservation
                                                </option>
                                                <option id='Government & Defense'>Government & Defense</option>
                                                <option id='Healthcare & Medical'>Healthcare & Medical</option>
                                                <option id='Hospitality & Tourism'>Hospitality & Tourism</option>
                                                <option id='Human Resources & Recruitment'>Human Resources &
                                                    Recruitment
                                                </option>
                                                <option id='Information & Communication Technology'>Information &
                                                    Communication
                                                    Technology
                                                </option>
                                                <option id='Insurance & Superannuation'>Insurance & Superannuation
                                                </option>
                                                <option id='Legal'>Legal</option>
                                                <option id='Manufacturing, Transport & Logistics'>Manufacturing,
                                                    Transport &
                                                    Logistics
                                                </option>
                                                <option id='Marketing & Communications'>Marketing & Communications
                                                </option>
                                                <option id='Mining, Resources & Energy'>Mining, Resources & Energy
                                                </option>
                                                <option id='Real Estate & Property'>Real Estate & Property</option>
                                                <option id='Retail & Consumer Products'>Retail & Consumer Products
                                                </option>
                                                <option id='Sales'>Sales</option>
                                                <option id='Science & Technology'>Science & Technology</option>
                                                <option id='Sport & Recreation'>Sport & Recreation</option>
                                            </Form.Select>

                                            <div className="invalid-feedback">
                                                {errors.industry}
                                            </div>
                                        </Form.Group>
                                    </Col>

                                    <Form.Group className="mb-5">
                                        <Form.Label className="fw-bold">Experience Description</Form.Label>
                                        <Form.Control type="text" placeholder="Enter experience description"
                                                      name="experienceDescription"
                                                      value={values.experienceDescription}
                                                      onChange={handleChange}
                                                      isInvalid={!!errors.experienceDescription}
                                                      as="textarea" rows={5} required/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.experienceDescription}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Card for input preview */}
                                    <Card className="mb-5">
                                        <Card.Body className="p-4">
                                            <Row>
                                                <Col className="col-md-6 mb-4">
                                                    <Form.Group>
                                                        <Form.Label className="fw-bold">Company Name</Form.Label>
                                                        <Form.Control plaintext readOnly value={values.companyName}/>
                                                    </Form.Group>
                                                </Col>
                                                <Col className="col-md-6 mb-4">
                                                    <Form.Group>
                                                        <Form.Label className="fw-bold">Position Title</Form.Label>
                                                        <Form.Control plaintext readOnly value={values.positionTitle}/>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="col-md-6 mb-4">
                                                    <Form.Group>
                                                        <Form.Label className="fw-bold">Joined Duration Start</Form.Label>
                                                        <Form.Control plaintext readOnly value={values.joinedDurationStart}/>
                                                    </Form.Group>
                                                </Col>
                                                <Col className="col-md-6 mb-4">
                                                    <Form.Group>
                                                        <Form.Label className="fw-bold">Joined Duration End</Form.Label>
                                                        <Form.Control plaintext readOnly value={values.joinedDurationEnd}/>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="col-md-6 mb-4">
                                                    <Form.Group>
                                                        <Form.Label className="fw-bold">Salary</Form.Label>
                                                        <Form.Control plaintext readOnly value={values.salary}/>
                                                    </Form.Group>
                                                </Col>
                                                <Col className="col-md-6 mb-4">
                                                    <Form.Group>
                                                        <Form.Label className="fw-bold">Industry</Form.Label>
                                                        <Form.Control plaintext readOnly value={values.industry}/>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label className="fw-bold">Experience Description</Form.Label>
                                                    <Form.Control plaintext readOnly value={values.experienceDescription}/>
                                                </Form.Group>
                                            </Col>
                                        </Card.Body>
                                    </Card>

                                    <Col className="text-end">
                                        <Button type="submit" className="fs-6 fw-bold btn py-2 px-7 mt-2 mb-4 text-end">
                                            Finish Resume
                                        </Button>
                                    </Col>
                                </Form>
                            )
                        }</Formik>
                    <div className="text-center">
                        {error &&
                        <span className="text-danger text-center">Something went wrong. Please try again.</span>}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
