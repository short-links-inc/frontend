import React, { useContext } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { ShortLinksContext } from "app/services/short-links/short-links.context";

const columns = [
  { id: "slug", label: "Slug" },
  { id: "destination", label: "Destination" },
  { id: "url", label: "Url" },
];

export default function Lists() {
  const {
    editShortLink,
    shortLinks,
    destroyShortLink,
    destroyingShortLink,
  } = useContext(ShortLinksContext);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}

              <TableCell key={"actions"}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shortLinks.map((shortLink) => {
              const { id } = shortLink;

              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                  {columns.map((column) => {
                    const value = shortLink[column.id];
                    const element =
                      column.id === "url" ? (
                        <a href={value} target="_blank" rel="noreferrer">
                          {value}
                        </a>
                      ) : (
                        value
                      );

                    return <TableCell key={column.id}>{element}</TableCell>;
                  })}

                  <TableCell key="actions" align="right">
                    <IconButton
                      disabled={destroyingShortLink[id]}
                      color="primary"
                      component="span"
                      onClick={() => editShortLink(shortLink)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      disabled={destroyingShortLink[id]}
                      color="error"
                      component="span"
                      onClick={() => {
                        destroyShortLink(id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
