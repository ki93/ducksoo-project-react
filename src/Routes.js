import * as React from "react";
import Login from "pages/Login";
import Main from "pages/Main";
import GanttChart1 from "pages/GanttChart1";
import GanttChart2 from "pages/GanttChart2";
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import useAuth, { AuthProvider } from "./useAuth";

export default function Router() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route
            path="/chart1"
            element={
                <GanttChart1 />
            }
          />
          <Route
            path="/chart2"
            element={
                <GanttChart2 />
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div>
      <AuthStatus />
      <Outlet />
    </div>
  );
}

function AuthStatus() {
  let auth = useAuth();
  // let navigate = useNavigate();
  if (!auth.user) {
     //return <p>You are not logged in.</p>;
    return null;
  }
  // return <LayoutView></LayoutView>;
  return null;
}

// function RequireAuth({ children }) {
//   let auth = useAuth();
//   let location = useLocation();

//   if (!auth.user) {
//     // Redirect them to the /login page, but save the current location they were
//     // trying to go to when they were redirected. This allows us to send them
//     // along to that page after they login, which is a nicer user experience
//     // than dropping them off on the home page.
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

//   return children;
// }