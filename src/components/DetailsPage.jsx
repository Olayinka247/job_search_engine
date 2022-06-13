import React from "react";

const DetailsPage = ({ job }) => {
  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
    </div>
  );
};

export default DetailsPage;
