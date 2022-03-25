import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright "}
        {new Date().getFullYear()}
        {". HN Inc & Ducksoo All Rights Reserved."}
      </Typography>
    );
  }
  
export default Copyright;
