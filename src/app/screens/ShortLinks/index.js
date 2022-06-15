import React, { useContext } from "react";

import Lottie from "lottie-react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Container from "@mui/material/Container";
import LoadingButton from "@mui/lab/LoadingButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import List from "./List";
import Form from "./Form";
import EditForm from "./EditForm";
import { Title, Wrapper } from "app/components/styles";
import { ShortLinksContext } from "app/services/short-links/short-links.context";

import noLinks from "app/assets/lottie/no-links.json";
import loadingLottie from "app/assets/lottie/loading.json";

export default function ShortLinks() {
  const { initialized, shortLinks, setOpenForm } = useContext(
    ShortLinksContext
  );
  const hasRecords = shortLinks.length > 0;

  if (!initialized) {
    return (
      <AnimationWrapper>
        <Lottie animationData={loadingLottie} />
      </AnimationWrapper>
    );
  }

  return (
    <Container>
      <Wrapper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {hasRecords ? (
              <List />
            ) : (
              <AnimationWrapper>
                <Title>No data</Title>
                <Lottie animationData={noLinks} />
              </AnimationWrapper>
            )}
          </Grid>

          <Grid item xs={12}>
            <ActionWrapper>
              <LoadingButton
                variant="contained"
                onClick={() => setOpenForm(true)}
                endIcon={<AddCircleOutlineIcon />}
              >
                Add Short Link
              </LoadingButton>
            </ActionWrapper>
          </Grid>
        </Grid>
        <Form />
        <EditForm />
      </Wrapper>
    </Container>
  );
}

const ActionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
