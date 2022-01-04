import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import CustomerMainCard from "./customerMainCard";

export default function CustomerCardContainer({workers}) {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h3 className="mb-5 fw-bold">Available Workers Near You</h3>
                </Col>
                <Col className="text-end">
                    <Button className="fw-bold px-5">Add Job Listing</Button>
                </Col>
            </Row>
            <Row xs={1} md={3} className="g-4">
                {workers.map((w) => (
                    <CustomerMainCard worker={w} key={w.user_id}/>
                ))}
            </Row>
        </Container>
    )
}