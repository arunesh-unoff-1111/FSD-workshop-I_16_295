import { useState } from "react";

function APITester() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [body, setBody] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = async () => {
    setLoading(true);
    setResponse("");
    setStatus("");
    setError("");

    try {
      const options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Add request body only for POST and PUT
      if (method === "POST" || method === "PUT") {
        if (body.trim() !== "") {
          try {
            JSON.parse(body);
          } catch {
            setError("Invalid JSON in request body.");
            setLoading(false);
            return;
          }

          options.body = body;
        }
      }

      const res = await fetch(url, options);

      setStatus(`${res.status} ${res.statusText}`);

      const contentType = res.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();

        setResponse(JSON.stringify(data, null, 2));
      } else {
        const data = await res.text();

        setResponse(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setResponse("");
    setStatus("");
    setError("");
    setBody("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>API Tester</h1>

        <p style={styles.subtitle}>
          Test APIs directly from the browser
        </p>

        {/* Method + URL */}
        <div style={styles.requestRow}>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            style={styles.method}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter API URL"
            style={styles.url}
          />
        </div>

        {/* Request Body */}
        {(method === "POST" || method === "PUT") && (
          <div style={styles.section}>
            <label style={styles.label}>Request Body</label>

            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder={`{
  "name": "John",
  "email": "john@example.com"
}`}
              style={styles.textarea}
            />
          </div>
        )}

        {/* Buttons */}
        <div style={styles.buttonRow}>
          <button
            onClick={sendRequest}
            disabled={loading}
            style={styles.sendButton}
          >
            {loading ? "Sending..." : "Send Request"}
          </button>

          <button onClick={clearAll} style={styles.clearButton}>
            Clear
          </button>
        </div>

        {/* Status */}
        {status && (
          <div style={styles.section}>
            <h3 style={styles.heading}>Status</h3>

            <div style={styles.status}>
              {status}
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={styles.section}>
            <h3 style={styles.heading}>Error</h3>

            <div style={styles.error}>
              {error}
            </div>
          </div>
        )}

        {/* Response */}
        {response && (
          <div style={styles.section}>
            <h3 style={styles.heading}>Response</h3>

            <pre style={styles.response}>
              {response}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    padding: "40px 20px",
    boxSizing: "border-box",
  },

  card: {
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    backgroundColor: "#111",
    border: "1px solid #333",
    borderRadius: "10px",
    padding: "30px",
    boxSizing: "border-box",
  },

  title: {
    margin: "0",
    fontSize: "32px",
    fontWeight: "600",
  },

  subtitle: {
    color: "#aaa",
    marginTop: "8px",
    marginBottom: "30px",
  },

  requestRow: {
    display: "flex",
    gap: "10px",
    width: "100%",
  },

  method: {
    width: "120px",
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid #444",
    borderRadius: "6px",
    padding: "13px",
    fontSize: "15px",
    cursor: "pointer",
  },

  url: {
    flex: "1",
    minWidth: "0",
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid #444",
    borderRadius: "6px",
    padding: "13px",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  },

  section: {
    marginTop: "25px",
  },

  label: {
    display: "block",
    marginBottom: "10px",
    fontSize: "15px",
  },

  heading: {
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "10px",
  },

  textarea: {
    width: "100%",
    minHeight: "180px",
    resize: "vertical",
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid #444",
    borderRadius: "6px",
    padding: "15px",
    fontSize: "14px",
    fontFamily: "monospace",
    boxSizing: "border-box",
    outline: "none",
  },

  buttonRow: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },

  sendButton: {
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    padding: "12px 22px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },

  clearButton: {
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid #555",
    borderRadius: "6px",
    padding: "12px 22px",
    fontSize: "15px",
    cursor: "pointer",
  },

  status: {
    backgroundColor: "#000",
    border: "1px solid #444",
    borderRadius: "6px",
    padding: "12px",
    color: "#fff",
  },

  error: {
    backgroundColor: "#000",
    border: "1px solid #777",
    borderRadius: "6px",
    padding: "12px",
    color: "#fff",
  },

  response: {
    width: "100%",
    maxHeight: "500px",
    overflow: "auto",
    backgroundColor: "#000",
    border: "1px solid #444",
    borderRadius: "6px",
    padding: "15px",
    color: "#fff",
    fontSize: "14px",
    lineHeight: "1.5",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    boxSizing: "border-box",
  },
};

export default APITester;