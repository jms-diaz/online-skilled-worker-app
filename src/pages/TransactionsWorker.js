import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ViewTransactionsWorker from "../components/worker/viewTransactionsWorker";

export default function TransactionsWorker() {
    return (
        <>
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