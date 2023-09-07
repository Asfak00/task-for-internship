import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  // get dark or light from localstorage
  const darkTheme = JSON.parse(localStorage.getItem("theme"));

  return (
    <section className="w-full h-[100vh] bg-[#ECF0F9] max-w-[1200px] mx-auto flex">
      <div className="800px:w-[300px] w-[60px]">
        <DashboardSidebar />
      </div>
      <div
        className={`800px:w-[85%] w-[80%] ${
          darkTheme ? "bg-[#060B13]" : "bg-white"
        }`}>
        <DashboardContent />
      </div>
    </section>
  );
};

export default Dashboard;
