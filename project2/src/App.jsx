import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import About from "./components/about";

import "./App.css";

// ------------------------------------
// Protected Route
// ------------------------------------
function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// ------------------------------------
// App
// ------------------------------------
function App() {
  return (
    <Routes>

      {/* Default page */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Signup */}
      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Unknown URL */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  );
}

export default App;