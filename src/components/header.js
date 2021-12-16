import {Container, Button, Row, Col} from 'react-bootstrap';
import heroImage from "../images/hero-image.jpg";
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    function registerClick() {
        navigate("/register");
    }

    function employerLoginClick() {
        navigate("/employer-sign-in");
    }

    return (
        <>
            <header className="header pt-lg-10">
                <Container>
                    <Row>
                        <Col className="col-lg-6 col-xl-5 col-sm-12">
                            <h1 className="display-3 fw-bolder lh-1 mb-4">
                                Find skilled workers online
                            </h1>
                            <p className="lead mb-4">
                                Quickly design and customize responsive mobile-first sites with Bootstrap,
                                the world’s most popular front-end open source toolkit.
                            </p>
                            <Button onClick={registerClick} className="btn fw-bold btn-primary btn-lg px-5 py-3 fs-6 me-md-4">
                                Join Now
                            </Button>
                            <Button onClick={employerLoginClick} className="btn fw-bold btn-secondary btn-lg px-5 py-3 fs-6">
                                Employer Login
                            </Button>
                        </Col>
                        <Col className="col-lg-6 col-xl-7 col-sm-12">
                            <img
                                alt=""
                                src={heroImage}
                                width="600"
                                height="800"
                                className="d-block mx-lg-auto img-fluid rounded-2"
                                loading="lazy"
                            />{' '}
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
}