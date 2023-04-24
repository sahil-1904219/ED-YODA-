import React from "react";
import Layout from "../../Layout";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import SidebarModule from "./SidebarModule/SidebarModule";
import Quiz from "./Pages/Quiz";
export default function ModuleQuiz() {
  return (
    <Layout>
      <Navbar />
      <div className="divide" style={{ display: "flex" }}>
        <Sidebar />
        <SidebarModule />
        <Quiz />
      </div>
    </Layout>
  );
}
