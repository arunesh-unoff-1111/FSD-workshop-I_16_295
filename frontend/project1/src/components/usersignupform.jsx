import React, { useState } from "react";

export default function UserSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Data:", formData);
    alert("Account created successfully!");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Create Account</h1>

        <p style={styles.subtitle}>
          Sign up to get started
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Email */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Password */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Confirm Password */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <span style={styles.loginLink}>Log in</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    boxSizing: "border-box",
  },

  container: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "#0d0d0d",
    border: "1px solid #333",
    borderRadius: "12px",
    padding: "40px",
    boxSizing: "border-box",
    boxShadow: "0 10px 40px rgba(255,255,255,0.05)",
  },

  heading: {
    margin: "0 0 8px",
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    margin: "0 0 30px",
    color: "#999",
    textAlign: "center",
    fontSize: "14px",
  },

  inputGroup: {
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
  },

  input: {
    width: "100%",
    padding: "13px 14px",
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid #444",
    borderRadius: "6px",
    outline: "none",
    fontSize: "15px",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "14px",
    marginTop: "5px",
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
  },

  loginText: {
    textAlign: "center",
    marginTop: "25px",
    fontSize: "14px",
    color: "#999",
  },

  loginLink: {
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  },
};