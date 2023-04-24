import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import homehome from "../assets/images.png";
import instructor from "../assets/instructor.jpg";
import module from "../assets/module.png";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (linkId, event) => {
    // event.preventDefault();
    if (activeLink !== linkId) {
      setActiveLink(linkId);
    }
  };
  return (
    <div>
      <div className="mix">
        <div className="sidebar">
          <ul style={{ listStyle: "none", padding: "0px", margin: "0px" }}>
            <li>
              <Link to="/">
                <div
                  onClick={(e) => handleClick(1, e)}
                  style={{
                    width: "10vw",
                    padding: "0px",
                    margin: "0px",
                    backgroundColor: activeLink === 1 ? "#e0e6f2" : "#15294b",
                    color: activeLink === 1 ? "#black" : "white",
                  }}
                >
                  {" "}
                  <p
                    style={{
                      paddingLeft: "2vw",
                      color: activeLink === 1 ? "#black" : "white",
                    }}
                  >
                    {" "}
                    <img
                      src={homehome}
                      style={{ height: "6vh", width: "5vw", margin: "0px" }}
                    ></img>
                    <br />
                    Home
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/ModulePython">
                <div
                  onClick={(e) => handleClick(2, e)}
                  style={{
                    width: "10vw",
                    padding: "0px",
                    margin: "0px",
                    backgroundColor: activeLink === 2 ? "#e0e6f2" : "#15294b",
                  }}
                >
                  <p style={{ paddingLeft: "2vw", color: "white" }}>
                    {" "}
                    <img
                      src={module}
                      style={{
                        height: "6vh",
                        width: "5vw",
                        margin: "0px",
                        padding: "0px",
                      }}
                    ></img>
                    <br />
                    Module
                  </p>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/Instructor">
                <div
                  onClick={(e) => handleClick(3, e)}
                  style={{
                    backgroundColor: activeLink === 3 ? "#e0e6f2" : "#15294b",
                    width: "10vw",
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  <p
                    style={{
                      paddingLeft: "2vw",
                      color: "white",
                    }}
                  >
                    {" "}
                    <img
                      src={instructor}
                      style={{ height: "6vh", width: "5vw", margin: "0px" }}
                    ></img>
                    <br />
                    Instructor
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
