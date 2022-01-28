import {Navbar, Container, Button} from 'react-bootstrap';
import logo from '../images/oswa-logo.png';
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../context/Context";
import '../scss/custom.scss';
import placeholder from '../images/placeholder.png';

export default function TopBar() {
    const navigate = useNavigate();
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const employerRegisterClick = () => {
        navigate("/worker-register");
    }

    const loginClick = () => {
        navigate("/customer-sign-in");
    }

    const signOutClick = () => {
        dispatch({type: "LOGOUT"})
        localStorage.clear();
        sessionStorage.clear();
        navigate("/");
    }

    return (
        <Navbar bg="light">
            <Container className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <Navbar.Brand className="font-monospace fs-4 fw-bold py-3">
                    {
                    }
                    <Link to="/" className="text-decoration-none">
                        <img alt=""
                             src={logo}
                             width="60"
                             height="50"
                             className="d-inline-block pe-2"
                        />
                        OSWL
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {
                        user ?
                            <>
                                <Button variant="light" className="fs-6 me-3 px-3 py-2 fw-bold" onClick={signOutClick}>Sign out</Button>
                                    {user.profilePicture ? (
                                        <img
                                            src={PF + user.profilePicture}
                                            className="topImage"
                                            alt="Icon"
                                        />
                                    ) : (
                                        <img
                                            src={placeholder}
                                            className="topImage"
                                            alt=""
                                        />
                                    )}
                            </>:
                            <>
                            <Button variant="light" className="fs-6 me-4 px-3 py-2 fw-bold"
                                    onClick={loginClick}>Sign in</Button>
                            <Button className="fs-6 px-4 py-2 fw-bold"
                                    onClick={employerRegisterClick}>Find Jobs</Button>
                        </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
