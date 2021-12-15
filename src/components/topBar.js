import {Navbar, Container, Button} from 'react-bootstrap';
import logo from '../images/oswa-logo.png';
import {useNavigate} from "react-router-dom";

export default function TopBar() {
    const navigate = useNavigate();

    function registerClick() {
        navigate("/register");
    }

    function loginClick() {
        navigate("/login");
    }

    function signOutClick() {
        navigate("/");
    }

    return (
        <Navbar bg="light">
            <Container className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <Navbar.Brand href="/" className="font-monospace fs-4 fw-bold py-3">
                    <img
                        alt=""
                        src={logo}
                        width="60"
                        height="50"
                        className="d-inline-block pe-2"
                    />{' '}
                    OSWL
                </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="light" className="fw-bold fs-6 me-3 px-3 py-2" onClick={loginClick}>Sign in</Button>
                        <Button className="fw-bold fs-6 px-3 py-2" onClick={registerClick}>Join Now</Button>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}