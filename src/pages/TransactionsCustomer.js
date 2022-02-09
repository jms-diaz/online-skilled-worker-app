import React from 'react';
import ViewTransactionsCustomer from "../components/customer/viewTransactionsCustomer";
import {Col, Container, Row} from "react-bootstrap";

export default function TransactionsCustomer() {
    return (
        <>
            <Container className="py-5">
                <Row className="d-flex">
                    <Col className="">
                        <h3 className="mb-5 fw-bold">Transaction History</h3>
                        <ViewTransactionsCustomer/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}