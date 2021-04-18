import React from "react";

import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = ({className}) => (
  <Row>
    <Col>
      <Jumbotron className={className}>
        <h1>Plant Catalogue</h1>
      </Jumbotron>
    </Col>
  </Row>
);

const StyledHeader = styled(Header)`
  background-color: LightGreen;
  text-align: center;
`;

export default StyledHeader;
