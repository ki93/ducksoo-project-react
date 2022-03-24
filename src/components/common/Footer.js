import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "./Copyright";

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      position="fixed"
      bottom="0"
      left="0"
      minWidth="100%"
      sx={{
        py: 2,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[300]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="100%">
        <Copyright />
      </Container>
    </Box>
  );
}
