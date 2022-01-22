import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Modal, Row} from "react-bootstrap";
import {calculateManhattanDistance} from "../../api/manhattan";
import {applyJob, getCurrentWorker} from "../../api/worker";
import {Context} from "../../context/Context";

export default function SingleWorker(props) {

    const PF = "http://localhost:5000/images/";
    const [disabled, setDisabled] = useState(false);
    const [workerName, setWorkerName] = useState("");
    const {user} = useContext(Context);

    const handleClick = async (jobTitle, customerName) => {
        const jobDetails = {
            jobTitle,
            customerName,
            workerName
        }
        console.log(jobDetails);
        const res = await applyJob(jobDetails);
        res.data && setDisabled(true);
    }

    useEffect(() => {
        getCurrentWorker(user.id).then(
            r => {
                const data = r.data.worker_temp_id;
                setWorkerName(data.fullName);
            }
        )
    }, []);


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
                        <img src="https://crystalplazagroup.com/wp-content/uploads/2016/11/placeholder-635x635.jpg"
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
                        <h4 className="fw-bold">{props.job.jobTitle}</h4>
                    </Col>
                    <Col className="text-end">
                        <Button className="fs-6 fw-bold btn py-2 px-5" disabled={disabled}
                                onClick={() => handleClick(props.job.jobTitle, props.job.name)}
                        >
                            Apply Now
                        </Button>
                    </Col>
                </Row>
                <p className="text-muted pb-4">{new Date(props.job.createdAt).toDateString()}</p>
                <p className="fw-bold">Posted by {props.job.name}</p>
                <p className="text-muted">Php {props.job.salary}</p>
                <p className="text-muted" style={{whiteSpace: "pre-line"}}>{props.job.jobDescription}</p>
                <p className="fw-bold">{props.job.jobLocation} - {
                    calculateManhattanDistance([props.job.latitude, props.job.longitude], [props.latitude, props.longitude])
                } kilometers away</p>
            </Modal.Body>
        </Modal>
    )
}