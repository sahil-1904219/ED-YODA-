import React from "react";
import Quizz from "../../assets/Quiz.JPG";
export default function Quiz() {
  return (
    <div style={{ backgroundColor: "#f2f6ff", height: "85vh", width: "70vw" }}>
      <div style={{ marginTop: "8vh", marginLeft: "8vw" }}>
        <b>Quiz-1: Data Types </b>
      </div>
      <br />
      <div style={{ marginLeft: "8vw", color: "rgb(178, 168, 168)" }}>
        16 Dec 2021, Thursday
      </div>
      <br />
      <div style={{ marginLeft: "8vw", fontSize: ".8rem" }}>
        <b>Quiz Details</b>
      </div>
      <div
        style={{
          marginLeft: "8vw",
          height: "18vh",
          width: "56vw",
          marginTop: " 4vh",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <img src={Quizz} style={{ height: "18vh", width: "56vw" }}></img>
      </div>
    </div>
  );
}
