import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { AboutView } from "./views/AboutView";
import { DashboardView } from "./views/DashboardView";
import { LoginView } from "./views/LoginView";
import { RecoverPassword } from "./views/RecoverPassword";
import { RegisterView } from "./views/RegisterView";
import { RequireAuth } from "./routes/RequireAuth";
import { UnauthorizedView } from "./views/UnauthorizedView";
import { AdminView } from "./views/AdminView";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="recover" element={<RecoverPassword />} />
          <Route path="unauthorized" element={<UnauthorizedView />} />

          <Route element={<RequireAuth allowedRoles={["USER"]} />}>
            <Route path="/" element={<Navigate to={"/dashboard"} />} />
            <Route path="/dashboard" element={<DashboardView />}></Route>
          </Route>
          <Route element={<RequireAuth allowedRoles={["ROOT"]} />}>
            <Route path="/admin" element={<AdminView />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[]} />}>
            <Route path="/about" element={<AboutView />}></Route>
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
);
