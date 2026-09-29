import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("loggedInUser");

    if (!savedUser) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(savedUser));
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");

    navigate("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="dashboard-page">

      <div className="dashboard-card">

        <div className="dashboard-header">

          <div>
            <h1>Your Details</h1>
            <p>Account information</p>
          </div>

          <div className="profile-circle">
            {user.username.charAt(0).toUpperCase()}
          </div>

        </div>


        <div className="details-container">

          <div className="detail-box">
            <span>Username</span>
            <h2>{user.username}</h2>
          </div>


          <div className="detail-box">
            <span>Email ID</span>
            <h2>{user.email}</h2>
          </div>


          <div className="detail-box">
            <span>Password</span>
            <h2>
              {"•".repeat(user.password.length)}
            </h2>
          </div>

        </div>


        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Log Out
        </button>

      </div>

    </div>
  );
}

export default Dashboard;