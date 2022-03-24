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
        {". "}
        <Link color="inherit" href="http://www.hncorp.world/main/main.do">
          HN Inc
        </Link>{" "}
        {" All Rights Reserved."}
      </Typography>
    );
  }
  
export default Copyright;
