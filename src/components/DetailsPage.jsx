import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const params = useParams().company;
  console.log("parms", params);

  const [jobInformation, setJobInformation] = useState([]);

  useEffect(() => {
    handleGetJob();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetJob = async () => {
    try {
      let response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?company=" + params
      );
      if (response.ok) {
        let data = await response.json();
        setJobInformation(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1>Job Details</h1>
          <ListGroup>
            <ListGroup.Item>{jobInformation.title}</ListGroup.Item>
            <ListGroup.Item>{jobInformation.company_name}</ListGroup.Item>
            <ListGroup.Item>{jobInformation.location}</ListGroup.Item>
            <ListGroup.Item>{jobInformation.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsPage;
