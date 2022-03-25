import "App.css";
import Login from "pages/Login";
import Layout from "components/common/Layout";
import Main from "pages/Main";
import DataGrid from 'pages/DataGrid';
import Admin from "pages/Admin";
import User from 'pages/User';
import Missing from "pages/Missing";
import Unauthorized from "pages/Unauthorized";
import RequireAuth from "components/RequireAuth";
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

export const ROLES = {
  Admin: 0,
  User: 2,
};


function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate replace to="/main" />} />
      {/* public routes */}
      <Route path="login" element={<Login />} />
      <Route path="unauthorized" element={<Unauthorized />} />
      {/* we want to protect these routes */}
      <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />}>
        <Route path="/main/" element={<Main />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="datagrid" element={<DataGrid />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="user" element={<User />} />
        </Route>
      </Route>

      {/* catch all */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
