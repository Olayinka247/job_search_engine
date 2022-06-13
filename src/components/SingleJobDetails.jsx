import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

export default function SingleJobDetails({ job }) {
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>{job.category}</ListGroup.Item>
            <ListGroup.Item>{job.title}</ListGroup.Item>
            <ListGroup.Item>{job.publication_date}</ListGroup.Item>
            <ListGroup.Item>{job.category}</ListGroup.Item>
            <ListGroup.Item>{job.job_type}</ListGroup.Item>
            <ListGroup.Item
              dangerouslySetInnerHTML={{ __html: job.description }}
            ></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
