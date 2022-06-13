import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

export default function MyJumbotron() {
  return (
    <Header>
      <Container>
        <h1 className="text-center">Welcome To Strive Jobs</h1>
        <p className="text-center">Here is your job search at a glance.</p>
      </Container>
    </Header>
  );
}

const Header = styled.div`
  min-height: 10rem;
  background-image: url("https://media.istockphoto.com/photos/were-hiring-join-our-team-picture-id1359219140?b=1&k=20&m=1359219140&s=170667a&w=0&h=3YR9zon_Nk1WqsVXZbHLYGsPO1eeGwiMcSDsl224xVI=");
  background-size: cover;
  border-radius: 10px 10px 0px 0px;
`;
