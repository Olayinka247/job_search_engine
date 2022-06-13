import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SingleJobDetails from "./SingleJobDetails";

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
        `https://strive-jobs-api.herokuapp.com/jobs?company=` + params
      );
      if (response.ok) {
        let data = await response.json();
        console.log("HERE IS THE DATA", data);
        setJobInformation(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="d-flex text-center">Job Details of {params}</h3>
          <>
            {jobInformation.map((job) => (
              <SingleJobDetails key={job._id} job={job} />
            ))}
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsPage;
