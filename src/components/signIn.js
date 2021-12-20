import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Row
} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";

export default function SignIn() {

    const schema = yup.object().shape({email: yup.string().email().required("Email is required"), password: yup.string().required("Password is required")});

    const navigate = useNavigate();

    return (
        <Container className="h-100 pt-7 pb-2">
            <Row className="d-flex justify-content-center h-100">
                <Col className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <Card className="p-lg-5">
                        <Card.Body className="p-5">
                            <div className="form-header">
                                <h2 className="mb-2">Sign In</h2>
                                <p className="m-2 pb-3">Find job opportunities online</p>
                            </div>
                            <Formik
                                validateOnChange={false}
                                validationSchema={schema}
                                onSubmit={
                                    (values, {setSubmitting}) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 1000);
                                        navigate("/jobs")
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
                                            <Form.Control type="password" placeholder="Enter password" name="password"
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
                                        <Button type="submit" className="fs-6 fw-bold btn py-2 w-100 mt-2">Sign In</Button>
                                    </Form>
                                )
                            }</Formik>
                            <div className="text-center small mt-2">Don't have an account?
                                <a href="/register">Sign up here</a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
