import React from "react";
import { Container, Row, Col } from "reactstrap";

const Directory = (props) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1>Name</h1>
            </Col>
            <Col>
                <h1>Location</h1>
            </Col>
            <Col>
                <h1>Email</h1>
            </Col>
        </Row>
    </Container>
  );
}

export default Directory;