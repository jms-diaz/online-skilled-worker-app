import React, {useState} from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    Row
} from "react-bootstrap";
import {searchWorkers} from "../../api/customer";
import {useNavigate} from "react-router-dom";


// TODO: display search results

export default function CustomerMainSearch() {

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const jobTitle = document.getElementById("jobTitle");
        const location = document.getElementById("location");
        const res = await searchWorkers(jobTitle.value, location.value);
        console.log(res.data);
        if (res.status === 200) {
            navigate("/search");
        }
    }

    return (
        <div className="bg-dark">
            <Container className="py-5">
                <Row>
                    <Col className="">
                        <h3 className="mb-5 text-white">Find the right worker for you</h3>

                        <Form className="pb-5">
                            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 align-items-center">
                                <Col className="col-md-5">
                                    <Form.Group>
                                        <Form.Label className="text-white">Role Title</Form.Label>
                                        <Form.Control type="text" placeholder="Senior Software Engineer" id="jobTitle"/>
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-5">
                                    <Form.Group>
                                        <Form.Label className="text-white">Location</Form.Label>
                                        <Form.Control type="text" placeholder="Tondo, Manila City" id="location"/>
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-2">
                                    <Button className="fs-6 fw-bold btn py-2 px-5 mt-md-4"
                                            onClick={handleSubmit}>Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
