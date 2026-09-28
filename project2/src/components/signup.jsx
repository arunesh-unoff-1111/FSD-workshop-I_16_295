import { useState } from "react";

function Signup({ goToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const user = {
      username: username,
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");

    goToLogin();
  };

  return (
    <div className="auth-box">
      <h1>Create Account</h1>
      <p>Sign up to continue</p>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Create Account</button>
      </form>

      <p className="switch-text">
        Already have an account?{" "}
        <button className="link-button" onClick={goToLogin}>
          Login
        </button>
      </p>
    </div>
  );
}

export default Signup;