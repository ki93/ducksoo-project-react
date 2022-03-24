import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GridOnIcon from '@mui/icons-material/GridOn';
import { Link } from "react-router-dom";

//사용할 요소에 대한 컴포넌트를 react-bootstrap에서 import합니다
const SideBar = () => {
  return (
    <div>
      <ListItemButton>
      <ListItemIcon>
        <ManageAccountsIcon />
      </ListItemIcon>
      <Link to="/main" style={{textDecoration:"none", color:"white"}} >
      <ListItemText primary="Admin"/>
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="User" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <GridOnIcon />
      </ListItemIcon>
      <ListItemText primary="Grid" />
    </ListItemButton>
    </div>
  );
};

export default SideBar;
