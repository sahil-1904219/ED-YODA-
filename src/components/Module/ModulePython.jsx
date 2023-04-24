import React from "react";
import Layout from "../../Layout";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import SidebarModule from "./SidebarModule/SidebarModule";
import Python from "./Pages/Python";
export default function ModulePython() {
  return (
    <Layout>
      <Navbar />
      <div className="divide" style={{ display: "flex" }}>
        <Sidebar />
        <SidebarModule />
        <Python />
      </div>
    </Layout>
  );
}
