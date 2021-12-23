import React, {useState} from 'react';
import {Formik} from "formik";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Map from "./maps";

export default function EmployerDetails() {

    const [coordinates, setCoordinates] = useState([]);
    const [searchActive, setSearchActive] = useState(false);

    const navigate = useNavigate();

    const schema = yup.object().shape({
        companyName: yup.string().required("Company name is required"),
        companyLogo: yup.string().required("Company logo is required"),
        companyLocation: yup.string().required("Location is required"),
        companySize: yup.number().required("Company size is required"),
        industry: yup.string().required("Industry is required"),
        companyDescription: yup.string()
    });

    const addressSearch = () => {
        const input = document.getElementById("companyLocation");
        const xmlHttp = new XMLHttpRequest();
        const url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + input.value;
        xmlHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                setCoordinates([response[0].lat, response[0].lon]);
                setSearchActive(true);
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    }

    return (
        <Container className="py-5">
            <Row className="d-flex h-100">
                <Col className="pe-xxl-25 pe-md-7">
                    <h3 className="mb-5 fw-bold">Company Details</h3>

                    <Formik
                        validateOnChange={false}
                        validationSchema={schema}
                        onSubmit={
                            (values, {setSubmitting}) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 1000);
                                navigate("/workers")
                            }
                        }
                        initialValues={
                            {
                                companyName: "",
                                companyLogo: "",
                                companyLocation: "",
                                industry: "",
                                companySize: "",
                                companyDescription: ""
                            }
                        }>
                        {
                            ({
                                 handleSubmit,
                                 handleChange,
                                 handleBlur,
                                 values,
                                 errors
                             }) => (<Form noValidate
                                          onSubmit={handleSubmit}>
                                    <Row>
                                        <Col className="col-md-6 mb-4">
                                            <Form.Group controlId="companyName">
                                                <Form.Label className="fw-bold">Company Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter company name"
                                                              name="companyName"
                                                              value={
                                                                  values.companyName
                                                              }
                                                              onChange={handleChange}
                                                              isInvalid={
                                                                  !!errors.companyName
                                                              }/>

                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        errors.companyName
                                                    } </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col className="col-md-6 mb-4">
                                            <Form.Group controlId="companyLogo">
                                                <Form.Label className="fw-bold">Logo</Form.Label>
                                                <Form.Control type="file" name="companyLogo"
                                                              value={
                                                                  values.companyLogo
                                                              }
                                                              onChange={handleChange}
                                                              isInvalid={
                                                                  !!errors.companyLogo
                                                              }/>

                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        errors.companyLogo
                                                    } </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="col-md-6 mb-4">
                                            <Form.Group controlId="companySize">
                                                <Form.Label className="fw-bold">Company Size</Form.Label>
                                                <Form.Select className="form-select"
                                                             name="companySize"
                                                             value={
                                                                 values.companySize
                                                             }
                                                             onChange={handleChange}
                                                             onBlur={handleBlur}
                                                             style={
                                                                 {backgroundColor: '#fffefe'}
                                                             }
                                                >
                                                    <option value="" disabled>---SELECT---</option>
                                                    <option value='1'>Self-employed</option>
                                                    <option value='10'>1-10 employees</option>
                                                    <option value='50'>11-50 employees</option>
                                                    <option value='200'>51-200 employees</option>
                                                    <option value='500'>201-500 employees</option>
                                                    <option value='1000'>501-1000 employees</option>
                                                    <option value='5000'>1001-5000 employees</option>
                                                    <option value='10000'>5001-10,000 employees</option>
                                                    <option value='10,001'>10,001+ employees</option>
                                                </Form.Select>

                                                <div className="invalid-feedback">
                                                    {
                                                        errors.companySize
                                                    } </div>
                                            </Form.Group>
                                        </Col>

                                        {/* Industry */}
                                        <Col className="col-md-6 mb-4">
                                            <Form.Group>
                                                <Form.Label className="fw-bold">Industry</Form.Label>
                                                <Form.Select className="form-select"
                                                             name="industry"
                                                             value={
                                                                 values.industry
                                                             }
                                                             onChange={handleChange}
                                                             onBlur={handleBlur}
                                                             style={
                                                                 {backgroundColor: '#fffefe'}
                                                             }
                                                >
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
                                                    {
                                                        errors.industry
                                                    } </div>


                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="col-md-10 mb-4">
                                            <Form.Group>
                                                <Form.Label className="fw-bold">Location</Form.Label>
                                                <Form.Control type="text" placeholder="Enter company location"
                                                              name="companyLocation"
                                                              id="companyLocation"
                                                              value={
                                                                  values.companyLocation
                                                              }
                                                              onChange={handleChange}
                                                              isInvalid={
                                                                  !!errors.companyLocation
                                                              }/>

                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        errors.companyLocation
                                                    } </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>

                                        <Col className="pt-2">
                                            <Button className="px-4 mt-4 fw-bold" onClick={addressSearch}>Search</Button>
                                        </Col>
                                    </Row>

                                    <Col className="mb-4">
                                        <Map location={coordinates} searchActive={searchActive}/>
                                    </Col>

                                    <Form.Group className="mb-4" controlId="companyDescription">
                                        <Form.Label className="fw-bold">Company Description</Form.Label>
                                        <Form.Control type="text" placeholder="Enter company description"
                                                      name="companyDescription"
                                                      value={
                                                          values.companyDescription
                                                      }
                                                      onChange={handleChange}
                                                      isInvalid={
                                                          !!errors.companyDescription
                                                      }
                                                      as="textarea"
                                                      rows={5}
                                                      required/>

                                        <Form.Control.Feedback type="invalid">
                                            {
                                                errors.companyDescription
                                            } </Form.Control.Feedback>
                                    </Form.Group>

                                    <Col className="text-end">
                                        <Button type="submit" className="fs-6 fw-bold btn py-2 px-7 mt-2 mb-4 text-end">
                                            Next Page
                                        </Button>
                                    </Col>
                                </Form>
                            )
                        }</Formik>
                </Col>
            </Row>
        </Container>
    )
}