import placeholder from '../../images/placeholder.png';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {calculateManhattanDistance} from "../../apiCalls";
import SingleWorker from "./singleWorker";

export default function MainCard({customer}) {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    }
    console.log(customer);

    return (
        <>
            <SingleWorker customer={customer} show={modalShow} onHide={() => setModalShow(false)}/>
            <Col>
                <Card className="p-5 text-start h-100" onClick={handleClick}
                      style={{cursor: "pointer"}}>
                    <Card.Img src={placeholder} className="d-block ms-3 rounded-2"
                              loading="lazy" style={{width: '70px', height: '70px'}}/>
                    <Card.Body>
                        <Card.Text className="text-muted">{new Date(customer.createdAt).toDateString()}</Card.Text>
                        <Card.Title className="fw-bold">{customer.name}</Card.Title>
                        <Card.Text className="text-muted fs-6">{customer.address}</Card.Text>
                        <Card.Subtitle className="fw-bold pt-5">{
                            calculateManhattanDistance([customer.latitude, customer.longitude])
                        } meters away</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}