import {
    Button,
    Col,
    Container,
    Form,
    Row
} from "react-bootstrap";
import React, {useState} from "react";
import {searchJobs} from "../../api/worker";
import {searchWorkers} from "../../api/customer";

export default function WorkerMainSearch() {
    const [searchActive, setSearchActive] = useState(false);
    const [searchResults, setSearchResults] = useState();

    const handleSubmit = async () => {
        setSearchActive(true);
        const jobTitle = document.getElementById("jobTitle");
        const location = document.getElementById("location");
        const res = await searchWorkers(jobTitle.value, location.value);
        setSearchResults(res.data);
    }

    return (
        <div className="bg-dark">
            <Container className="py-5">
                <Row>
                    <Col>
                        <h3 className="mb-5 text-white">Find the right job for you</h3>

                        <Form className="pb-5" onSubmit={handleSubmit}>
                            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 align-items-center">
                                <Col className="col-md-5">
                                    <Form.Group>
                                        <Form.Label className="text-white">Job Title</Form.Label>
                                        <Form.Control type="text" placeholder="Senior Software Engineer"
                                                      id="jobTitle"/>
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-5">
                                    <Form.Group>
                                        <Form.Label className="text-white">Location</Form.Label>
                                        <Form.Control type="text" placeholder="Tondo, Manila City" id="location"/>
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-2">
                                    <Button className="fs-6 fw-bold btn py-2 px-5 mt-md-4"
                                            onClick={handleSubmit}>Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
