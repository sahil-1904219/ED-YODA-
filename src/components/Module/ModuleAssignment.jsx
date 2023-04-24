import React from "react";
import Layout from "../../Layout";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import SidebarModule from "./SidebarModule/SidebarModule";
import Assignment from "./Pages/Assignment";
export default function ModuleAssignment() {
  return (
    <Layout>
      <Navbar />
      <div className="divide" style={{ display: "flex" }}>
        <Sidebar />
        <SidebarModule />
        <Assignment />
      </div>
    </Layout>
  );
}
