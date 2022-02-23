import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Modal, Row} from "react-bootstrap";
import {getCurrentCustomer, hireWorkers} from "../../api/customer";

export default function SingleCustomer(props) {
    const PF = "http://localhost:5000/images/";
    const [disabled, setDisabled] = useState(false);
    const [selectedJob, setSelectedJob] = useState();
    const [jobs, setJobs] = useState([]);
    const [name, setName] = useState("");
    const educ = props.worker.education[0];
    const exp = props.worker.experience[0];

    const handleClick = (workerName) => {
        if (!selectedJob) {
            alert('Please select a job');
        } else {
            const jobDetails = {
                selectedJob,
                workerName: workerName,
                customerName: name
            }
            hireWorkers(jobDetails).then(r => setDisabled(true));
        }
    }

    const userArray = JSON.parse(sessionStorage.getItem("user"));
    const userId = userArray.id;

    useEffect(() => {
        getCurrentCustomer(userId).then(
            r => {
                const data = r.data.customer_temp_id;
                setJobs(data.jobsCreated);
                setName(data.name);
            }
        )
    }, []);

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
                    <Col>
                        <div className="input-group mb-3">
                            <select className="form-select"
                                    defaultValue="0" name="createdJobs"
                                    style={{backgroundColor: '#fffefe'}}
                                    onChange={(e) => setSelectedJob(e.target.value)}
                            >
                                <option value="0" disabled>Select Job</option>
                                {jobs.map((job) => (
                                    <option key={job._id} value={job.jobTitle}>{job.jobTitle}</option>
                                ))}
                            </select>
                            <div className="input-group-append">
                                <Button disabled={disabled} className="fs-6 fw-bold btn py-2"
                                        onClick={() => handleClick(props.worker.fullName)}
                                >
                                    Hire Now
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <p className="text-muted">Full Time</p>
                <h4 className="fw-bold">{props.worker.occupation}</h4>
                <p className="mb-0">0{props.worker.contactNumber}</p>
                <p className="mb-0">{props.worker.address}</p>
                {exp.salary &&  <p className="fw-bold pb-3">Expected Salary: Php {exp.salary}</p>}

                <p className="fw-bold mb-1">Education</p>
                <p className="text-muted mb-1">{educ.fieldOfStudy} - {educ.qualification}</p>
                <p className="text-muted">{educ.universityName} ({educ.universityLocation})</p>

                <p className="fw-bold mb-1">Work Experience</p>
                {
                    exp && (
                        <>
                            <p className="text-muted mb-1">{exp.positionTitle} - {exp.companyName}</p>
                            <p className="text-muted mb-3">From {exp.joinedDurationStart} to {exp.joinedDurationEnd}</p>
                        </>)
                }
                {
                    exp.resume && <a href={PF + exp.resume} target="_blank">View Resume</a>
                }
            </Modal.Body>
            <Card.Footer>
                <small className="text-muted text-center">For more information, please contact <a
                    href="mailto:oswl-admin@support.com">oswl-admin@support.com</a></small>
            </Card.Footer>
        </Modal>
    )
}