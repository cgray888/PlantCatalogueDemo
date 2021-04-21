import React from "react";

import Banner from "../resources/banner.png";

import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = ({className}) => (
  <Row>
    <Col>
      <Jumbotron
        style={{backgroundImage: `url(${Banner})`, backgroundSize: "auto"}}
        className={className}
      >
        <h1>Plant Catalogue</h1>
      </Jumbotron>
    </Col>
  </Row>
);

const StyledHeader = styled(Header)`
  text-align: center;
`;

export default StyledHeader;
