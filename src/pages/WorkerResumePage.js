import WorkerDetails from "../components/worker/workerDetails";
import WorkerEducation from "../components/worker/workerEducation";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import {useFormik} from "formik";
import * as yup from 'yup';
import React, {useState} from "react";
import {uploadPhoto} from "../api/auth";
import {postWorkerDetails, postWorkerEduc} from "../api/worker";

export default function WorkerResumePage() {
    const [error, setError] = useState(false);
    const [coordinates, setCoordinates] = useState([]);

    const childToParent = (locationCoordinates) => {
        setCoordinates(locationCoordinates);
    }

    const formik = useFormik({
        initialValues: {
            detailsForm: {
                fullName: '',
                profilePicture: '',
                contactNumber: '',
                gender: '',
                occupation: '',
                address: ''
            },
            educationForm: {
                universityName: '',
                qualification: '',
                graduationDate: '',
                universityLocation: '',
                fieldOfStudy: ''
            }
        },
        validationSchema: yup.object({
            detailsForm: yup.object({
                fullName: yup.string().required('Name is required'),
                profilePicture: yup.string().required('Profile picture is required'),
                contactNumber: yup
                    .string()
                    .matches(new RegExp('[0-9]{11}'), 'Contact number must be 11 digits')
                    .required('Contact number is required'),
                gender: yup.string().required('Gender is required'),
                occupation: yup.string().required('Occupation is required'),
                address: yup.string().required('Address is required'),
            }),
            educationForm: yup.object({
                universityName: yup.string().required('University name is required'),
                qualification: yup.string().required('Qualification is required'),
                graduationDate: yup.date().required('Graduation date is required'),
                universityLocation: yup.string().required('University location is required'),
                fieldOfStudy: yup.string().required('Field of study is required'),
            })
        }),
        onSubmit: async (values) => {
            try {
                const file = values.detailsForm.profilePicture;
                const data = new FormData();
                const filename = Date.now() + file.name;
                data.append("name", filename);
                data.append("file", file);
                await uploadPhoto(data);
                values.detailsForm.profilePicture = filename;
            } catch (err) {
                console.log(err);
            }
            setError(false);
            await postWorkerDetails(values.detailsForm, setError, coordinates);
            await postWorkerEduc(values.educationForm, setError);
        }
    })
    return (
        <Container className="py-5">
            <Row className="d-flex h-100">
                <Col className="pe-xxl-25 pe-md-7">
                    <Form onSubmit={formik.handleSubmit}>
                        <WorkerDetails formik={formik} childToParent={childToParent}/>
                        <WorkerEducation formik={formik}/>
                        <Row>
                            <Col>
                                <Button className="fs-6 btn-danger fw-bold btn py-2 px-5" onClick={formik.handleReset}>
                                    Reset All Fields
                                </Button>
                            </Col>
                            <Col className="text-end">
                                <Button type="submit" className="fs-6 fw-bold btn py-2 px-7 mt-2 mb-4 text-end">
                                    Next Page
                                </Button>
                            </Col>
                            <div className="text-center">
                                {error && <span className="text-danger text-center">Something went wrong. Please try again.</span>}
                            </div>
                        </Row>
                    </Form>

                </Col>
            </Row>
        </Container>
    )
}
