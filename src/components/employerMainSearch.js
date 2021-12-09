import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

export default function EmployerMainSearch() {
    return (
        <div className="bg-dark">
            <Container className="py-5">
                <Row className="h-100">
                    <Col className="">
                        <h3 className="mb-5 text-white">Find the right worker for the company</h3>

                        <Form className="pb-5">
                            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 align-items-center">
                                <Col className="col-md-5">
                                    <Form.Group>
                                        <Form.Label className="text-white">Role Title</Form.Label>
                                        <Form.Control type="text"  placeholder="Senior Software Engineer"/>
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-5">
                                    <Form.Group>
                                        <Form.Label className="text-white">Job Specializations</Form.Label>
                                        <Form.Control type="text" placeholder="Computer/Information Technology" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-2">
                                    <Button className="fs-6 fw-bold btn py-2 px-5 mt-md-4">Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}