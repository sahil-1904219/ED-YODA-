import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Layout from "../Layout";

export default function Instructor() {
  return (
    <div>
      <Layout>
        <Navbar />
        <Sidebar />
      </Layout>
    </div>
  );
}
