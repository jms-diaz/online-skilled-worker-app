import React from 'react';
import Dashboard from "../components/admin/dashboard";
import {Col, Container, Row} from "react-bootstrap";

export default function AdminDashboard() {
    return (
        <Container className="py-5">
            <Row className="d-flex h-100">
                <Col>
                    <Dashboard />
                </Col>
            </Row>
        </Container>
    )
}