import React from "react";
import "./Home.css";
import firstboxx from "../assets/firstboxx.JPG";
import secondboxx from "../assets/secondboxx.JPG";
import thirdboxx from "../assets/thirdboxx.JPG";
import Navbar from "../Navbar/Navbar";
export default function Home() {
  return (
    <div className="homebody">
      <div
        style={{
          paddingLeft: "3vw",
          paddingTop: "2vh",
          fontSize: "1.5rem",
          paddingBottom: "2vh",
        }}
      >
        <b>Upcoming Certifications</b>
      </div>
      <div className="firstbox">
        <img src={firstboxx} style={{ height: "18vh", width: "69vw" }}></img>
      </div>
      <div
        style={{
          paddingLeft: "3vw",
          paddingTop: "5vh",
          fontSize: "1.5rem",
          paddingBottom: "1vh",
        }}
      >
        <b>Continue Learning</b>
      </div>
      <div
        style={{
          paddingLeft: "36vw",
          paddingTop: "0px",
          fontSize: ".8rem",
          color: "blue",
          paddingBottom: "1vh",
        }}
      >
        <b>VIEW MODULE DETAILS</b>
      </div>
      <div className="down">
        <div className="secondbox">
          <img src={secondboxx} style={{ height: "39vh", width: "46vw" }}></img>
        </div>
        <div className="thirdbox">
          <img src={thirdboxx} style={{ height: "30vh", width: "25vw" }}></img>
          <div style={{ paddingLeft: "2vw", fontSize: ".8rem", color: "blue" }}>
            <b>VIEW DETAILED PROGRESS</b>
          </div>
        </div>
      </div>
    </div>
  );
}
