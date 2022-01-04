import React, {useState} from 'react';
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import Map from "../maps";

const WorkerDetails = ({formik, childToParent}) => {
    const [coordinates, setCoordinates] = useState([]);
    const [searchActive, setSearchActive] = useState(false);

    const addressSearch = () => {
        const input = document.getElementById('address');
        const xmlHttp = new XMLHttpRequest();
        const url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + input.value;
        xmlHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                setCoordinates([response[0].lat, response[0].lon]);
                setSearchActive(true);
                childToParent([response[0].lat, response[0].lon]);
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    }

    // if (file) {
    //     image(file);
    // }
    return (
        <>
            <h3 className="mb-5 fw-bold">Set Up Your Resume</h3>

            <Row>
                <Col className="col-md-6 mb-4">
                    <Form.Group className="mb-3" controlId="formFullName">
                        <Form.Label className="fw-bold">Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" name="detailsForm.fullName"
                                      value={formik.values.detailsForm.fullName} onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                        />
                        {!!formik.errors.detailsForm && (
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.detailsForm.fullName}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </Col>

                <Col className="col-md-6 mb-4">
                    <Form.Group className="mb-3" controlId="formProfilePicture">
                        <Form.Label className="fw-bold">Profile Picture</Form.Label>
                        <Form.Control type="file" name="detailsForm.profilePicture"
                                      onChange={(e) => {
                                          formik.setFieldValue("detailsForm.profilePicture",e.target.files[0]);
                                      }}
                                      onBlur={formik.handleBlur}
                        />

                        {!!formik.errors.detailsForm && (
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.detailsForm.profilePicture}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col className="col-md-6 mb-4">
                    <Form.Group className="mb-3" controlId="formContactNumber">
                        <Form.Label className="fw-bold">Contact Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter contact number" name="detailsForm.contactNumber"
                                      value={formik.values.detailsForm.contactNumber} onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                        />
                        {!!formik.errors.detailsForm && (
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.detailsForm.contactNumber}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </Col>

                <Col className="col-md-6 mb-4">
                    <Form.Group className="mb-3" controlId="formGender">
                        <Form.Label className="fw-bold">Gender</Form.Label>
                        <Form.Select className="form-select" name="detailsForm.gender"
                                     value={formik.values.detailsForm.gender} onChange={formik.handleChange}
                                     onBlur={formik.handleBlur} style={{backgroundColor: '#fffefe'}}
                        >
                            <option value="" disabled>---SELECT---</option>
                            <option value="Male">Male</option>
                            <option value="Male">Female</option>
                        </Form.Select>

                        {!!formik.errors.detailsForm && (
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.detailsForm.gender}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col className="mb-4">
                <Form.Group className="mb-3" controlId="formOccupation">
                    <Form.Label className="fw-bold">Current Occupation</Form.Label>
                    <Form.Control type="text" placeholder="Enter occupation" name="detailsForm.occupation"
                                  value={formik.values.detailsForm.occupation} onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                    />
                    {!!formik.errors.detailsForm && (
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.detailsForm.occupation}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
                </Col>
            </Row>

            {/* Address */}
            <Row>
                <Col className="col-md-10 mb-4">
                    <Form.Group>
                        <Form.Label className="fw-bold">Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" name="detailsForm.address"
                                      id="address" value={formik.values.address}
                                      onChange={formik.handleChange} onBlur={formik.handleBlur}
                        />

                        {!!formik.errors.detailsForm && (
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.detailsForm.address}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>
                </Col>

                <Col className="pt-2">
                    <Button className="px-4 mt-4 fw-bold" onClick={addressSearch}>Search</Button>
                </Col>
            </Row>

            <Col className="mb-5">
                <Map location={coordinates} searchActive={searchActive}/>
            </Col>

            {/* Card for input preview */}
            <Card className="mb-5">
                <Card.Body className="p-4">
                    <Row>
                        <Col className="col-md-6 mb-4">
                            <Form.Group>
                                <Form.Label className="fw-bold">Full Name</Form.Label>
                                <Form.Control plaintext readOnly value={formik.values.detailsForm.fullName}/>
                            </Form.Group>
                        </Col>
                        <Col className="col-md-6 mb-4">
                            <Form.Group>
                                <Form.Label className="fw-bold">Contact Number</Form.Label>
                                <Form.Control plaintext readOnly value={formik.values.detailsForm.contactNumber}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-6 mb-4">
                            <Form.Group>
                                <Form.Label className="fw-bold">Gender</Form.Label>
                                <Form.Control plaintext readOnly value={formik.values.detailsForm.gender}/>
                            </Form.Group>
                        </Col>
                        <Col className="col-md-6 mb-4">
                            <Form.Group>
                                <Form.Label className="fw-bold">Address</Form.Label>
                                <Form.Control plaintext readOnly value={formik.values.detailsForm.address}/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
};

export default WorkerDetails;