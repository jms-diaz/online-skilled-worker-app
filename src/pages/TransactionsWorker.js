import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ViewTransactionsWorker from "../components/worker/viewTransactionsWorker";
import WorkerMainSearch from "../components/worker/workerMainSearch";

export default function TransactionsWorker() {
    return (
        <>
            <WorkerMainSearch/>
            <Container className="py-5">
                <Row className="d-flex">
                    <Col>
                        <h3 className="mb-5 fw-bold">Transaction History</h3>
                        <ViewTransactionsWorker/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}