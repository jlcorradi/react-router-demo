import React from "react";
import { AppLayout } from "../Layout";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ allowedRoles }: { allowedRoles: Array<string> }) {
  const auth = useAuthContext();
  const location = useLocation();

  if (!auth.state.isLoggedin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (
    allowedRoles.length > 0 &&
    !auth.state.roles.find((role) => allowedRoles.includes(role))
  ) {
    return <Navigate to={"/unauthorized"} replace></Navigate>;
  }

  return <AppLayout></AppLayout>;
}

export { RequireAuth };
