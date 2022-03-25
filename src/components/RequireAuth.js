import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log("RequireAuth: ", auth);
  console.log("allowedRoles: ", allowedRoles);
  console.log("hasrole: ", allowedRoles?.some(role => auth?.roles?.includes(role)));

  return allowedRoles?.some(role => auth?.roles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
