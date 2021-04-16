import React from "react";
import StyledHeader from "./components/Header";
import Footer from "./components/Footer";
import PlantList from "./components/PlantList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const App = ({className}) => (
  <Container className={className}>
    <Row>
      <Col>
        <StyledHeader />
      </Col>
    </Row>

    <Row>
      <PlantList />
    </Row>

    <Row>
      <Col>
        <Footer />
      </Col>
    </Row>
  </Container>
);

const StyledApp = styled(App)`
  box-shadow: 0px 0px 5px gray;
  padding: 10px;
`;

export default StyledApp;
