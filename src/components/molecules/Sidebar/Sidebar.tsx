import { useState } from "react";
import "./index.css";
import Button from "../../atom/Button";
import CardContainer from "../../atom/CardContainer";
export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="container">
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2>Dashboard</h2>
        <ul>
          <li>Home</li>
          <li>Users</li>
          <li>Analytics</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>

      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="content">
        <div className="topbar">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}>
            <div />
          </button>
          <h3>Dashboard Overview</h3>
          <div
            style={{
              width: 35,
              height: 35,
              borderRadius: "50%",
              background: "#cbd5e1",
            }}
          />
        </div>

        <div className="cards">
          <CardContainer head="Card Title">cek</CardContainer>
          <div className="card">
            <h3>Users</h3>
            <p>1,234</p>
          </div>
          <div className="card">
            <h3>Orders</h3>
            <p>567</p>
          </div>
          <div className="card">
            <Button>cek</Button>
          </div>
        </div>

        <div className="chart" onClick={() => console.log("Chart clicked")}>
          Chart Placeholder
        </div>
      </div>
    </div>
  );
}
