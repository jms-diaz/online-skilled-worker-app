import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Context} from "../../context/Context";
import {getCurrentWorker} from "../../api/worker";
import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import WorkerMainCard from "./workerMainCard";

export default function WorkerSearchResults({results}) {
    const navigate = useNavigate();
    const {user} = useContext(Context);
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        getCurrentWorker(user.id).then(
            r => {
                const data = r.data.worker_temp_id;
                setVerified(data.verified);
            }
        )
    }, [verified]);

    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h3 className="mb-5 fw-bold">Search Results</h3>
                </Col>

                <Col className="text-end mb-4">
                    <Button className="fw-bold px-5" onClick={() => navigate("/view-transactions-worker")}>
                        View Transaction History
                    </Button>
                </Col>
            </Row>

            {!verified && (<Alert variant="dark" className="mb-5">
                Your application is pending approval. For further inquiries, please contact{' '}
                <Alert.Link href="mailto:ranjanjoseph20@gmail.com">ranjanjoseph20@gmail.com</Alert.Link>
            </Alert>)}

            <Row xs={1} md={3} className="g-4">
                {results.map((r) => (
                    <WorkerMainCard job={r} key={r._id}/>
                ))
                }
            </Row>
        </Container>
    )
}