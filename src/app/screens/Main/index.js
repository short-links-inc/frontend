import React from "react";

import Container from "@mui/material/Container";

import { Title, Wrapper } from "app/components/styles";

export default function Main() {
  return (
    <Container>
      <Wrapper>
        <Title>Welcome to URL Shortener</Title>
      </Wrapper>
    </Container>
  );
}
