import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import CustomerMainCard from "./customerMainCard";
import {useNavigate} from "react-router-dom";

export default function CustomerSearchResults({results}) {
    const navigate = useNavigate();

    return (
        <Container className="py-5">

            <Col>
                <h3 className="mb-5 fw-bold">Search Results</h3>
            </Col>


            <Row>
                <Col className="mb-4">
                    <Button className="fw-bold px-3" variant="light"
                            onClick={() => navigate("/view-transactions-customer")}>
                        View Transaction History
                    </Button>
                </Col>
                <Col className="text-end mb-4">
                    <Button className="fw-bold px-5" onClick={() => navigate("/add-job")}>
                        Add Job Listing
                    </Button>
                </Col>
            </Row>

            <Row xs={1} md={3} className="g-4">
                {results && results.map((w) => (
                    <CustomerMainCard worker={w} key={w._id}/>
                ))}
            </Row>
        </Container>
    )
}