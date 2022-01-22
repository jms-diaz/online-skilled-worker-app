import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AddJobListing from "../components/customer/addJobListing";

export default function JobListing() {
    return (
        <Container className="py-5">
            <Row className="d-flex h-100">
                <Col className="pe-xxl-25 pe-md-7">
                    <h3 className="mb-5 fw-bold">Add Job Listing</h3>
                    <AddJobListing />
                </Col>
            </Row>
        </Container>
    )
}