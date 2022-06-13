import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" placeholder="Search" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
