import React, {useState} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import placeholder from "../images/placeholder.png";

export default function EmployerMainCard() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Container className="py-5">
            <h3 className="mb-5 fw-bold">Available Workers Near You</h3>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 9 }).map((_, idx) => (
                    <Col>
                        <Card className="p-5 text-start"  onClick={() => setModalShow(true)} style={{ cursor: "pointer" }}>
                            <Card.Img
                                src={placeholder}
                                className="d-block ms-3 rounded-2"
                                loading="lazy"
                                style={{
                                    width: '80px',
                                    height: '70px'
                                }}
                            />
                            <Card.Body>
                                <Card.Text  className="text-muted">5hrs ago - Full Time</Card.Text>
                                <Card.Title className="fw-bold">Senior Software Engineer</Card.Title>
                                <Card.Text className="text-muted fs-6">John Doe</Card.Text>
                                <Card.Subtitle  className="fw-bold pt-5">Makati City</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <EmployerModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>
    )
}

function EmployerModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Worker Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-5">
                <Row className="align-items-center pb-lg-3">
                    <Col className="col-lg-1">
                        <img src={placeholder}
                             className="rounded-2"
                             loading="lazy"
                             style={{
                                 width: '80px',
                                 height: '70px'
                             }}
                             alt="..."
                        />
                    </Col>
                    <Col className="ps-5">
                        <h4 className="fw-bold ps-3">John Doe</h4>
                    </Col>
                    <Col className="text-end">
                        <Button className="fs-6 fw-bold btn py-2 px-5">Hire Now</Button>
                    </Col>
                </Row>
                <p className="text-muted">Full Time</p>
                <h4 className="fw-bold">Senior Software Engineer</h4>
                <p className="fw-bold pb-3">Makati City</p>
                <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </Modal.Body>
        </Modal>
    )
}