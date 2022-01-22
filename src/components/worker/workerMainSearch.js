import {
    Button,
    Col,
    Container,
    Form,
    Row
} from "react-bootstrap";
import {useState} from "react";
import {searchJobs} from "../../api/worker";

export default function WorkerMainSearch() {

    const [jobTitle, setJobTitle] = useState("");
    const [jobSpecialization, setJobSpecialization] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await searchJobs(jobTitle, jobSpecialization);
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
                                        <Form.Control type="text" placeholder="Construction Worker"
                                                      onChange={(e) => setJobTitle(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-5">
                                    <Form.Group>
                                        <Form.Label className="text-white">Job Specialization</Form.Label>
                                        <Form.Control type="text" placeholder="Engineering"
                                                      onChange={(e) => setJobSpecialization(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-2">
                                    <Button className="fs-6 fw-bold btn py-2 px-5 mt-md-4" type="submit">
                                        Search
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
