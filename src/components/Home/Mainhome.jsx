import React from "react";
import Layout from "../../Layout";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "./Home";

export default function Mainhome() {
  return (
    <Layout>
      <Navbar />
      <div className="divide" style={{ display: "flex" }}>
        <Sidebar />
        <Home />
      </div>
    </Layout>
  );
}
