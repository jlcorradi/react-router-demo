import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import {
  BrowserRouter as Router,
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
import { SettingsView } from "./views/SettingsView";
import { ErrorElement } from "./components/ErrorElement";
import { NotFoundView } from "./views/NotFoundView";
import { PublicLayout } from "./PublicLayout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="login" element={<LoginView />} />
            <Route path="register" element={<RegisterView />} />
            <Route path="recover" element={<RecoverPassword />} />
            <Route path="unauthorized" element={<UnauthorizedView />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["USER"]} />}>
            <Route path="/" element={<Navigate to={"/dashboard"} />} />
            <Route path="/dashboard" element={<DashboardView />}></Route>
          </Route>
          <Route element={<RequireAuth allowedRoles={["ROOT"]} />}>
            <Route
              path="/admin"
              errorElement={<ErrorElement message="Select an item" />}
              element={<AdminView />}
            >
              <Route path="settings" element={<SettingsView />} />
            </Route>
          </Route>
          <Route element={<RequireAuth allowedRoles={[]} />}>
            <Route path="/about" element={<AboutView />}></Route>
            <Route
              path="/*"
              element={<ErrorElement message="Select an option" />}
            />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
);
