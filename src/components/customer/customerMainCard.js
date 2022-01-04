import React, {useState} from 'react';
import {Button, Card, Col, Modal, Row} from "react-bootstrap";
import placeholder from "../../images/placeholder.png";
import {calculateManhattanDistance} from "../../apiCalls";
import SingleCustomer from "./singleCustomer";

export default function CustomerMainCard({worker}) {
    const [modalShow, setModalShow] = useState(false);
    const PF = "http://localhost:5000/images/";

    const handleClick = () => {
        setModalShow(true);
    }

    return (
        <>
            <SingleCustomer worker={worker} show={modalShow} onHide={() => setModalShow(false)}/>
            <Col>
                <Card className="p-5 text-start h-100"
                      onClick={handleClick} style={{cursor: "pointer"}}>
                    <Card.Img src={PF + worker.profilePicture} className="d-block ms-3 rounded-2"
                              loading="lazy" style={{width: '70px', height: '70px'}}/>
                    <Card.Body>
                        <Card.Text className="text-muted">{new Date(worker.createdAt).toDateString()}</Card.Text>
                        <Card.Title className="fw-bold">{worker.fullName}</Card.Title>
                        <Card.Text className="text-muted fs-6">{worker.occupation}</Card.Text>
                        <Card.Text
                            className="text-muted">{worker.fieldOfStudy + " - " + worker.universityName}</Card.Text>
                        <Card.Subtitle
                            className="fw-bold pt-5">{
                                calculateManhattanDistance([worker.latitude, worker.longitude])
                            } meters away</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}