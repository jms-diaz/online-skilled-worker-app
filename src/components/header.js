import {Container, Button, Row, Col} from 'react-bootstrap';
import heroImage from "../images/hero-image.jpg";
import {useNavigate} from "react-router-dom";
import '../scss/custom.scss';

export default function Header() {
    const navigate = useNavigate();

    function registerClick() {
        navigate("/customer-sign-up");
    }

    return (
        <>
            <header className="header pt-lg-10">
                <Container>
                    <Row>
                        <Col className="col-lg-6 col-xl-5 col-sm-12">
                            <h1 className="display-3 fw-bolder lh-1 mb-4">
                                Find skilled workers near you
                            </h1>
                            <p className="lead mb-4">
                                OSWL Service Providers are talented, independent freelancers in Metro Manila that are professionals and experts in their fields and take a lot of pride in their work.                            </p>
                            <Button onClick={registerClick}
                                className="btn fw-bold btn-primary btn-lg px-5 py-3 fs-6 me-md-4">
                                Book a Worker Now!
                            </Button>
                        </Col>
                        <Col className="col-lg-6 col-xl-7 col-sm-12">
                            <img alt=""
                                src={heroImage}
                                width="600"
                                height="800"
                                className="d-block mx-lg-auto img-fluid rounded-2 hero-image float-end"
                                loading="lazy"/>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
}
