import React from "react";
import "./layout.css";

function Sidebar() {
  const userLogged = JSON.parse(localStorage.getItem("userdata"));

  return (
    <div className="col-2">
      <div className="dashboard-sidebar">
        <div className="dashboard-user-image">
          <img src={`${global.config.apiUrl}${userLogged.image}`} alt="" />
        </div>
        <a className="navbar-brand" href="#">
          {userLogged.name}
        </a>
        <hr style={{ backgroundColor: "#ffffff" }} />
        <a href="javascript:void(0)" className="dashboard-nav-link">
          Admin Dashboard
        </a>
        <a href="http://localhost:3000/" className="dashboard-nav-link">
          Home
        </a>
        <a href="./Product" className="dashboard-nav-link">
          Furniture
        </a>
        <a href="./order" className="dashboard-nav-link">
          Orders
        </a>
        {/* <a href="./student" className="dashboard-nav-link">
          Student
        </a>
        <a href="./section" className="dashboard-nav-link">
          Section
        </a>
        <a href="./class" className="dashboard-nav-link">
          Classes
        </a> */}
      </div>
    </div>
  );
}

export default Sidebar;
