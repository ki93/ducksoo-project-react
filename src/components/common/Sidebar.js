import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import {
    Link,
  } from "react-router-dom";

//사용할 요소에 대한 컴포넌트를 react-bootstrap에서 import합니다
const SideBar = () => {
  return (
    <div>
      <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/main">
      <ListItemText primary="Dashboard"/>
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AdminPanelSettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Admin" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="User" />
    </ListItemButton>
      
    </div>
  );
};

export default SideBar;
