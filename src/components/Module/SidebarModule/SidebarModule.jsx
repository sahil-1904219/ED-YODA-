import React from "react";
import play from "../../assets/play-circle.svg";
import Quiz from "../../assets/activeModuleQuiz.svg";
import Assignment from "../../assets/activeAssignment.svg";
import { Link } from "react-router-dom";
import "./SidebarModule.css";
export default function Module() {
  return (
    <div className="modulebody">
      <div className="sidebartwo">
        <ul style={{ listStyle: "none", color: "black" }}>
          <li>
            <Link to="/ModulePython" >
              <img src={play} style={{ height: "8vh", width: "3vw" }}></img>
              Python Learning
            </Link>
          </li>
          <li>
            <Link to="/ModuleQuiz">
              <p>
                <img src={Quiz} style={{ height: "8vh", width: "3vw" }}></img>
                Quiz-1:Data type
              </p>
            </Link>
          </li>
          <li>
            <Link to="/ModuleAssignment">
              <p>
                <img
                  src={Assignment}
                  style={{ height: "8vh", width: "3vw" }}
                ></img>
                Assignment-1:
                <br />
                Operator | Loops
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
