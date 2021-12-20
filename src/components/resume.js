import * as yup from 'yup';
import '../scss/forms.scss';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Map from "./maps";
import {useState} from "react";

export default function Resume() {

	const [location, setLocation] = useState();

	const schema = yup.object().shape({
		firstName: yup.string().required('First name is required'),
		lastName: yup.string().required('Last name is required'),
		contactNumber: yup
			.string()
			.matches(new RegExp('[0-9]{11}'), 'Contact number must be 11 digits')
			.required('Contact number is required'),
		gender: yup.string().required('Gender is required'),
		address: yup.string().required('Address is required'),
		universityName: yup.string().required('University name is required'),
		qualification: yup.string().required('Qualification is required'),
		graduationDate: yup.date().required('Graduation date is required'),
		universityLocation: yup.string().required('Location is required'),
		fieldOfStudy: yup.string().required('Field of study is required')
	});

	const navigate = useNavigate();

	return (
		<Container className="py-5">
			<Row className="d-flex h-100">
				<Col className="pe-xxl-25 pe-md-7">
					<h3 className="mb-5 fw-bold">Set Up Your Resume</h3>

					<Formik
						validateOnChange={false}
						validationSchema={schema}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
							}, 1000);
							navigate('/experience');
						}}
						initialValues={{
							firstName: '',
							lastName: '',
							contactNumber: '',
							address: '',
							universityName: '',
							qualification: '',
							graduationDate: '',
							universityLocation: '',
							fieldOfStudy: ''
						}}
					>
						{({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
							<Form noValidate onSubmit={handleSubmit}>
								<Row>
									<Col className="col-md-6">
										<Form.Group className="mb-3" controlId="formContactPerson">
											<Form.Label className="fw-bold">First Name</Form.Label>
											<Form.Control
												type="text"
												placeholder="Enter first name"
												name="firstName"
												value={values.firstName}
												isInvalid={!!errors.firstName}
											/>

											<Form.Control.Feedback type="invalid">
												{errors.firstName}
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
									<Col className="col-md-6">
										<Form.Group className="mb-3" controlId="formContactPerson">
											<Form.Label className="fw-bold">Last Name</Form.Label>
											<Form.Control
												type="text"
												placeholder="Enter last name"
												name="lastName"
												value={values.lastName}
												onChange={handleChange}
												isInvalid={!!errors.lastName}
											/>

											<Form.Control.Feedback type="invalid">
												{errors.lastName}
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
								</Row>

								<Row>
									<Col className="col-md-6">
										<Form.Group>
											<Form.Label className="fw-bold">Gender</Form.Label>
											<select
												className="form-select"
												defaultValue={''}
												name="gender"
												value={values.gender}
												onChange={handleChange}
												onBlur={handleBlur}
												style={{ backgroundColor: '#fffefe' }}
											>
												<option value="" disabled>
													---SELECT---
												</option>
												<option value="male">Male</option>
												<option value="female">Female</option>
											</select>

											<div className="invalid-feedback">{errors.gender}</div>
										</Form.Group>
									</Col>
									<Col className="col-md-6">
										<Form.Group className="mb-3" controlId="formContactPerson">
											<Form.Label className="fw-bold">Contact Number</Form.Label>
											<Form.Control
												type="text"
												placeholder="Enter contact number"
												name="contactNumber"
												value={values.contactNumber}
												onChange={handleChange}
												isInvalid={!!errors.contactNumber}
											/>

											<Form.Control.Feedback type="invalid">
												{errors.contactNumber}
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
								</Row>

								<Col className="mb-4">
									<Map />
								</Col>

								<h3 className="my-5 fw-bold">Education</h3>

								<Row>
									<Col className="col-md-6">
										<Form.Group className="mb-3" controlId="formContactPerson">
											<Form.Label className="fw-bold">Institute/University Name</Form.Label>
											<Form.Control
												type="text"
												placeholder="Enter university name"
												name="universityName"
												value={values.universityName}
												onChange={handleChange}
												isInvalid={!!errors.universityName}
											/>

											<Form.Control.Feedback type="invalid">
												{errors.universityName}
											</Form.Control.Feedback>
										</Form.Group>
									</Col>

									<Col className="col-md-6">
										<Form.Group>
											<Form.Label className="fw-bold">Qualification</Form.Label>
											<select
												className="form-select"
												defaultValue={''}
												name="qualification"
												value={values.qualification}
												onChange={handleChange}
												style={{ backgroundColor: '#fffefe' }}
											>
												<option value="" disabled>
													---SELECT---
												</option>
												<option value="No formal education">No formal education</option>
												<option value="Primary education">Primary education</option>
												<option value="Secondary education">
													Secondary education or high school
												</option>
												<option value="GED">GED</option>
												<option value="Vocational qualification">
													Vocational qualification
												</option>
												<option value="Bachelor's degree">Bachelor's degree</option>
												<option value="Master's degree">Master's degree</option>
												<option value="Doctorate or higher">Doctorate or higher</option>
											</select>

											<div className="invalid-feedback">{errors.qualification}</div>
										</Form.Group>
									</Col>
								</Row>

								<Row>
									<Col className="col-md-6">
										<Form.Group>
											<Form.Label className="fw-bold">Graduation Date</Form.Label>
											<Form.Control
												type="date"
												placeholder="Enter graduation date"
												name="graduationDate"
												value={values.graduationDate}
												onChange={handleChange}
												isInvalid={!!errors.graduationDate}
											/>

											<Form.Control.Feedback type="invalid">
												{errors.graduationDate}
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
									<Col className="col-md-6">
										<Form.Group className="mb-3" controlId="formContactPerson">
											<Form.Label className="fw-bold">Institute/University Location</Form.Label>
											<Form.Control
												type="text"
												placeholder="Enter university location"
												name="universityLocation"
												value={values.universityLocation}
												onChange={handleChange}
												isInvalid={!!errors.universityLocation}
											/>

											<Form.Control.Feedback type="invalid">
												{errors.universityLocation}
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
								</Row>

								<Col className="mb-4">
									<Form.Group className="mb-3" controlId="formContactPerson">
										<Form.Label className="fw-bold">Field of Study</Form.Label>
										<Form.Control
											type="text"
											placeholder="Bachelor of Science in Information Technology"
											name="fieldOfStudy"
											value={values.fieldOfStudy}
											onChange={handleChange}
											isInvalid={!!errors.fieldOfStudy}
										/>

										<Form.Control.Feedback type="invalid">
											{errors.fieldOfStudy}
										</Form.Control.Feedback>
									</Form.Group>
								</Col>
								<Button className="fs-6 fw-bold btn py-2 px-5 mt-2 mb-4">Add Education</Button>

								<Card className="mb-4">
									<Card.Body className="p-4">
										<Form>
											<Row>
												<Col className="col-md-6 mb-4">
													<Form.Group>
														<Form.Label className="fw-bold">
															Institute/University Name
														</Form.Label>
														<Form.Control plaintext readOnly defaultValue="N/A" />
													</Form.Group>
												</Col>
												<Col className="col-md-6 mb-4">
													<Form.Group>
														<Form.Label className="fw-bold">Qualification</Form.Label>
														<Form.Control plaintext readOnly defaultValue="N/A" />
													</Form.Group>
												</Col>
											</Row>

											<Row>
												<Col className="col-md-6 mb-4">
													<Form.Group>
														<Form.Label className="fw-bold">Graduation Date</Form.Label>
														<Form.Control plaintext readOnly defaultValue="N/A" />
													</Form.Group>
												</Col>
												<Col className="col-md-6 mb-4">
													<Form.Group>
														<Form.Label className="fw-bold">
															Institute/University Location
														</Form.Label>
														<Form.Control plaintext readOnly defaultValue="N/A" />
													</Form.Group>
												</Col>
											</Row>

											<Col className="mb-4">
												<Form.Group>
													<Form.Label className="fw-bold">Field of Study</Form.Label>
													<Form.Control plaintext readOnly defaultValue="N/A" />
												</Form.Group>
											</Col>

											<Col className="text-end">
												<Button className="fs-6 btn-danger fw-bold btn py-2 px-3">
													Remove
												</Button>
											</Col>
										</Form>
									</Card.Body>
								</Card>
								<Col className="text-end">
									<Button type="submit" className="fs-6 fw-bold btn py-2 px-7 mt-2 mb-4 text-end">
										Next Page
									</Button>
								</Col>
							</Form>
						)}</Formik>
				</Col>
			</Row>
		</Container>
	);
}
