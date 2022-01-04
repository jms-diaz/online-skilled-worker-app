import React from 'react';
import {Container, Row} from "react-bootstrap";
import MainCard from "./mainCard";

export default function MainContainer({customers}) {
    return (
        <Container className="py-5">
            <h3 className="mb-5 fw-bold">Jobs Near You</h3>
            <Row xs={1} md={3} className="g-4">
                {customers.map((c) => (
                    <MainCard customer={c} key={c.user_id}/>
                ))
                }
            </Row>
        </Container>
    )
}