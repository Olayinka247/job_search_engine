import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import JobPage from "./JobPage";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async (e) => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${searchQuery}&limit=10`
      );
      if (response.ok) {
        let data = await response.json();
        setSearchResults(data.data);
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
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Job Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <button onClick={handleSearch}>Search Jobs</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Job List</h1>
          <ListGroup>
            {searchResults
              //   .filter(
              //     (job) =>
              //       job.category
              //         .toLowerCase()
              //         .includes(searchQuery.toLowerCase()) ||
              //       job.category.toUpperCase().includes(searchQuery.toUpperCase())
              //   )
              .map((job) => (
                <JobPage key={job._id} job={job} />
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
