import React from "react";

const Dashboard = () => {
  return (
    <div
      className="dashboard"
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f6f9",
      }}
    >

      {/* Sidebar */}
      <aside
        className="sidebar"
        style={{
          width: "250px",
          backgroundColor: "#2c3e50",
          color: "white",
          padding: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          My Dashboard
        </h2>

        <ul
          style={{
            listStyle: "none",
            padding: "0",
          }}
        >
          <li style={{ padding: "15px", cursor: "pointer" }}>
            🏠 Dashboard
          </li>

          <li style={{ padding: "15px", cursor: "pointer" }}>
            👨‍🎓 Students
          </li>

          <li style={{ padding: "15px", cursor: "pointer" }}>
            📚 Courses
          </li>

          <li style={{ padding: "15px", cursor: "pointer" }}>
            📊 Reports
          </li>

          <li style={{ padding: "15px", cursor: "pointer" }}>
            ⚙️ Settings
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main
        className="main-content"
        style={{
          flex: "1",
          padding: "20px",
        }}
      >

        {/* Navbar */}
        <nav
          className="navbar"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            marginBottom: "25px",
          }}
        >
          <h2 style={{ margin: "0", color: "#2c3e50" }}>
            Dashboard
          </h2>

          <span style={{ color: "#555", fontSize: "16px" }}>
            Welcome, Admin 👋
          </span>
        </nav>

        {/* Cards */}
        <div
          className="cards"
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >

          <div
            className="card"
            style={{
              flex: "1",
              minWidth: "150px",
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#555", margin: "0 0 15px" }}>
              Total Students
            </h3>

            <p style={{ fontSize: "30px", fontWeight: "bold", color: "#3498db", margin: "0" }}>
              350
            </p>
          </div>

          <div
            className="card"
            style={{
              flex: "1",
              minWidth: "150px",
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#555", margin: "0 0 15px" }}>
              Total Courses
            </h3>

            <p style={{ fontSize: "30px", fontWeight: "bold", color: "#27ae60", margin: "0" }}>
              18
            </p>
          </div>

          <div
            className="card"
            style={{
              flex: "1",
              minWidth: "150px",
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#555", margin: "0 0 15px" }}>
              Teachers
            </h3>

            <p style={{ fontSize: "30px", fontWeight: "bold", color: "#e67e22", margin: "0" }}>
              30
            </p>
          </div>

          <div
            className="card"
            style={{
              flex: "1",
              minWidth: "150px",
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#555", margin: "0 0 15px" }}>
              Reports
            </h3>

            <p style={{ fontSize: "30px", fontWeight: "bold", color: "#9b59b6", margin: "0" }}>
              70
            </p>
          </div>

        </div>

        {/* Recent Activity */}
        <div
          className="activity"
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            overflowX: "auto",
          }}
        >
          <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>
            Recent Activity
          </h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#2c3e50", color: "white" }}>
                <th style={{ padding: "15px" }}>Name</th>
                <th style={{ padding: "15px" }}>Course</th>
                <th style={{ padding: "15px" }}>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  AMMU
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  BBA
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd", color: "green" }}>
                  Active
                </td>
              </tr>

              <tr>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  VICKY
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  BCA
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd", color: "green" }}>
                  Active
                </td>
              </tr>

              <tr>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  Anu
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
                  BSC
                </td>
                <td style={{ padding: "15px", borderBottom: "1px solid #ddd", color: "red" }}>
                  Inactive
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
