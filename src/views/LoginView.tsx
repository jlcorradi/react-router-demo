import React, { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function LoginView() {
  const auth = useAuthContext();
  const location = useLocation();

  const navigateTo = location.state?.from || "/";

  if (auth?.state.isLoggedin) {
    return <Navigate to={navigateTo} replace></Navigate>;
  }

  return (
    <>
      <h1>This is the Login</h1>
      <p>Login form - to implement</p>
      <button
        className="py-2 px-4 text-white rounded-sm bg-blue-700"
        type="button"
        onClick={() => {
          auth?.actions.setIsLoggedin(true);
          auth.actions.setRoles(["ROOT", "USER"]);
        }}
      >
        Login
      </button>
    </>
  );
}

export { LoginView };
