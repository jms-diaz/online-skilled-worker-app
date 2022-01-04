import React, {useState} from 'react';
import {Button, Col, Modal, Row} from "react-bootstrap";
export default function SingleCustomer(props) {
    const PF = "http://localhost:5000/images/";
    const [disabled, setDisabled] = useState(false);

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Worker Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-5">
                <Row className="align-items-center pb-lg-3">
                    <Col className="col-lg-1">
                        <img src={PF + props.worker.profilePicture}
                             className="rounded-2"
                             loading="lazy"
                             style={
                                 {
                                     width: '70px',
                                     height: '70px'
                                 }
                             }
                             alt="..."/>
                    </Col>
                    <Col className="ps-5">
                        <h4 className="fw-bold ps-3">{props.worker.fullName}</h4>
                    </Col>
                    <Col className="text-end">
                        <Button disabled={disabled} onClick={() => setDisabled(true)} className="fs-6 fw-bold btn py-2 px-5">Hire Now</Button>
                    </Col>
                </Row>
                <p className="text-muted">Full Time</p>
                <h4 className="fw-bold">{props.worker.occupation}</h4>
                <p className="pb-3">{props.worker.address}</p>

                <p className="fw-bold mb-1">Education</p>
                <p className="text-muted mb-1">{props.worker.fieldOfStudy} - {props.worker.qualification}</p>
                <p className="text-muted">{props.worker.universityName} ({props.worker.universityLocation})</p>

                <p className="fw-bold mb-1">Work Experience</p>
                <p className="text-muted mb-1">{props.worker.fieldOfStudy} - {props.worker.qualification}</p>
                <p className="text-muted mb-1">{props.worker.universityName} ({props.worker.universityLocation})</p>
            </Modal.Body>
        </Modal>
    )
}