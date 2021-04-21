import React from "react";
import StyledHeader from "./components/Header";
import Footer from "./components/Footer";
import PlantList from "./components/PlantList";

import Container from "react-bootstrap/Container";
import styled from "styled-components";

document.body.style.backgroundColor = "darkseagreen";

const App = ({className}) => (
  <Container className={className}>
    <StyledHeader />
    <PlantList />
    <Footer />
  </Container>
);

const StyledApp = styled(App)`
  box-shadow: 0px 0px 5px gray;
  padding: 10px;
  background-color: rgb(247, 247, 247);
`;

export default StyledApp;
