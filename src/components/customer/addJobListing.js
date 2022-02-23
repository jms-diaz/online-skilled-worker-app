import React, {useEffect, useState} from 'react';
import * as yup from "yup";
import {Formik} from "formik";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import Map from "../maps";
import {postJob} from "../../api/jobs";
import {getCurrentCustomer} from "../../api/customer";

export default function AddJobListing() {

    const [coordinates, setCoordinates] = useState([]);
    const [searchActive, setSearchActive] = useState(false);
    const [name, setName] = useState("");
    const [addError, setAddError] = useState("");

    const userArray = JSON.parse(sessionStorage.getItem("user"));
    const userId = userArray.id;

    useEffect(() => {
        getCurrentCustomer(userId).then(
            r => {
                const data = r.data.customer_temp_id;
                setName(data.name);
            }
        )
    }, [name, userId]);


    const addressSearch = () => {
        const input = document.getElementById('jobLocation');
        const xmlHttp = new XMLHttpRequest();
        const url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + input.value;
        xmlHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                if (response.length !== 0) {
                    setCoordinates([response[0].lat, response[0].lon]);
                    setSearchActive(true);
                } else {
                    setAddError("No results found.");
                }
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    }

    const schema = yup.object().shape({
        jobTitle: yup.string().required("Job title is required"),
        jobDescription: yup.string().required("Job description is required"),
        jobLocation: yup.string().required("Job location is required"),
    });

    return (
        <Formik validationSchema={schema}
                onSubmit={
                    async (values) => {
                        await postJob({values}, coordinates, name);
                    }
                }
                initialValues={
                    {
                        jobTitle: "",
                        jobDescription: "",
                        jobLocation: ""
                    }
                }
        >
            {
                ({
                     handleSubmit,
                     handleChange,
                     handleBlur,
                     values,
                     touched,
                     errors
                 }) => (
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col className="mb-4">
                                <Form.Group>
                                    <Form.Label className="fw-bold">Job Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter job title"
                                                  name="jobTitle"
                                                  value={values.jobTitle} onChange={handleChange}
                                                  isInvalid={!!errors.jobTitle}/>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.jobTitle}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Address */}
                        <Row>
                            <Col className="col-md-10 mb-4">
                                <Form.Group>
                                    <Form.Label className="fw-bold">Job Location</Form.Label>
                                    <Form.Control type="text" placeholder="Enter job location" name="jobLocation"
                                                  id="jobLocation" value={values.jobLocation}
                                                  onChange={handleChange}
                                    />


                                    <Form.Control.Feedback type="invalid">
                                        {errors.jobLocation}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col className="pt-2">
                                <Button className="px-4 mt-4 fw-bold" onClick={addressSearch}>Search</Button>
                            </Col>
                        </Row>

                        <div>
                            {addError && <span className="text-danger">{addError}</span>}
                        </div>

                        <Col className="mb-5">
                            <Map location={coordinates} searchActive={searchActive}/>
                        </Col>

                        <Col className="mb-4">
                            <Form.Group className="mb-4" controlId="bio">
                                <Form.Label className="fw-bold">Job Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter job description"
                                              name="jobDescription" value={values.jobDescription}
                                              onChange={handleChange} isInvalid={!!errors.jobDescription}
                                              as="textarea" rows={5} required
                                              style={{
                                                  whiteSpace: "pre-line"
                                              }}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.jobDescription}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* Card for input preview */}
                        <Card className="mb-5">
                            <Card.Body className="p-4">
                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Job Title</Form.Label>
                                            <Form.Control plaintext readOnly value={values.jobTitle}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Job Location</Form.Label>
                                            <Form.Control plaintext readOnly value={values.jobLocation}/>
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-md-6 mb-4">
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Job Description</Form.Label>
                                            <Form.Control plaintext readOnly value={values.jobDescription}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Col className="text-end">
                            <Button type="submit" className="fs-6 fw-bold btn py-2 px-7 mt-2 mb-4 text-end">
                                Post Job
                            </Button>
                        </Col>
                    </Form>
                )
            }
        </Formik>
    )
}