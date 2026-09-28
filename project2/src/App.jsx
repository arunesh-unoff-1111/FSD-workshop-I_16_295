import { useState } from "react";
import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import "./App.css";

function App() {
  const [page, setPage] = useState("signup");

  return (
    <div className="auth-container">
      {page === "signup" && (
        <Signup goToLogin={() => setPage("login")} />
      )}

      {page === "login" && (
        <Login
          goToSignup={() => setPage("signup")}
          goToDashboard={() => setPage("dashboard")}
        />
      )}

      {page === "dashboard" && (
        <Dashboard
          onLogout={() => setPage("login")}
        />
      )}
    </div>
  );
}

export default App;