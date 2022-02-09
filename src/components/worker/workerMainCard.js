import {Alert, Card, Col} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {calculateManhattanDistance} from "../../api/manhattan";
import SingleWorker from "./singleWorker";
import {getCurrentWorker} from "../../api/worker";

export default function WorkerMainCard({job}) {
    const [modalShow, setModalShow] = useState(false);
    const PF = "http://localhost:5000/images/";
    const [userLatitude, setUserLatitude] = useState();
    const [userLongitude, setUserLongitude] = useState();
    const [name, setName] = useState();

    const handleClick = () => {
        setModalShow(true);
    }

    useEffect(() => {
        const userArray = JSON.parse(sessionStorage.getItem("user"));
        const userId = userArray.id;
        getCurrentWorker(userId).then(
            r => {
                const data = r.data.worker_temp_id;
                setUserLatitude(data.latitude)
                setUserLongitude(data.longitude)
                setName(data.fullName)
                sessionStorage.setItem("workerName", data.fullName);
            }
        );
    }, []);

    return (
        <>
            <SingleWorker job={job} show={modalShow} onHide={() => setModalShow(false)} latitude={userLatitude}
                          longitude={userLongitude} name={name}/>
            <Col>
                <Card className="p-5 text-start h-100" onClick={handleClick}
                      style={{cursor: "pointer"}}>
                    <Card.Img src="https://crystalplazagroup.com/wp-content/uploads/2016/11/placeholder-635x635.jpg" className="d-block ms-3 rounded-2"
                              loading="lazy" style={{width: '70px', height: '70px'}}/>
                    <Card.Body>
                        <Card.Text className="text-muted">{new Date(job.createdAt).toDateString()}</Card.Text>
                        <Card.Title className="fw-bold">{job.jobTitle}</Card.Title>
                        <Card.Text className="text-muted fs-6 pb-3">{job.name}</Card.Text>
                        <Card.Text className="fw-bold">Job Description: </Card.Text>
                        <div className="text-truncate">
                            <Card.Text className="text-muted fs-6">{job.jobDescription}</Card.Text>
                        </div>
                        <Card.Subtitle className="fw-bold pt-5">{
                            calculateManhattanDistance([job.latitude, job.longitude], [userLatitude, userLongitude])
                        } kilometers away</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}