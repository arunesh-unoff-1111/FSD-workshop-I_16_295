import { useState } from "react";

function Login({ goToSignup, goToDashboard }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      alert("No account found. Please create an account first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (email === user.email && password === user.password) {
      localStorage.setItem("loggedIn", "true");

      goToDashboard();
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="auth-box">
      <h1>Welcome Back</h1>
      <p>Login to your account</p>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p className="switch-text">
        Don't have an account?{" "}
        <button
          className="link-button"
          onClick={goToSignup}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default Login;