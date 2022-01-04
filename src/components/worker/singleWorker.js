import React from 'react';
import {Button, Col, Modal, Row} from "react-bootstrap";
import placeholder from "../../images/placeholder.png";

export default function SingleWorker(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Job Description
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-5">
                <Row className="align-items-center pb-lg-3">
                    <Col className="col-lg-1">
                        <img src={placeholder} className="rounded-2"
                             loading="lazy" style={{width: '70px', height: '70px'}}
                             alt="..."
                        />
                    </Col>
                    <Col className="ps-5">
                        <h4 className="fw-bold ps-3">{props.customer.name}</h4>
                    </Col>
                    <Col className="text-end">
                        <Button className="fs-6 fw-bold btn py-2 px-5">Apply Now</Button>
                    </Col>
                </Row>
                <p className="text-muted">5hrs ago - Full Time</p>
                <h4 className="fw-bold">Senior Software Engineer</h4>
                <p className="fw-bold pb-3">{props.customer.address}</p>
                <p className="text-muted">{props.customer.bio}</p>
            </Modal.Body>
        </Modal>
    )
}