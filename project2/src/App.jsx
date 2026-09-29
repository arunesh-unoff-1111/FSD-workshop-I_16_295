import { Navigate, Route, Routes } from "react-router-dom";

import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  );
}

export default App;