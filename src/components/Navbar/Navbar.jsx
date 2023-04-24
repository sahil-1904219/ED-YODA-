import React from "react";
import logo from "../assets/download.jpg";
import dropdown from "../assets/Vector (1).png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="hbody">
      <div className="Navbar">
        <div className="upper">
          <div className="textn">
            <h2>
              <b>EDYODA</b>
            </h2>
          </div>
          <div className="leftn">
            <p>
              Hi test Learner!
              <img
                src={logo}
                alt="logo"
                style={{ height: "18px", width: "18px" }}
              ></img>
            </p>
          </div>
        </div>
        <nav>
          <ul>
            <li tabindex="0">
              DS031221 <img src={dropdown}></img>
              <ul>
                <li>Select Program</li>
                <br />
                <li>ECRD</li>
                <li>FSR222222</li>
                <li style={{ paddingRight: "5vw" }}>DS261121</li>
                <li
                  style={{
                    paddingLeft: "0px",
                    width: "7vw",
                    color: "black",
                    backgroundColor: "rgb(189, 189, 197)",
                    borderRadius: "10px",
                  }}
                >
                  DS031221
                </li>
              </ul>
            </li>

            <li style={{ paddingLeft: "20px" }}>
              <b>Data Scientists program</b>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
