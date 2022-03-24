import React from "react";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Logout() {
    const doLogout=()=>{
        alert('click Logout');
    }
  return (
    <IconButton color="inherit" onClick={doLogout}>
      <LogoutIcon />
    </IconButton>
  );
}
