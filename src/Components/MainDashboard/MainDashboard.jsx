import React from "react";

// manually imported components
import Sidebar from "./Sidebar";
import MainDashboardContent from "./MainDashboardContent";

const MainDashboard = () => {
  // get dark or light from localstorage
  const darkTheme = JSON.parse(localStorage.getItem("theme"));

  return (
    <div className="flex w-full">
      <div className="800px:w-[300px] w-[60px]">
        <Sidebar />
      </div>
      <div
        className={`800px:w-[100%] w-[80%] ${
          darkTheme ? "bg-[#060B13]" : "bg-white"
        }`}>
        <MainDashboardContent />
      </div>
    </div>
  );
};

export default MainDashboard;
