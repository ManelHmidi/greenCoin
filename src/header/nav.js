import React from "react";
import Logo from "../images/logo.png";

const nav = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        className="header  navigation "
        style={{ height: "100%", padding: "10px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img
                    src={Logo}
                    alt="logo"
                    style={{ transform: "scale(1.7)" }}
                  />
                </a>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                ></div>
              </nav>
            </div>
          </div>
          <ul class="nav flex-column" style={{ color: "white" }}>
            <li
              class="nav-item"
              style={{ padding: "10px", fontSize: "20px", fontWeight: "bold" }}
            >
              <img src="https://img.icons8.com/fluency/48/000000/group.png"  style={{width:'40px',marginRight:'20px'}}/>
              Users
            </li>
            <li
              class="nav-item"
              style={{ padding: "10px", fontSize: "20px", fontWeight: "bold" }}
            >
              <img src="https://img.icons8.com/color/48/000000/region-code.png"  style={{width:'40px',marginRight:'20px'}}/>
              region
            </li>
            <li
              class="nav-item"
              style={{ padding: "10px", fontSize: "20px", fontWeight: "bold" }}
            >
              <img src="https://img.icons8.com/fluency/48/000000/statistics.png"  style={{width:'40px',marginRight:'20px'}}/>
              productivity rate
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default nav;
