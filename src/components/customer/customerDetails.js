import React, {useState} from 'react';
import {Formik} from "formik";
import * as yup from "yup";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import Map from "../maps";
import {postCustomerDetails} from "../../api/customer";

export default function Details() {

    const [coordinates, setCoordinates] = useState([]);
    const [searchActive, setSearchActive] = useState(false);
    const [error, setError] = useState(false);
    const [addError, setAddError] = useState("");

    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        profilePicture: yup.string().required("Profile picture is required"),
        address: yup.string().required("Address is required"),
        contactNumber: yup
            .string()
            .matches(new RegExp('[0-9]{11}'), 'Contact number must be 11 digits')
            .required('Contact number is required'),
        gender: yup.string().required('Gender is required'),
        bio: yup.string()
    });

    const addressSearch = () => {
        const input = document.getElementById("address");
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
    };

    return (
        <Container className="py-5">
            <Row className="d-flex h-100">
                <Col className="pe-xxl-25 pe-md-7">
                    <h3 className="mb-5 fw-bold">Customer Details</h3>

                    <Formik
                        validationSchema={schema}
                        onSubmit={
                            async (values) => {
                                setError(false);
                                await postCustomerDetails({values}, setError, coordinates);
                            }
                        }
                        initialValues={
                            {
                                name: "",
                                profilePicture: "",
                                address: "",
                                contactNumber: "",
                                gender: "",
                                bio: ""
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
                                            <Form.Group controlId="name">
                                                <Form.Label className="fw-bold">Full Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter name"
                                                              name="name"
                                                              value={
                                                                  values.name
                                                              }
                                                              onChange={handleChange}
                                                              isInvalid={
                                                                  !!errors.name
                                                              }/>

                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        errors.name
                                                    } </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col className="col-md-6 mb-4">
                                            <Form.Group controlId="profilePicture">
                                                <Form.Label className="fw-bold">Profile Picture</Form.Label>
                                                <Form.Control type="file" name="profilePicture"
                                                              value={
                                                                  values.profilePicture
                                                              }
                                                              onChange={handleChange}
                                                              isInvalid={
                                                                  !!errors.profilePicture
                                                              }/>

                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        errors.profilePicture
                                                    } </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="col-md-6">
                                            <Form.Group controlId="gender">
                                                <Form.Label className="fw-bold">Gender</Form.Label>
                                                <Form.Select className="form-select"
                                                             name="gender"
                                                             value={
                                                                 values.gender
                                                             }
                                                             onChange={handleChange}
                                                             onBlur={handleBlur}
                                                             style={
                                                                 {backgroundColor: '#fffefe'}
                                                             }
                                                >
                                                    <option value="" disabled>---SELECT---</option>
                                                    <option value='Male'>Male</option>
                                                    <option value='Female'>Female</option>
                                                </Form.Select>

                                                <div className="invalid-feedback">
                                                    {
                                                        errors.gender
                                                    } </div>
                                            </Form.Group>
                                        </Col>

                                        {/* Contact Number */}
                                        <Col className="col-md-6">
                                            <Form.Group className="mb-3" controlId="formContactNumber">
                                                <Form.Label className="fw-bold">Contact Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter contact number"
                                                    name="contactNumber"
                                                    value={values.contactNumber}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.contactNumber}
                                                />

                                                <Form.Control.Feedback type="invalid">
                                                    {errors.contactNumber}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="col-md-10 mb-4">
                                            <Form.Group>
                                                <Form.Label className="fw-bold">Address</Form.Label>
                                                <Form.Control type="text" placeholder="Enter address"
                                                              name="address"
                                                              id="address"
                                                              value={
                                                                  values.address
                                                              }
                                                              onChange={handleChange}
                                                              isInvalid={
                                                                  !!errors.address
                                                              }/>

                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        errors.address
                                                    } </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>

                                        <Col className="pt-2">
                                            <Button className="px-4 mt-4 fw-bold"
                                                    onClick={addressSearch}>Search</Button>
                                        </Col>
                                    </Row>

                                    <div>
                                        {addError && <span className="text-danger">{addError}</span>}
                                    </div>

                                    <Col className="mb-4">
                                        <Map location={coordinates} searchActive={searchActive}/>
                                    </Col>

                                    <Form.Group className="mb-4" controlId="bio">
                                        <Form.Label className="fw-bold">Bio</Form.Label>
                                        <Form.Control type="text" placeholder="Enter bio"
                                                      name="bio"
                                                      value={
                                                          values.bio
                                                      }
                                                      onChange={handleChange}
                                                      isInvalid={
                                                          !!errors.bio
                                                      }
                                                      as="textarea"
                                                      rows={5}
                                                      required/>

                                        <Form.Control.Feedback type="invalid">
                                            {
                                                errors.bio
                                            } </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Card for input preview */}
                                    <Card className="mb-5">
                                        <Card.Body className="p-4">
                                            <Row>
                                                <Col className="col-md-6 mb-4">
                                                    <Form.Group>
                                                        <Form.Label className="fw-bold">Full Name</Form.Label>
                                                        <Form.Control plaintext readOnly value={values.name}/>
                                                    </Form.Group>
                                                </Col>
                                                <Col className="col-md-6 mb-4">
                                                    <Form.Group>
                                                        <Form.Label className="fw-bold">Address</Form.Label>
                                                        <Form.Control plaintext readOnly value={values.address}/>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="col-md-6 mb-4">
                                                    <Form.Group>
                                                        <Form.Label className="fw-bold">Contact Number</Form.Label>
                                                        <Form.Control plaintext readOnly value={values.contactNumber}/>
                                                    </Form.Group>
                                                </Col>
                                                <Col className="col-md-6 mb-4">
                                                    <Form.Group>
                                                        <Form.Label className="fw-bold">Gender</Form.Label>
                                                        <Form.Control plaintext readOnly value={values.gender}/>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label className="fw-bold">Bio</Form.Label>
                                                    <Form.Control plaintext readOnly value={values.bio}/>
                                                </Form.Group>
                                            </Col>
                                        </Card.Body>
                                    </Card>

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