import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const userLogged = JSON.parse(localStorage.getItem("userdata"));
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {userLogged.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="./furniture_list">
                Furniture
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="./classes_list">
                Classes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./section">
                Section
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./student">
                Student
              </a>
            </li> */}
          </ul>
          <div className="d-flex">
            <img
              width={50}
              src={`http://localhost/react_api/${userLogged.image}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
