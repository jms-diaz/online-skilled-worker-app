import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import WorkerMainCard from "./worker/workerMainCard";

export default function Search() {
    return (
        <Container className="py-5">
            <Col>
                <h3 className="mb-5 fw-bold">Search Results</h3>
            </Col>

            <Row xs={1} md={3} className="g-4">
                {jobs.map((job) => (
                    <WorkerMainCard job={job} key={job._id}/>
                ))
                }
            </Row>
        </Container>
    )
}