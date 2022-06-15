import React from "react";

import styled from "styled-components";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

import logo from "app/assets/images/logo.png";

export default function Main() {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ width: 200 }} />
        </Link>

        <Link to="/short-links">Short Links</Link>
      </Nav>
    </Container>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
