import React from 'react';
import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import WorkerMainCard from "./workerMainCard";
import {useNavigate} from "react-router-dom";

export default function WorkerCardContainer({jobs}) {

    const navigate = useNavigate();

    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h3 className="mb-5 fw-bold">Jobs Near You</h3>
                </Col>

                <Col className="text-end mb-4">
                    <Button className="fw-bold px-5" onClick={() => navigate("/view-transactions-worker")}>
                        View Transaction History
                    </Button>
                </Col>
            </Row>

            <Row xs={1} md={3} className="g-4">
                {jobs.map((job) => (
                    <WorkerMainCard job={job} key={job._id}/>
                ))
                }
            </Row>
        </Container>
    )
}