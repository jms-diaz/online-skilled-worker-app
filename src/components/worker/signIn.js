import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from "yup";
import {Link} from "react-router-dom";
import {loginWorker} from "../../apiCalls";
import {useContext, useState} from "react";
import {Context} from "../../context/Context";

export default function SignIn() {

    const schema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string().required("Password is required")
    });
    const {dispatch} = useContext(Context);
    const [error, setError] = useState(false);

    return (
        <Container className="h-100 pt-7 pb-2">
            <Row className="d-flex justify-content-center h-100">
                <Col className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <Card className="p-lg-5">
                        <Card.Body className="p-5">
                            <div className="form-header">
                                <h2 className="mb-2">Sign In as Worker</h2>
                                <p className="m-2 pb-3">Find job opportunities online</p>
                            </div>
                            <Formik
                                validateOnChange={false}
                                validationSchema={schema}
                                onSubmit={
                                    async (values) => {
                                        setError(false);
                                        await loginWorker({values}, dispatch);
                                    }
                                }
                                initialValues={
                                    {
                                        email: "",
                                        password: ""
                                    }
                                }>
                                {
                                    ({
                                         handleSubmit,
                                         handleChange,
                                         handleBlur,
                                         values,
                                         touched,
                                         isValid,
                                         errors
                                     }) => (
                                        <Form noValidate
                                              onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="fw-bold">Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" name="email"
                                                              value={
                                                                  values.email
                                                              }
                                                              onChange={handleChange}
                                                              isInvalid={
                                                                  !!errors.email
                                                              }/>

                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        errors.email
                                                    } </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formPassword">
                                                <Form.Label className="fw-bold">Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter password"
                                                              name="password"
                                                              value={
                                                                  values.password
                                                              }
                                                              onChange={handleChange}
                                                              isInvalid={
                                                                  !!errors.password
                                                              }/>

                                                <Form.Control.Feedback type="invalid">
                                                    {
                                                        errors.password
                                                    } </Form.Control.Feedback>
                                            </Form.Group>
                                            <Button type="submit" className="fs-6 fw-bold btn py-2 w-100 mt-2">Sign
                                                In</Button>
                                        </Form>
                                    )
                                }</Formik>
                            <div className="text-center small mt-2">Don't have an account? <Link className="link"
                                                                                                 to="/worker-register">Sign
                                up</Link>
                            </div>
                            {error && <span className="text-danger">Something went wrong. Please try again.</span>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
