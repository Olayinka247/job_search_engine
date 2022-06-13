import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function JobPage({ job }) {
  return (
    <Link to={"/" + job.company_name}>
      <ListGroup.Item key={job._id}>{job.title}</ListGroup.Item>
    </Link>
  );
}
