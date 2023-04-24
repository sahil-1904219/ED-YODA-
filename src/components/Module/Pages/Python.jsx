import React from "react";

import i from "../../assets/information-circle 1.svg";
import play from "../../assets/topic.svg";
import video from "../../assets/videocam.svg";
import fileee from "../../assets/document.svg";
import pythontxt from "../../assets/pythontext.JPG";
export default function Python() {
  return (
    <div
      style={{
        backgroundColor: "#f2f6ff",
        height: "85vh",
        width: "70vw",
      }}
    >
      <div style={{ marginTop: "8vh", marginLeft: "8vw" }}>
        <b>Python Loops </b>
      </div>
      <br />
      <div style={{ marginLeft: "8vw", color: "rgb(178, 168, 168)" }}>
        15 Dec 2021, Thursday, 07:30 PM
      </div>
      <br />
      <div style={{ marginLeft: "55vw", fontSize: ".8rem", color: "#0000EE " }}>
        <b>Daily Feedback</b>
      </div>
      <div className="contents">
        <ul
          style={{ listStyle: "none", paddingLeft: "8vw", marginBottom: "0px" }}
        >
          <li
            style={{
              display: "inline-block",
              padding: "1rem",
              fontSize: ".7rem",
              backgroundColor: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <img src={i} style={{ height: "2vh", width: "2vw" }}></img>
            <b> SESSION PlAN</b>
          </li>
          <li
            style={{
              display: "inline-block",
              paddingLeft: "2vw",
              paddingRight: "2vw",
              fontSize: ".7rem",
            }}
          >
            <img src={play} style={{ height: "2vh", width: "2vw" }}></img>
            <b> PRE-WATCH VIDEOS</b>
          </li>
          <li
            style={{
              display: "inline-block",
              paddingLeft: "2vw",
              paddingRight: "2vw",
              fontSize: ".7rem",
            }}
          >
            <img src={video} style={{ height: "2vh", width: "2vw" }}></img>
            <b>SESSION RECORDING</b>
          </li>
          <li
            style={{
              display: "inline-block",
              paddingLeft: "2vw",
              paddingRight: "2vw",
              fontSize: ".7rem",
            }}
          >
            <img src={fileee} style={{ height: "2vh", width: "2vw" }}></img>
            <b>REFERENCES</b>
          </li>
        </ul>
      </div>
      <div>
        <img
          src={pythontxt}
          style={{
            height: "40vh",
            width: "55vw",
            marginLeft: "8vw",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        ></img>
      </div>
    </div>
  );
}
