import React, {useEffect, useState} from 'react';
import {Card, Col} from "react-bootstrap";
import {calculateManhattanDistance} from "../../api/manhattan";
import SingleCustomer from "./singleCustomer";
import {getCurrentCustomer} from "../../api/customer";

export default function CustomerMainCard({worker}) {

    const [modalShow, setModalShow] = useState(false);
    const PF = "http://localhost:5000/images/";
    const educ = worker.education[0];
    const [userLatitude, setUserLatitude] = useState();
    const [userLongitude, setUserLongitude] = useState();
    const [name, setName] = useState("");

    const handleClick = () => {
        setModalShow(true);
    }
    useEffect(() => {
        const userArray = JSON.parse(sessionStorage.getItem("user"));
        const userId = userArray.id;
        getCurrentCustomer(userId).then(
            r => {
                const data = r.data.customer_temp_id;
                setUserLatitude(data.latitude)
                setUserLongitude(data.longitude)
                setName(data.name);
                sessionStorage.setItem("customerName", data.name);
            }
        );
    }, []);

    return (
        <>
            <SingleCustomer name={name} worker={worker}
                            show={modalShow} onHide={() => setModalShow(false)}
            />
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
                            className="text-muted">{educ.fieldOfStudy + " - " + educ.universityName}</Card.Text>
                        <Card.Subtitle
                            className="fw-bold pt-5">{
                            calculateManhattanDistance([worker.latitude, worker.longitude], [userLatitude, userLongitude])
                        } kilometers away</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}