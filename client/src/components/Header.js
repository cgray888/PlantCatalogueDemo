import React from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";

const Header = ({className}) => (
  <Jumbotron className={className}>
    <h1>Plant Catalogue</h1>
  </Jumbotron>
);

const StyledHeader = styled(Header)`
  background-color: LightGreen;
`;

export default StyledHeader;
