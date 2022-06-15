import React, { useState, useContext, useEffect } from "react";

import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

import { ShortLinksContext } from "app/services/short-links/short-links.context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Form() {
  const {
    openForm,
    setOpenForm,
    validations,
    createShortLink,
    createdShortLink,
    creatingShortLink,
  } = useContext(ShortLinksContext);

  const [slug, setSlug] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    if (createdShortLink) {
      setSlug("");
      setDestination("");
    }
  }, [createdShortLink]);

  return (
    <Modal open={openForm} onClose={() => setOpenForm(false)}>
      <Box sx={style}>
        <Field>
          <TextField
            value={slug}
            required
            fullWidth
            label="Slug"
            variant="standard"
            disabled={creatingShortLink}
            error={!!validations.slug}
            onChange={(event) => setSlug(event.target.value)}
            helperText={!!validations.slug && validations.slug}
          />
        </Field>
        <Field>
          <TextField
            value={destination}
            required
            fullWidth
            multiline
            label="Destination Url"
            variant="standard"
            disabled={creatingShortLink}
            error={!!validations.destination}
            onChange={(event) => setDestination(event.target.value)}
            helperText={!!validations.destination && validations.destination}
          />
        </Field>

        <Field
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 40,
          }}
        >
          <LoadingButton
            onClick={() => createShortLink({ slug, destination })}
            loading={creatingShortLink}
            variant="outlined"
          >
            Create
          </LoadingButton>
        </Field>
      </Box>
    </Modal>
  );
}

const Field = styled.div`
  margin-bottom: 10px;
`;
